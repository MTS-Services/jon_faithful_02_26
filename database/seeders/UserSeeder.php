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
                'username' => 'user',
                'name' => 'User',
                'email' => 'user@dev.com',
                'password' => Hash::make('user@dev.com'),
            ],
            [
                'username' => 'user2',
                'name' => 'User 2',
                'email' => 'user2@dev.com',
                'password' => Hash::make('user2@dev.com'),
            ]
          ]
        );

   
    }
}
