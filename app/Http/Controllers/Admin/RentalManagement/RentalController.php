<?php

namespace App\Http\Controllers\Admin\RentalManagement;

use App\Enums\ActiveInactive;
use App\Enums\RentalProperty;
use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Feature;
use App\Models\FeatureCategory;
use App\Models\Rental;
use App\Models\User;
use App\Services\DataTableService;
use App\Services\RentalService;
use App\Services\SitemapService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RentalController extends Controller
{
    public function __construct(
        protected DataTableService $dataTableService,
        protected RentalService $rentalService,
        protected SitemapService $sitemapService
    ) {}

    public function index(): Response
    {
        $queryBody = Rental::query()->with(['user']);

        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['title', 'description', 'address'],
            'filterable' => [
                'user_id',
                'property_type',
                'status',
            ],
            'sortable' => [
                'id',
                'title',
                'purchase_price',
                'bedrooms',
                'bathrooms',
                'square_feet',
                'property_type',
                'status',
                'created_at',
            ],
        ]);

        $users = User::where('is_verified', true)->where('status', ActiveInactive::ACTIVE)->get();

        return Inertia::render('admin/rental-management/rentals/index', [
            'rentals' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
            'users' => $users,
            'propertyTypes' => collect(RentalProperty::cases())->map(fn ($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
            'statuses' => collect(ActiveInactive::cases())->map(fn ($status) => [
                'value' => $status->value,
                'label' => $status->label(),
            ]),
        ]);
    }

    public function details(Rental $rental): Response
    {
        $rental->load(['galleries', 'features.featureCategory']);

        return Inertia::render('admin/rental-management/rentals/view', [
            'rental' => $rental,
        ]);
    }

    public function create($user_id = null): Response
    {
        $cities = City::all();
        if ($user_id) {
            $users = User::where('is_verified', true)->where('status', ActiveInactive::ACTIVE)->where('id', $user_id)->get();
        } else {
            $users = User::where('is_verified', true)->where('status', ActiveInactive::ACTIVE)->get();
        }
        $features = Feature::all();

        // Get enum values as key => label
        $propertyTypes = collect(RentalProperty::cases())
            ->mapWithKeys(fn ($type) => [$type->value => $type->label()]);
        $status = collect(ActiveInactive::cases())
            ->mapWithKeys(fn ($status) => [$status->value => $status->label()]);
        $featureCategories = FeatureCategory::orderBy('name')->get();

        return Inertia::render('admin/rental-management/rentals/create', [
            'cities' => $cities,
            'propertyTypes' => $propertyTypes,
            'users' => $users,
            'selectedUserId' => $user_id ? (int) $user_id : null,
            'status' => $status,
            'features' => $features,
            'featureCategories' => $featureCategories,
        ]);
    }

    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'purchase_price' => 'required|numeric',
            'address' => 'nullable|string|max:500',
            'property_type' => 'required|string',
            'security_deposit' => 'nullable|numeric',
            'lease_length' => 'nullable|string',
            'bedrooms' => 'nullable|numeric',
            'bathrooms' => 'nullable|numeric',
            'square_feet' => 'nullable|numeric',
            'pet_friendly' => 'nullable|string',
            'parking_garage' => 'nullable|string',
            'city_id' => 'required|exists:cities,id',
            'primary_image_url' => 'nullable|file|image|max:5120', // 5MB max
            'gallery_images.*' => 'nullable|file|image|max:10240', // 10MB max
            'status' => 'required|string',
            'features' => ['nullable', 'array'],
            'features.*' => ['exists:features,id'],
            'youtube_video_url' => ['nullable', 'url'],

            'pet_essentials' => ['nullable', 'array'],
            'pet_essentials.*.pet_type' => ['required', 'string', 'max:100'],
            'pet_essentials.*.allowed' => ['required', 'in:yes,no'],
            'pet_essentials.*.number_allowed' => ['nullable', 'integer', 'min:0'],
            'pet_essentials.*.icon' => ['nullable', 'image', 'max:2048'],
            'pet_essentials.*.existing_icon' => ['nullable', 'string'],
        ]);

        // Use RentalService to create the rental
        $rental = $this->rentalService->createRental($request->all(), $request, $validated);
        $this->sitemapService->generate();

        // Using sync ensures the pivot table is updated correctly
        if ($request->has('features')) {
            $rental->features()->sync($request->input('features', []));
        }

        // Save pet essentials
        if ($request->filled('pet_essentials')) {
            $rental->petEssentials()->delete();

            foreach ($request->input('pet_essentials', []) as $index => $item) {
                if ($request->hasFile("pet_essentials.$index.icon")) {
                    $file = $request->file("pet_essentials.$index.icon");
                    $item['icon'] = $this->storeImage($file, 'rentals/pet_icons');
                } elseif (! empty($item['existing_icon'])) {
                    $item['icon'] = $item['existing_icon'];
                }

                $rental->petEssentials()->create([
                    'pet_type' => $item['pet_type'],
                    'allowed' => $item['allowed'],
                    'number_allowed' => $item['number_allowed'] ?? null,
                    'icon' => $item['icon'] ?? null,
                ]);
            }
        }

        // Redirect back to the rentals index or wherever you want
        return redirect()->route('admin.rentals.index')
            ->with('success', 'Rental created successfully!');
    }

    public function edit($id)
    {
        $rental = Rental::with(['features', 'petEssentials'])->findOrFail($id);
        $cities = City::all();
        $users = User::where('is_verified', true)->where('status', ActiveInactive::ACTIVE)->get();
        $features = Feature::all();
        $propertyTypes = collect(RentalProperty::cases())
            ->mapWithKeys(fn ($type) => [$type->value => $type->label()]);
        $status = collect(ActiveInactive::cases())
            ->mapWithKeys(fn ($status) => [$status->value => $status->label()]);
        $featureCategories = FeatureCategory::orderBy('name')->get();

        return Inertia::render('admin/rental-management/rentals/edit', [
            'rental' => $rental,
            'cities' => $cities,
            'users' => $users,
            'propertyTypes' => $propertyTypes,
            'status' => $status,
            'features' => $features,
            'featureCategories' => $featureCategories,
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'purchase_price' => 'required|numeric',
            'address' => 'nullable|string|max:500',
            'property_type' => 'required|string',
            'security_deposit' => 'nullable|numeric',
            'lease_length' => 'nullable|string',
            'bedrooms' => 'nullable|numeric',
            'bathrooms' => 'nullable|numeric',
            'square_feet' => 'nullable|numeric',
            'pet_friendly' => 'nullable|string',
            'parking_garage' => 'nullable|string',
            'city_id' => 'required|exists:cities,id',
            'primary_image_url' => 'nullable|file|image|max:5120',
            'gallery_images.*' => 'nullable|file|image|max:5120',
            'status' => 'required|string',
            'features' => ['nullable', 'array'],
            'features.*' => ['exists:features,id'],
            'youtube_video_url' => ['nullable', 'url'],

            'pet_essentials' => ['nullable', 'array'],
            'pet_essentials.*.pet_type' => ['required', 'string', 'max:100'],
            'pet_essentials.*.allowed' => ['required', 'in:yes,no'],
            'pet_essentials.*.number_allowed' => ['nullable', 'integer', 'min:0'],
            'pet_essentials.*.icon' => ['nullable', 'image', 'max:2048'],
        ]);

        $rental = Rental::findOrFail($id);

        $rentalUpdated = $this->rentalService->updateRental($rental, $validated, $request);
        $this->sitemapService->generate();

        if ($request->has('features')) {
            $rentalUpdated->features()->sync($request->input('features', []));
        }

        if ($request->filled('pet_essentials')) {
            $rentalUpdated->petEssentials()->delete();

            foreach ($request->input('pet_essentials', []) as $index => $item) {
                if ($request->hasFile("pet_essentials.$index.icon")) {
                    $file = $request->file("pet_essentials.$index.icon");
                    $item['icon'] = $this->storeImage($file, 'rentals/pet_icons');
                } elseif (! empty($item['existing_icon'])) {
                    $item['icon'] = $item['existing_icon'];
                }

                $rentalUpdated->petEssentials()->create([
                    'pet_type' => $item['pet_type'],
                    'allowed' => $item['allowed'],
                    'number_allowed' => $item['number_allowed'] ?? null,
                    'icon' => $item['icon'] ?? null,
                ]);
            }
        } else {
            $rentalUpdated->petEssentials()->delete();
        }

        return redirect()->route('admin.rentals.index')
            ->with('success', 'Rental updated successfully!');
    }

    public function delete($id)
    {
        $rental = Rental::findOrFail($id);
        $this->rentalService->deleteRental($rental);
        $this->sitemapService->generate();

        return redirect()->route('admin.rentals.index')
            ->with('success', 'Rental deleted successfully!');
    }

    private function storeImage($file, string $path): string
    {
        $imageName = time().'_'.uniqid().'.'.$file->getClientOriginalExtension();
        $file->storeAs($path, $imageName, 'public');

        return $imageName;
    }
}
