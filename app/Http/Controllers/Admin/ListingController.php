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
use App\Http\Controllers\Controller;

class ListingController extends Controller
{
    public function __construct(protected DataTableService $dataTableService) {}

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
    public function store(Request $request): Response
    {
        return Inertia::render('admin/listings/create');
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
