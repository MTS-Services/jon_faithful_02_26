<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\CityMortgageSetting;
use App\Services\DataTableService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CityMortgageSettingController extends Controller
{
    public function __construct(private DataTableService $dataTableService)
    {
    }

    public function index(): Response
    {
        $query = CityMortgageSetting::query()
            ->select('city_mortgage_settings.*')
            ->join('cities', 'city_mortgage_settings.city_id', '=', 'cities.id')
            ->with('city')
            ->whereHas('city');

        $result = $this->dataTableService->process($query, request(), [
            'searchable' => ['cities.name'],
            'sortable' => ['id', 'base_price', 'annual_tax', 'annual_insurance', 'is_active', 'created_at'],
        ]);

        $cities = City::orderBy('name')->get(['id', 'name']);

        return Inertia::render('admin/mortgage-settings/index', [
            'settings' => $result['data'],
            'pagination' => $result['pagination'],
            'offset' => $result['offset'],
            'filters' => $result['filters'],
            'search' => $result['search'],
            'sortBy' => $result['sort_by'],
            'sortOrder' => $result['sort_order'],
            'cities' => $cities,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'city_id' => ['required', 'exists:cities,id', 'unique:city_mortgage_settings,city_id'],
            'base_price' => ['required', 'numeric', 'min:0'],
            'annual_tax' => ['required', 'numeric', 'min:0'],
            'annual_insurance' => ['required', 'numeric', 'min:0'],
            'is_active' => ['sometimes', 'boolean'],
        ]);

        CityMortgageSetting::create([
            'city_id' => $data['city_id'],
            'base_price' => $data['base_price'],
            'annual_tax' => $data['annual_tax'],
            'annual_insurance' => $data['annual_insurance'],
            'is_active' => $data['is_active'] ?? true,
        ]);

        return back()->with('success', 'Mortgage setting created successfully.');
    }

    public function update(Request $request, CityMortgageSetting $cityMortgageSetting): RedirectResponse
    {
        $data = $request->validate([
            'city_id' => ['required', 'exists:cities,id', 'unique:city_mortgage_settings,city_id,' . $cityMortgageSetting->id],
            'base_price' => ['required', 'numeric', 'min:0'],
            'annual_tax' => ['required', 'numeric', 'min:0'],
            'annual_insurance' => ['required', 'numeric', 'min:0'],
            'is_active' => ['sometimes', 'boolean'],
        ]);

        $cityMortgageSetting->update([
            'city_id' => $data['city_id'],
            'base_price' => $data['base_price'],
            'annual_tax' => $data['annual_tax'],
            'annual_insurance' => $data['annual_insurance'],
            'is_active' => $data['is_active'] ?? $cityMortgageSetting->is_active,
        ]);

        return back()->with('success', 'Mortgage setting updated successfully.');
    }

    public function destroy(CityMortgageSetting $cityMortgageSetting): RedirectResponse
    {
        $cityMortgageSetting->delete();

        return back()->with('success', 'Mortgage setting deleted successfully.');
    }
}

