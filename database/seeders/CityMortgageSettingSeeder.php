<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\CityMortgageSetting;
use Illuminate\Database\Seeder;

class CityMortgageSettingSeeder extends Seeder
{
    public function run(): void
    {
        // Base presets matching the original hardcoded values where available
        $presetsByName = [
            'Knoxville' => ['base_price' => 360000, 'annual_tax' => 2200, 'annual_insurance' => 1900],
            'Johnson City' => ['base_price' => 285000, 'annual_tax' => 1700, 'annual_insurance' => 1750],
            'Kingsport' => ['base_price' => 255000, 'annual_tax' => 1500, 'annual_insurance' => 1700],
            'Clarksville' => ['base_price' => 325000, 'annual_tax' => 1950, 'annual_insurance' => 1800],
            'Chattanooga' => ['base_price' => 340000, 'annual_tax' => 2100, 'annual_insurance' => 1850],
            'Nashville' => ['base_price' => 470000, 'annual_tax' => 2800, 'annual_insurance' => 2100],
        ];

        $defaultPreset = ['base_price' => 300000, 'annual_tax' => 2000, 'annual_insurance' => 1800];

        City::query()->orderBy('name')->each(function (City $city) use ($presetsByName, $defaultPreset) {
            $preset = $presetsByName[$city->name] ?? $defaultPreset;

            CityMortgageSetting::updateOrCreate(
                ['city_id' => $city->id],
                [
                    'base_price' => $preset['base_price'],
                    'annual_tax' => $preset['annual_tax'],
                    'annual_insurance' => $preset['annual_insurance'],
                    'is_active' => true,
                ]
            );
        });
    }
}

