<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Listing;
use Illuminate\Http\Request;
use App\Models\City;
use App\Enums\ListingProperty;
use App\Enums\ListingStatus;
use App\Services\DataTableService;
use App\Services\ListingHomeService;
use App\Http\Controllers\Controller;

class ListingController extends Controller
{
    protected DataTableService $dataTableService;
    protected ListingHomeService $listingService;
    public function __construct(DataTableService $dataTableService, ListingHomeService $listingService) {
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

        return Inertia::render('admin/listings/create', [
            'cities' => $cities,
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
            'primary_image_url' => ['nullable', 'image', 'max:10240'], // 10MB max
            'gallery_images.*' => ['nullable', 'image', 'max:25600'], // 25MB max per image
        ]);

        $this->listingService->createListing($validated, $request);

        return redirect()
            ->route('admin.listing.index')
            ->with('success', 'Listing submitted successfully');
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
