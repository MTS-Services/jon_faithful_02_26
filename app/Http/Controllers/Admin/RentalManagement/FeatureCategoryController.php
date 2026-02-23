<?php

namespace App\Http\Controllers\Admin\RentalManagement;

use App\Http\Controllers\Controller;
use App\Models\FeatureCategory;
use App\Services\DataTableService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class FeatureCategoryController extends Controller
{
    public function __construct(private DataTableService $dataTableService)
    {
    }

    public function index(): Response
    {
        $query = FeatureCategory::query()->withCount('features');

        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['name', 'slug'],
            'sortable' => ['id', 'name', 'slug', 'features_count', 'created_at'],
        ]);

        return Inertia::render('admin/rental-management/feature-categories/index', [
            'categories' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:feature_categories,name'],
        ]);

        FeatureCategory::create([
            'name' => $data['name'],
            'slug' => $this->makeUniqueSlug($data['name']),
        ]);

        return back()->with('success', 'Feature category created successfully.');
    }

    public function update(Request $request, FeatureCategory $featureCategory): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:feature_categories,name,' . $featureCategory->id],
        ]);

        $featureCategory->update([
            'name' => $data['name'],
            'slug' => $this->makeUniqueSlug($data['name'], $featureCategory->id),
        ]);

        return back()->with('success', 'Feature category updated successfully.');
    }

    public function destroy(FeatureCategory $featureCategory): RedirectResponse
    {
        $featureCategory->delete();

        return back()->with('success', 'Feature category deleted successfully.');
    }

    private function makeUniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $slug = Str::slug($name);
        $original = $slug;
        $counter = 1;

        while (
            FeatureCategory::where('slug', $slug)
                ->when($ignoreId, fn ($query) => $query->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $slug = $original . '-' . $counter++;
        }

        return $slug;
    }
}
