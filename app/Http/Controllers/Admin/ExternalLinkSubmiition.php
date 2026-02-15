<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Services\DataTableService;
use App\Http\Controllers\Controller;
use App\Models\ExternalListingSubmission;

class ExternalLinkSubmiition extends Controller
{
    public function __construct(protected DataTableService $dataTableService) {}
    public function externalLink(): Response
    {
        $queryBody =  ExternalListingSubmission::query();
        $result = $this->dataTableService->process($queryBody, request(), [
            'searchable' => ['name', 'email', 'external_link'],
            'sortable' => ['id', 'name', 'email', 'created_at'],
        ]);
        return Inertia::render(
            'admin/external-link',
            [
                'externalLinks' => $result['data'],
                'pagination' => $result['pagination'],
                'offset' => $result['offset'],
                'filters' => $result['filters'],
                'search' => $result['search'],
                'sortBy' => $result['sort_by'],
                'sortOrder' => $result['sort_order']
            ]
        );
    }
}
