<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ActiveInactive;
use App\Enums\ListingProperty;
use App\Enums\ListingStatus;
use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Facility;
use App\Models\Listing;
use App\Models\User;
use App\Services\DataTableService;
use App\Services\ListingHomeService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Enum;
use Inertia\Inertia;
use Inertia\Response;

class ListingController extends Controller
{
    protected DataTableService $dataTableService;
    protected ListingHomeService $listingService;
    public function __construct(DataTableService $dataTableService, ListingHomeService $listingService)
    {
        $this->dataTableService = $dataTableService;
        $this->listingService = $listingService;
    }

    public function index(): Response
    {
        $query = Listing::query()->with(['user']);

        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['title', 'description'],

            'filterable' => [
                'user_id',
                'listing_status',
                'property_type',
            ],

            'sortable' => [
                'id',
                'title',
                'purchase_price',
                'bedrooms',
                'bathrooms',
                'square_feet',
                'listing_status',
                'property_type',
                'status',
                'created_at',
            ],
        ]);

        Log::info($result);
        $users = User::where('is_verified', true)->where('status', ActiveInactive::ACTIVE)->get();

        return Inertia::render('admin/listings/index', [
            'listings' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
            'users' => $users
        ]);
    }

    public function details(Listing $listing): Response
    {
        $listing->load(['galleries', 'facilities']);

        return Inertia::render('admin/listings/view', [
            'listing' => $listing
        ]);
    }
    public function create($user_id = null): Response
    {
        $cities = City::all(['id', 'name']);
        $facilities = Facility::all(['id', 'name']);
        if ($user_id) {
            $users = User::where('is_verified', true)->where('status', ActiveInactive::ACTIVE)->where('id', $user_id)->get();
        } else {
            $users = User::where('is_verified', true)->where('status', ActiveInactive::ACTIVE)->get();
        }

        return Inertia::render('admin/listings/create', [
            'users' => $users,
            'selectedUserId' => $user_id ? (int) $user_id : null,
            'cities' => $cities,
            'facilities' => $facilities,
            'propertyTypes' => collect(ListingProperty::cases())->map(fn($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
            'propertyStatuses' => collect(ListingStatus::cases())->map(fn($status) => [
                'value' => $status->value,
                'label' => $status->label(),
            ]),
            'statuses' => collect(ActiveInactive::cases())->map(fn($status) => [
                'value' => $status->value,
                'label' => $status->label(),
            ]),
        ]);
    }

    // Admin/ListingController.php

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:500'],
            'description' => ['nullable', 'string'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
            'city_id' => ['required', 'exists:cities,id'],
            'user_id' => ['required', 'exists:users,id'],
            'listing_status' => ['required', new Enum(ListingStatus::class)],
            'property_type' => ['required', new Enum(ListingProperty::class)],
            'status' => ['required', new Enum(ActiveInactive::class)],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'square_feet' => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'],
            'youtube_video_url' => ['nullable', 'url'],
            'gallery_images.*' => ['nullable', 'image', 'max:25600'],
            'facilities' => ['nullable', 'array'],
            'facilities.*' => ['exists:facilities,id'],
        ]);
        $validated['status'] = $validated['status'] ?? ActiveInactive::ACTIVE->value;


        $listing = $this->listingService->createListing($validated, $request);

        // Using sync ensures the pivot table is updated correctly
        if ($request->has('facilities')) {
            $listing->facilities()->sync($request->input('facilities', []));
        }

        return redirect()
            ->route('admin.listing.index')
            ->with('success', 'Listing submitted successfully');
    }

    public function storeFacility(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:facilities,name'],
        ]);

        $facility = Facility::create([
            'name' => $validated['name'],
            'slug' => Str::slug($validated['name']), // Added slug generation
        ]);

        return response()->json($facility);
    }

    public function edit(Listing $listing): Response
    {
        // Load the existing facility IDs for this listing
        $listing->load('facilities');
        $currentFacilityIds = $listing->facilities->pluck('id')->toArray();
        $users = User::where('is_verified', true)->where('status', ActiveInactive::ACTIVE)->get();

        return Inertia::render('admin/listings/edit', [
            'users' => $users,
            'listing' => [
                ...$listing->toArray(),
                'facilities' => $currentFacilityIds // Pass just IDs for the form
            ],
            'cities' => City::all(['id', 'name']),
            'facilities' => Facility::all(['id', 'name']),
            'propertyTypes' => collect(ListingProperty::cases())->map(fn($type) => [
                'value' => $type->value,
                'label' => $type->label(),
            ]),
            'propertyStatuses' => collect(ListingStatus::cases())->map(fn($status) => [
                'value' => $status->value,
                'label' => $status->label(),
            ]),
            'statuses' => collect(ActiveInactive::cases())->map(fn($status) => [
                'value' => $status->value,
                'label' => $status->label(),
            ]),
        ]);
    }

    public function update(Request $request, Listing $listing)
    {
        // Use the same validation logic as store, but allow for image updates
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:500'],
            'description' => ['nullable', 'string'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
            'city_id' => ['required', 'exists:cities,id'],
            'user_id' => ['required', 'exists:users,id'],
            'listing_status' => ['required', new Enum(ListingStatus::class)],
            'property_type' => ['required', new Enum(ListingProperty::class)],
            'status' => ['required', new Enum(ActiveInactive::class)],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'square_feet' => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'],
            'youtube_video_url' => ['nullable', 'url'],
            'gallery_images.*' => ['nullable', 'image', 'max:25600'],
            'facilities' => ['nullable', 'array'],
            'facilities.*' => ['exists:facilities,id'],
        ]);

        $listing = $this->listingService->updateListing($listing, $validated, $request);

        // Sync facilities (this removes old ones and adds new ones automatically)
        if ($request->has('facilities')) {
            $listing->facilities()->sync($request->input('facilities', []));
        }

        return redirect()->route('admin.listing.index')->with('success', 'Listing updated.');
    }
    public function delete(Listing $listing)
    {
        try {
            if (! $listing) {
                abort(404);
            }
            if ($listing->primary_image_url) {
                Storage::disk('public')->delete($listing->primary_image_url);
            }
            if ($listing->gallery_images) {
                foreach ($listing->gallery_images as $image) {
                    Storage::disk('public')->delete($image);
                }
            }
            $listing->delete();

            return redirect()->route('admin.listing.index')->with('success', 'Listing deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->route('admin.listing.index')->with('error', 'Failed to delete listing.');
        }
    }
}
