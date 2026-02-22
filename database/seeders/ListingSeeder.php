<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Listing;
use App\Models\User;
use App\Models\City;
use App\Enums\ActiveInactive;
use App\Enums\ListingProperty;
use App\Enums\ListingStatus;
use App\Models\Feature;
use Illuminate\Support\Arr;

class ListingSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first();
        $city = City::first();

        if (!$user || !$city) {
            $this->command->warn('Users or Cities table is empty. ListingSeeder skipped.');
            return;
        }

        // $featureIds = Feature::pluck('id')->toArray();

        // if (empty($featureIds)) {
        //     $this->command->warn('Features table is empty. Please seed features first.');
        //     return;
        // }

        $listings = [
            [
                'title'           => 'Modern Family Home in Downtown',
                'description'     => 'Spacious family home close to schools and shopping.',
                'purchase_price'  => 350000,
                'listing_status'  => ListingStatus::PLATINUM->value,
                'property_type'   => ListingProperty::HOUSE->value,
                'bedrooms'        => 3,
                'bathrooms'       => 2,
                'square_feet'     => 1800,
                'sort_order'      => 1,
            ],
            [
                'title'           => 'Luxury Apartment for Rent',
                'description'     => 'City-view apartment with modern amenities.',
                'purchase_price'  => 2200,
                'listing_status'  => ListingStatus::FEATURE->value,
                'property_type'   => ListingProperty::TOWNHOUSE->value,
                'bedrooms'        => 2,
                'bathrooms'       => 1,
                'square_feet'     => 950,
                'sort_order'      => 2,
            ],
        ];

        foreach ($listings as $data) {

            $listing = Listing::updateOrCreate(
                [
                    'title'   => $data['title'],
                    'city_id' => $city->id,
                ],
                array_merge($data, [
                    'user_id'           => $user->id,
                    'city_id'           => $city->id,
                    'primary_image_url' => 'https://placehold.net/400x400.png',
                    'status'            => ActiveInactive::ACTIVE->value,
                ])
            );

            /*
             |----------------------------------------
             | Attach Random Features (2-3 ta)
             |----------------------------------------
             */

            // $randomFeatures = Arr::random(
            //     $featureIds,
            //     min(rand(2, 3), count($featureIds))
            // );

            // $listing->features()->sync((array) $randomFeatures);
        }

        $this->command->info('ListingSeeder completed successfully.');
    }
}
