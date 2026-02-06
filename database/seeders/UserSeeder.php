<?php

namespace Database\Seeders;

use App\Enums\UserType;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert(
            [
                [
                    'username' => 'user',
                    'name' => 'User',
                    'user_type' => UserType::BOTH,
                    'email' => 'user@gmail.com',
                    'password' => Hash::make('user@dev.com'),
                ],
                [
                    'username' => 'manager',
                    'name' => 'Manager',
                    'user_type' => UserType::PROPERTY_OWNER,
                    'email' => 'manager@gmail.com',
                    'password' => Hash::make('user@dev.com'),
                ],
                [
                    'username' => 'realtor',
                    'name' => 'Realtor',
                    'user_type' => UserType::REALTOR,
                    'email' => 'realtor@gmail.com',
                    'password' => Hash::make('realtor@gmail.com'),
                ],
                [
                    'username' => 'realtor&Rentals',
                    'name' => 'Realtor & Rentals',
                    'user_type' => UserType::BOTH,
                    'email' => 'realtor&rentals@gmail.com',
                    'password' => Hash::make('realtor&rentals@gmail.com'),
                ]
            ]
        );
    }
}
