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

    // ListingGallery Model 
    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        // Get the original value
        $originalUrl = $this->attributes['image_url'] ?? null;

        if (filter_var($originalUrl, FILTER_VALIDATE_URL)) {
            return $originalUrl;
        }

        if (!$originalUrl) {
            return asset('no-image.png');
        }

        return asset('storage/listings/gallery/' . $originalUrl);
    }
}
