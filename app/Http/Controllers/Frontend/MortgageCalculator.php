<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMortgageLeadRequest;
use App\Mail\NewMortgageLeadMail;
use App\Models\City;
use App\Models\MortgageLead;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class MortgageCalculator extends Controller
{
    public function index(): Response
    {
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
                    'label'     => $city->name,
                    'price'     => (float) ($city->mortgageSetting->base_price ?? 0),
                    'tax'       => (float) ($city->mortgageSetting->annual_tax ?? 0),
                    'insurance' => (float) ($city->mortgageSetting->annual_insurance ?? 0),
                ];
            })
            ->values()
            ->all();

        $calculatorConfig['cityPresets']        = $cityPresets;
        $calculatorConfig['leadSubmitUrl']       = route('frontend.mortgage-leads.store');

        // Set your LendingTree (or partner) URL here once available.
        $calculatorConfig['lenderRatesUrl']      = config('mortgage.lender_rates_url', '#');

        // Fallback destination when the primary lead route cannot accept the lead
        // (e.g. the lead is a duplicate, outside serviceable area, etc.).
        $calculatorConfig['fallbackRedirectUrl'] = config('mortgage.fallback_redirect_url', 'https://www.example.com/fallback-lender-offer');

        return Inertia::render('frontend/mortgage-calculator', [
            'calculatorConfig' => $calculatorConfig,
        ]);
    }

    public function storeLead(StoreMortgageLeadRequest $request): JsonResponse
    {
        $lead = MortgageLead::create($request->validated());

        try {
            Mail::to(config('mortgage.lead_notification_email', 'info@whytennessee.com'))
                ->send(new NewMortgageLeadMail($lead));
        } catch (\Throwable $exception) {
            Log::error('Mortgage lead email failed', [
                'lead_id' => $lead->id,
                'message' => $exception->getMessage(),
            ]);
        }

        return response()->json([
            'accepted' => true,
        ]);
    }
}