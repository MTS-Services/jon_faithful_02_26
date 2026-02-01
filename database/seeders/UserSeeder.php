<?php

namespace Database\Seeders;

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
                'name' => 'Admin',
                'email' => 'admin@dev.com',
                'password' => Hash::make('admin@dev.com'),
            ],
            [
                'first_name' => 'User',
                'email' => 'user@dev.com',
                'password' => Hash::make('user@dev.com'),
            ]
          ]
        );

   
    }
}
