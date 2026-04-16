<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SeoPage;
use App\Services\DataTableService;
use App\Services\SitemapService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SeoPageController extends Controller
{
    public function __construct(
        protected DataTableService $dataTableService,
        protected SitemapService $sitemapService
    ) {}

    public function index(): Response
    {
        $query = SeoPage::query();

        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['route_name', 'page_name', 'path', 'meta_title'],
            'sortable' => ['id', 'route_name', 'page_name', 'updated_at'],
        ]);

        return Inertia::render('admin/seo-pages/index', [
            'pages' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

    public function update(Request $request, SeoPage $seoPage): RedirectResponse
    {
        $validated = $request->validate([
            'meta_title' => ['nullable', 'string', 'max:255'],
            'meta_description' => ['nullable', 'string'],
            'meta_keywords' => ['nullable', 'string'],
        ]);

        $seoPage->update($validated);

        return redirect()
            ->route('admin.seo-pages.index')
            ->with('success', 'SEO page updated successfully.');
    }

    public function generateSitemap(): RedirectResponse
    {
        try {
            $this->sitemapService->generate();

            return redirect()
                ->route('admin.seo-pages.index')
                ->with('success', 'Sitemap generated successfully.');
        } catch (\Throwable $exception) {
            return redirect()
                ->route('admin.seo-pages.index')
                ->with('error', 'Failed to generate sitemap. Please try again.');
        }
    }
}

