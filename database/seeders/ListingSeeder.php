<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Listing;
use App\Models\User;
use App\Models\City;
use App\Enums\ActiveInactive;
use App\Enums\ListingProperty;
use App\Enums\ListingStatus;

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

        $listings = [
            [
                'title'           => 'Modern Family Home in Downtown',
                'description'     => 'Spacious family home close to schools and shopping.',
                'purchase_price'  => 350000,
                'listing_status'  => ListingStatus::PLATINUM->value,
                'property_type'   => ListingProperty::TOWN->value,
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
                'property_type'   => ListingProperty::SINGLE->value,
                'bedrooms'        => 2,
                'bathrooms'       => 1,
                'square_feet'     => 950,
                'sort_order'      => 2,
            ],
            [
                'title'           => 'Luxury Apartment for ',
                'description'     => 'City-view apartment with modern amenities.',
                'purchase_price'  => 2200,
                'listing_status'  => ListingStatus::FEATURE->value,
                'property_type'   => ListingProperty::SINGLE->value,
                'bedrooms'        => 2,
                'bathrooms'       => 1,
                'square_feet'     => 950,
                'sort_order'      => 2,
            ],
            [
                'title'           => 'Luxury Apartment  Rent',
                'description'     => 'City-view apartment with modern amenities.',
                'purchase_price'  => 2200,
                'listing_status'  => ListingStatus::FEATURE->value,
                'property_type'   => ListingProperty::SINGLE->value,
                'bedrooms'        => 2,
                'bathrooms'       => 1,
                'square_feet'     => 950,
                'sort_order'      => 2,
            ],
            [
                'title'           => 'Luxury  for Rent',
                'description'     => 'City-view apartment with modern amenities.',
                'purchase_price'  => 2200,
                'listing_status'  => ListingStatus::FEATURE->value,
                'property_type'   => ListingProperty::SINGLE->value,
                'bedrooms'        => 2,
                'bathrooms'       => 1,
                'square_feet'     => 950,
                'sort_order'      => 2,
            ],
            [
                'title'           => ' Apartment for Rent',
                'description'     => 'City-view apartment with modern amenities.',
                'purchase_price'  => 2200,
                'listing_status'  => ListingStatus::FEATURE->value,
                'property_type'   => ListingProperty::SINGLE->value,
                'bedrooms'        => 2,
                'bathrooms'       => 1,
                'square_feet'     => 950,
                'sort_order'      => 2,
            ],
            
        ];

        foreach ($listings as $data) {
            Listing::updateOrCreate(
                [
                    'title'   => $data['title'],
                    'city_id' => $city->id,
                ],
                array_merge($data, [
                    'user_id'           => $user->id,
                    'city_id'           => $city->id,
                    'primary_image_url' => 'https://via.placeholder.com/1200x800',
                    'status'            => ActiveInactive::ACTIVE->value,
                ])
            );
        }
    }
}
