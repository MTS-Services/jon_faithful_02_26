<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            CitySeeder::class,
            UserSeeder::class,
            AdminSeeder::class,
            FeatureCategorySeeder::class,
            FeatureSeeder::class,
            ListingSeeder::class,
            RentalSeeder::class,
        ]);
    }
}
