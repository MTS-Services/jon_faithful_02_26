<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\City;

class CitySeeder extends Seeder
{
    public function run(): void
    {
        $cities = [
            ['name' => 'Bristol',        'slug' => 'bristol'],
            ['name' => 'Chattanooga',    'slug' => 'chattanooga'],
            ['name' => 'Cookeville',     'slug' => 'living-in-cookeville'],
            ['name' => 'Nashville',      'slug' => 'living-in-nashville'],
            ['name' => 'Knoxville',      'slug' => 'living-in-knoxville'],
            ['name' => 'Johnson City',   'slug' => 'living-in-johnson-city'],
            ['name' => 'Franklin',       'slug' => 'living-in-franklin'],
            ['name' => 'Memphis',        'slug' => 'living-in-memphis'],
            ['name' => 'Clarksville',    'slug' => 'living-in-clarksville'],
            ['name' => 'Murfreesboro',   'slug' => 'living-in-murfreesboro'],
            ['name' => 'Kingsport',      'slug' => 'living-in-kingsport'],
            ['name' => 'Jackson',        'slug' => 'living-in-jackson'],
        ];

        foreach ($cities as $city) {
            City::updateOrCreate(
                ['slug' => $city['slug']],
                [
                    'name'      => $city['name'],
                    'state'     => 'TN',
                ]
            );
        }
    }
}
