<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Facility;
use Illuminate\Support\Str;

class FacilitySeeder extends Seeder
{
    public function run(): void
    {
        $facilities = [
            'Wi-Fi',
            'Dining Area',
            'Car Rental',
            'Laundry Service',
            'Meeting Facilities',
            '24-Hour Doctor',
            'Airport Transfers',
            '24-Hour Security',
            'Catering Service',
        ];

        foreach ($facilities as $facility) {
            Facility::updateOrCreate(
                ['slug' => Str::slug($facility)],
                [
                    'name'       => $facility,
                    'sort_order' => 0,
                ]
            );
        }
    }
}
