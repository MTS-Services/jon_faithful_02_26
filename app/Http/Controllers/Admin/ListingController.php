<?php

namespace App\Http\Controllers\Admin;

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
    public function details($id): Response
    {
        $listing = Listing::findOrFail($id)->load('galleries');
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
            ])
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
            'listing_status' => ['required', 'string'],
            'property_type' => ['required', 'string'],
            'bedrooms' => ['required', 'integer', 'min:0'],
            'bathrooms' => ['required', 'integer', 'min:0'],
            'square_feet' => ['required', 'integer', 'min:0'],
            'primary_image_url' => ['nullable', 'image', 'max:10240'],
            'gallery_images.*' => ['nullable', 'image', 'max:25600'],
            'facilities' => ['nullable', 'array'],
            'facilities.*' => ['exists:facilities,id'],
        ]);
        $validated['user_id'] = 1;

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
        return Inertia::render('admin/listings/edit', [
            'listing' => $listing
        ]);
    }
    public function update(Request $request, Listing $listing): Response
    {
        return Inertia::render('admin/listings/edit', [
            'listing' => $listing
        ]);
    }
    public function delete(Listing $listing): Response
    {
        return Inertia::render('admin/listings/delete', [
            'listing' => $listing
        ]);
    }
}
