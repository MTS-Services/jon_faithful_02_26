<?php

namespace Database\Seeders;

use App\Enums\ActiveInactive;
use App\Enums\RentalProperty;
use App\Models\City;
use App\Models\Feature;
use App\Models\Rental;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class RentalSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first();
        $city = City::first();

        if (!$user || !$city) {
            $this->command->warn('Users or Cities table is empty. RentalSeeder skipped.');
            return;
        }

        $featureIds = Feature::pluck('id')->toArray();

        if (empty($featureIds)) {
            $this->command->warn('Features table is empty. Please seed features first.');
            return;
        }

        $rentals = [
            [
                'title'   => 'Modern 2 Bed Apartment',
                'description'     => 'Bright apartment close to downtown and public transport.',
                'purchase_price'  => 1800,
                'security_deposit' => 1800,
                'property_type'   => RentalProperty::APARTMENT->value,
                'lease_length'    => 12,
                'bedrooms'        => 2,
                'bathrooms'       => 1,
                'square_feet'     => 950,
                'pet_friendly'    => true,
                'parking_garage'  => 1,
                'sort_order'      => 1,
            ],
            [
                'title'   => 'Family Home with Garage',
                'description'     => 'Spacious rental home in a quiet neighborhood.',
                'purchase_price'  => 2400,
                'security_deposit' => 2400,
                'property_type'   => RentalProperty::SINGLE_FAMILY_HOME->value,
                'lease_length'    => 6,
                'bedrooms'        => 3,
                'bathrooms'       => 2,
                'square_feet'     => 1700,
                'pet_friendly'    => false,
                'parking_garage'  => 2,
                'sort_order'      => 2,
            ],
        ];

        foreach ($rentals as $data) {
            $rental = Rental::updateOrCreate(
                [
                    'title' => $data['title'],
                    'city_id'       => $city->id,
                ],
                array_merge($data, [
                    'user_id'           => $user->id,
                    'city_id'           => $city->id,
                    'primary_image_url' => 'https://placehold.net/400x400.png',
                    'status'            => ActiveInactive::ACTIVE->value,
                ])
            );
            $randomFeatures = Arr::random(
                $featureIds,
                min(rand(2, 3), count($featureIds))
            );

            $rental->features()->sync((array) $randomFeatures);
        }

        $this->command->info('Rentals table seeded successfully.');
    }
}
