<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MortgageCalculator extends Controller
{
    public function index(): Response
    {
        // Default values (can optionally be moved to config or DB later)
        $calculatorConfig = [
            'defaults' => [
                'homePrice'    => 350000,
                'downPayment'  => 35000,
                'interestRate' => 6.75,
                'loanTerm'     => 30,
                'propertyTax'  => 2100,
                'insurance'    => 1800,
                'hoa'          => 0,
                'pmi'          => 0,
            ],
        ];

        // City presets come dynamically from admin-managed settings.
        $cityPresets = City::with('mortgageSetting')
            ->whereHas('mortgageSetting', fn ($query) => $query->where('is_active', true))
            ->orderBy('name')
            ->get()
            ->map(function (City $city) {
                return [
                    'label' => $city->name,
                    'price' => (float) ($city->mortgageSetting->base_price ?? 0),
                    'tax' => (float) ($city->mortgageSetting->annual_tax ?? 0),
                    'insurance' => (float) ($city->mortgageSetting->annual_insurance ?? 0),
                ];
            })
            ->values()
            ->all();

        $calculatorConfig['cityPresets'] = $cityPresets;

        return Inertia::render('frontend/mortgage-calculator', [
            'calculatorConfig' => $calculatorConfig,
        ]);
    }
}
