<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    //

    public function __construct(protected DataTableService $dataTableService){}

    public function index(): Response
    {
        return Inertia::render('admin/index');
    }

    public function allAdmin(): Response
    {
        $queryBody = Admin::query();


        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['name', 'email'],
            'sortable' => ['id', 'name', 'email', 'created_at'],
        ]);


        return Inertia::render('admin/all', [
            'admins' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order']
        ]);
    }
}
