<?php

namespace Database\Seeders;

use App\Enums\UserType;
use App\Models\City;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cityIdsBySlug = City::pluck('id', 'slug');

        $users = [
            [
                'username' => 'user',
                'name' => 'User',
                'user_type' => UserType::BOTH,
                'email' => 'user@dev.com',
                'password' => Hash::make('user@dev.com'),
                'is_verified' => true,
                'city_id' => $cityIdsBySlug['living-in-nashville'] ?? null,
            ],
            [
                'username' => 'manager',
                'name' => 'Manager',
                'user_type' => UserType::PROPERTY_OWNER,
                'email' => 'manager@dev.com',
                'password' => Hash::make('manager@dev.com'),
                'is_verified' => true,
                'city_id' => $cityIdsBySlug['living-in-franklin'] ?? null,
            ],
            [
                'username' => 'realtor',
                'name' => 'Realtor',
                'user_type' => UserType::REALTOR,
                'email' => 'realtor@dev.com',
                'password' => Hash::make('realtor@dev.com'),
                'is_verified' => true,
                'city_id' => $cityIdsBySlug['living-in-chattanooga'] ?? null,
            ],
            [
                'username' => 'realtor_rentals',
                'name' => 'Realtor & Rentals',
                'user_type' => UserType::BOTH,
                'email' => 'realtor_rentals@dev.com',
                'password' => Hash::make('realtor_rentals@dev.com'),
                'is_verified' => true,
                'city_id' => $cityIdsBySlug['living-in-jackson'] ?? null,
            ],
        ];

        $realtorCities = [
            'living-in-nashville' => 'Nashville',
            'living-in-knoxville' => 'Knoxville',
            'living-in-memphis' => 'Memphis',
            'living-in-chattanooga' => 'Chattanooga',
            'living-in-franklin' => 'Franklin',
            'living-in-clarksville' => 'Clarksville',
            'living-in-murfreesboro' => 'Murfreesboro',
            'living-in-jackson' => 'Jackson',
            'living-in-cookeville' => 'Cookeville',
            'bristol' => 'Bristol',
        ];

        foreach ($realtorCities as $slug => $cityName) {
            $username = Str::slug($cityName . '-realtor', '_');

            $users[] = [
                'username' => $username,
                'name' => $cityName . ' Realtor',
                'user_type' => UserType::REALTOR,
                'email' => $username . '@dev.com',
                'password' => Hash::make('password'),
                'is_verified' => true,
                'city_id' => $cityIdsBySlug[$slug] ?? null,
            ];
        }

        User::insert($users);
    }
}
