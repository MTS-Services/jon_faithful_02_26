<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PetEssential extends Model
{
    protected $fillable = [
        'rental_id',
        'pet_type',
        'icon',
        'allowed',
        'number_allowed',
    ];

    public function rental()
    {
        return $this->belongsTo(Rental::class);
    }
}