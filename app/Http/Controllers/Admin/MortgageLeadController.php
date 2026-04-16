<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MortgageLead;
use App\Services\DataTableService;
use Inertia\Inertia;
use Inertia\Response;

class MortgageLeadController extends Controller
{
    public function __construct(private DataTableService $dataTableService) {}

    public function index(): Response
    {
        $query = MortgageLead::query();

        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['first_name', 'email', 'phone_number', 'location'],
            'sortable' => ['id', 'first_name', 'email', 'timeline', 'created_at'],
        ]);

        return Inertia::render('admin/mortgage-leads/index', [
            'leads' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

    public function delete(MortgageLead $mortgageLead)
    {
        $mortgageLead->delete();

        return back();
    }
}
