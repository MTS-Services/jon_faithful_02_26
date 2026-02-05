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
                'username' => 'admin',
                'name' => 'Admin',
                'email' => 'admin@dev.com',
                'password' => Hash::make('admin@dev.com'),
            ],
            [
                'username' => 'user',
                'name' => 'User',
                'email' => 'user@dev.com',
                'password' => Hash::make('user@dev.com'),
            ]
          ]
        );

   
    }
}
