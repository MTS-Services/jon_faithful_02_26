<?php

namespace App\Models;

use App\Enums\ActiveInactive;
use App\Enums\RentalProperty;
use App\Jobs\SendRentalNotificationJob;
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
        'youtube_video_url',
    ];

    protected $casts = [
        'purchase_price' => 'decimal:2',
        'bedrooms'       => 'integer',
        'bathrooms'      => 'integer',
        'square_feet'    => 'integer',
        'status'         => ActiveInactive::class,
        'property_type'  => RentalProperty::class,
    ];

    /* ---------------- Boot Methods ---------------- */

    protected static function boot(): void
    {
        parent::boot();

        static::created(function (self $rental) {
            SendRentalNotificationJob::dispatch($rental, true);
        });

        static::updated(function (self $rental) {
            SendRentalNotificationJob::dispatch($rental, false);
        });
    }

    /* ---------------- Relationships ---------------- */

    public function galleries()
    {
        return $this->morphMany(
            ListingGallery::class,
            'listing',
            'listing_type',
            'listing_id'
        );
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function facilities()
    {
        return $this->morphToMany(Facility::class, 'facilityable');
    }


    /* ---------------- Scopes ---------------- */

    public function scopeActive($query)
    {
        return $query->where('status', ActiveInactive::ACTIVE->value);
    }

    protected $appends = ['image_url'];
    public function getImageUrlAttribute()
    {
        if (filter_var($this->primary_image_url, FILTER_VALIDATE_URL)) {
            return $this->primary_image_url;
        }
        if (!$this->primary_image_url) {
            return asset('no-image.png');
        }
        return asset('storage/rentals/primary/' . $this->primary_image_url);
    }
}
