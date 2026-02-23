<?php

namespace App\Http\Controllers\Admin\RentalManagement;

use App\Http\Controllers\Controller;
use App\Models\Feature;
use App\Models\FeatureCategory;
use App\Services\DataTableService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class FeatureController extends Controller
{
    public function __construct(private DataTableService $dataTableService)
    {
    }

    public function index(): Response
    {
        $query = Feature::query()->with('featureCategory');

        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['name', 'slug'],
            'sortable' => ['id', 'name', 'slug', 'sort_order', 'feature_category_id', 'created_at'],
        ]);

        return Inertia::render('admin/rental-management/features/index', [
            'features' => $result['data'],
            'categories' => FeatureCategory::orderBy('name')->get(),
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
            'name' => ['required', 'string', 'max:255', 'unique:features,name'],
            'feature_category_id' => ['required', 'exists:feature_categories,id'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        Feature::create([
            'name' => $data['name'],
            'slug' => $this->makeUniqueSlug($data['name']),
            'feature_category_id' => $data['feature_category_id'],
            'sort_order' => $data['sort_order'] ?? 0,
        ]);

        return back()->with('success', 'Feature created successfully.');
    }

    public function update(Request $request, Feature $feature): RedirectResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:features,name,' . $feature->id],
            'feature_category_id' => ['required', 'exists:feature_categories,id'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $feature->update([
            'name' => $data['name'],
            'slug' => $this->makeUniqueSlug($data['name'], $feature->id),
            'feature_category_id' => $data['feature_category_id'],
            'sort_order' => $data['sort_order'] ?? 0,
        ]);

        return back()->with('success', 'Feature updated successfully.');
    }

    public function destroy(Feature $feature): RedirectResponse
    {
        $feature->delete();

        return back()->with('success', 'Feature deleted successfully.');
    }

    private function makeUniqueSlug(string $name, ?int $ignoreId = null): string
    {
        $slug = Str::slug($name);
        $original = $slug;
        $counter = 1;

        while (
            Feature::where('slug', $slug)
                ->when($ignoreId, fn($query) => $query->where('id', '!=', $ignoreId))
                ->exists()
        ) {
            $slug = $original . '-' . $counter++;
        }

        return $slug;
    }
}
