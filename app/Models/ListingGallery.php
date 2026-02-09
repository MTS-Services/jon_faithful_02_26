<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ListingGallery extends Model
{
    protected $table = 'listing_galleries';

    protected $fillable = [
        'listing_id',
        'listing_type',
        'image_url',
    ];

    protected $casts = [
        'listing_id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Polymorphic relation to Listing / Rental
     */
    public function listing()
    {
        return $this->morphTo(null, 'listing_type', 'listing_id');
    }
}
