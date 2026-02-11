<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Rental;
use Illuminate\Http\Request;
use App\Services\DataTableService;
use App\Http\Controllers\Controller;

class RentalController extends Controller
{
    public function __construct(protected DataTableService $dataTableService) {}

   
    public function index(): Response
    {
        $queryBody = Rental::query();
        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['title',],
            'sortable' => ['id', 'title', 'created_at'],
        ]);
        return Inertia::render('admin/rentals/index', [
            'rentals' => $result['data'],
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
        $rental = Rental::findOrFail($id)->load('galleries');
        return Inertia::render('admin/rentals/view', [
            'rental' => $rental
        ]);
    }
}
