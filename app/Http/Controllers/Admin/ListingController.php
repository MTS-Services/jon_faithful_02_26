<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Listing;
use Illuminate\Http\Request;
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
        return Inertia::render('admin/listings/create');
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
