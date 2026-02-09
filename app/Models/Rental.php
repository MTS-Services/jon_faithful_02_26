<?php

namespace App\Models;

use App\Enums\ActiveInactive;
use App\Enums\RentalProperty;
use Illuminate\Database\Eloquent\Model;

class Rental extends Model
{
    protected $fillable = [
        'user_id',
        'sort_order',
        'city_id',
        'listing_title',
        'description',
        'purchase_price',
        'property_type',
        'security_deposit',
        'lease_length',
        'bedrooms',
        'bathrooms',
        'square_feet',
        'pet_friendly',
        'parking_garage',
        'primary_image_url',
        'status',
    ];

    protected $casts = [
        'purchase_price' => 'decimal:2',
        'bedrooms'       => 'integer',
        'bathrooms'      => 'integer',
        'square_feet'    => 'integer',
        'status'         => ActiveInactive::class,
        'property_type'  => RentalProperty::class,
    ];

    /* ---------------- Relationships ---------------- */

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    /* ---------------- Scopes ---------------- */

    public function scopeActive($query)
    {
        return $query->where('status', ActiveInactive::ACTIVE->value);
    }
}
