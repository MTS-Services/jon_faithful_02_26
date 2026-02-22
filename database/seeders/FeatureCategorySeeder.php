<?php

namespace Database\Seeders;

use App\Models\FeatureCategory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class FeatureCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Appliances',
            'Cooling',
            'Heating',
            'Internet/Satellite',
            'Other',
        ];

        foreach ($categories as $category) {
            FeatureCategory::updateOrCreate(
                ['slug' => Str::slug($category)],
                [
                    'name' => $category,
                ]
            );
        }
    }
}