<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\CityMortgageSetting;
use Illuminate\Database\Seeder;

class CityMortgageSettingSeeder extends Seeder
{
    public function run(): void
    {
        /**
         * Tennessee city presets: home price, down payment, and illustrative tax/insurance
         * for the public mortgage calculator.
         */
        $presetsByName = [
            'Nashville' => ['base_price' => 550000, 'down_payment' => 55000, 'annual_tax' => 3000, 'annual_insurance' => 2200],
            'Franklin' => ['base_price' => 750000, 'down_payment' => 75000, 'annual_tax' => 3200, 'annual_insurance' => 2300],
            'Knoxville' => ['base_price' => 375000, 'down_payment' => 37500, 'annual_tax' => 2300, 'annual_insurance' => 1950],
            'Chattanooga' => ['base_price' => 350000, 'down_payment' => 35000, 'annual_tax' => 2150, 'annual_insurance' => 1880],
            'Murfreesboro' => ['base_price' => 325000, 'down_payment' => 32500, 'annual_tax' => 2350, 'annual_insurance' => 1920],
            'Clarksville' => ['base_price' => 300000, 'down_payment' => 30000, 'annual_tax' => 2000, 'annual_insurance' => 1820],
            'Cookeville' => ['base_price' => 275000, 'down_payment' => 27500, 'annual_tax' => 1850, 'annual_insurance' => 1720],
            'Jackson' => ['base_price' => 250000, 'down_payment' => 25000, 'annual_tax' => 1780, 'annual_insurance' => 1680],
            'Johnson City' => ['base_price' => 260000, 'down_payment' => 26000, 'annual_tax' => 1720, 'annual_insurance' => 1760],
            'Kingsport' => ['base_price' => 240000, 'down_payment' => 24000, 'annual_tax' => 1580, 'annual_insurance' => 1700],
            'Bristol' => ['base_price' => 230000, 'down_payment' => 23000, 'annual_tax' => 1520, 'annual_insurance' => 1660],
            'Memphis' => ['base_price' => 275000, 'down_payment' => 27500, 'annual_tax' => 2200, 'annual_insurance' => 1950],
        ];

        $defaultPreset = [
            'base_price' => 300000,
            'down_payment' => 30000,
            'annual_tax' => 2000,
            'annual_insurance' => 1800,
        ];

        City::query()->orderBy('name')->each(function (City $city) use ($presetsByName, $defaultPreset) {
            $preset = $presetsByName[$city->name] ?? $defaultPreset;

            CityMortgageSetting::updateOrCreate(
                ['city_id' => $city->id],
                [
                    'base_price' => $preset['base_price'],
                    'down_payment' => $preset['down_payment'],
                    'annual_tax' => $preset['annual_tax'],
                    'annual_insurance' => $preset['annual_insurance'],
                    'is_active' => true,
                ]
            );
        });
    }
}
