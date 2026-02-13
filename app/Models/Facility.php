<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    protected $fillable = [
        'sort_order',
        'name',
        'slug',
    ];

    public function listings()
    {
        return $this->morphedByMany(Listing::class, 'facilityable');
    }

    public function rentals()
    {
        return $this->morphedByMany(Rental::class, 'facilityable');
    }
}
