<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Newsletter;
use App\Services\DataTableService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class NewsletterController extends Controller
{
    public function __construct(protected DataTableService $dataTableService) {}
    public function index(): Response
    {
        $query = Newsletter::query();
         $result = $this->dataTableService->process($query, request(), [
            'searchable' => [ 'email'],
            'sortable' => ['id', 'email', 'created_at'],
        ]);
        return Inertia::render('admin/newsletter/index', [
            'newsletters' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

        public function delete(Newsletter $newsletter)
    {
        if ($newsletter) {
            $newsletter->delete();
        }
        return back();
    }
}
