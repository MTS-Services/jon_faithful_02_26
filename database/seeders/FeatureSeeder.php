<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Feature;
use App\Models\FeatureCategory;
use Illuminate\Support\Str;

class FeatureSeeder extends Seeder
{
    public function run(): void
    {
        $features = [
            'Appliances' => [
                'Dishwasher',
                'Freezer',
                'Garbage Disposal',
                'Microwave Oven',
                'Range',
                'Refrigerator',
                'Washer/Dryer Hookups',
            ],
            'Cooling' => [
                'Ceiling Fan',
                'Central Air Conditioning',
            ],
            'Heating' => [
                'Electric',
                'Heat Pump',
            ],
            'Internet/Satellite' => [
                'Cable TV Ready',
                'High-speed Internet Ready',
            ],
            'Other' => [
                'Basement With Storage',
                'One Level',
                'Patio Balcony',
            ],
        ];

        foreach ($features as $categoryName => $facilityList) {

            $category = FeatureCategory::where('slug', Str::slug($categoryName))->first();

            if (!$category) {
                continue;
            }

            foreach ($facilityList as $facility) {
                Feature::updateOrCreate(
                    ['slug' => Str::slug($facility)],
                    [
                        'name' => $facility,
                        'feature_category_id' => $category->id,
                        'sort_order' => 0,
                    ]
                );
            }
        }
    }
}
