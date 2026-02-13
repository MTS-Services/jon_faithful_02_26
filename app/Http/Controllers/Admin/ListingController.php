<?php

namespace App\Http\Controllers\Admin;

use App\Enums\ActiveInactive;
use App\Models\City;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Listing;
use App\Enums\ListingStatus;
use Illuminate\Http\Request;
use App\Enums\ListingProperty;
use App\Services\DataTableService;
use App\Services\ListingHomeService;
use App\Http\Controllers\Controller;
use App\Models\Facility;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Enum;

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
        $queryBody = Listing::query();
        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['title',],
            'sortable' => ['id', 'title', 'created_at'],
        ]);
        return Inertia::render('admin/listings/index', [
            'listings' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }
    public function details(Listing $listing): Response
    {
        $listing->load(['galleries', 'facilities']);

        return Inertia::render('admin/listings/view', [
            'listing' => $listing
        ]);
    }
    public function create(): Response
    {
        $cities = City::all(['id', 'name']);
        $facilities = Facility::all(['id', 'name']);

        return Inertia::render('admin/listings/create', [
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
            'description' => ['required', 'string'],
            'purchase_price' => ['required', 'numeric', 'min:0'],
            'city_id' => ['required', 'exists:cities,id'],
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
        $validated['user_id'] = 1;
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

        return Inertia::render('admin/listings/edit', [
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
            ])
        ]);
    }

    public function update(Request $request, Listing $listing)
    {
        // Use the same validation logic as store, but allow for image updates
        $validated = $request->validate([
            'title'             => 'required|string|max:255',
            'description'       => ['required', 'string'],
            'purchase_price'    => ['required', 'numeric', 'min:0'],
            'city_id'           => ['required', 'exists:cities,id'],
            'listing_status'    => ['required', 'string'],
            'property_type'     => ['required', 'string'],
            'bedrooms'          => ['required', 'integer', 'min:0'],
            'bathrooms'         => ['required', 'integer', 'min:0'],
            'square_feet'       => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'],
            'youtube_video_url' => ['nullable', 'url'],
            'gallery_images.*'  => ['nullable', 'image', 'max:25600'],
            'facilities'        => ['nullable', 'array'],
            'facilities'        => 'nullable|array',
        ]);

        $listing = $this->listingService->updateListing($listing, $validated, $request);

        // Sync facilities (this removes old ones and adds new ones automatically)
        if ($request->has('facilities')) {
            $listing->facilities()->sync($request->facilities);
        }

        return redirect()->route('admin.listing.index')->with('success', 'Listing updated.');
    }
    public function delete(Listing $listing): Response
    {
        return Inertia::render('admin/listings/delete', [
            'listing' => $listing
        ]);
    }
}
