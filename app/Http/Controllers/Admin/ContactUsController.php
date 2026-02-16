<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactUs;
use App\Services\DataTableService;
use Inertia\Inertia;
use Inertia\Response;

class ContactUsController extends Controller
{
    public function __construct(protected DataTableService $dataTableService) {}
    public function index(): Response
    {
        $query = ContactUs::query();

        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['name', 'email'],
            'sortable' => ['id', 'name', 'email', 'created_at'],
        ]);

        return Inertia::render('admin/contact-us/index', [
            'contacts' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
        
    }
}
