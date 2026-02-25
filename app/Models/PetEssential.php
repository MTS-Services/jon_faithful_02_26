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

    protected $appends = ['icon_url'];

    public function getIconUrlAttribute()
    {
        if (filter_var($this->icon, FILTER_VALIDATE_URL)) {
            return $this->icon;
        }
        if (!$this->icon) {
            return asset('no-image.png');
        }
        return asset('storage/rentals/pet_icons/' . $this->icon);
    }
}
