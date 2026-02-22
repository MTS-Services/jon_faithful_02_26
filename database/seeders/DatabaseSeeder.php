<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            AdminSeeder::class,
            CitySeeder::class,
            FeatureCategorySeeder::class,
            FeatureSeeder::class,
            ListingSeeder::class,
            RentalSeeder::class,
        ]);
    }
}
