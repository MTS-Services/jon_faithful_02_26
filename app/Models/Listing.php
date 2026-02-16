<?php

namespace App\Models;

use App\Enums\ActiveInactive;
use App\Enums\ListingProperty;
use App\Enums\ListingStatus;
use App\Jobs\SendListingNotificationJob;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = [
        'user_id',
        'sort_order',
        'city_id',
        'title',
        'description',
        'purchase_price',
        'listing_status',
        'property_type',
        'bedrooms',
        'bathrooms',
        'square_feet',
        'primary_image_url',
        'youtube_video_url',
        'status',
    ];

    protected $casts = [
        'purchase_price' => 'decimal:2',
        'bedrooms' => 'integer',
        'bathrooms' => 'integer',
        'square_feet' => 'integer',
        'status' => ActiveInactive::class,
        'listing_status' => ListingStatus::class,
        'property_type' => ListingProperty::class,
    ];

    /* ---------------- Boot Methods ---------------- */

    protected static function boot(): void
    {
        parent::boot();

        static::created(function (self $listing) {
            SendListingNotificationJob::dispatch($listing, true);
        });

        static::updated(function (self $listing) {
            SendListingNotificationJob::dispatch($listing, false);
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

    protected $appends = ['image_url', 'listing_status_label'];

    public function getImageUrlAttribute()
    {
        if (filter_var($this->primary_image_url, FILTER_VALIDATE_URL)) {
            return $this->primary_image_url;
        }
        if (! $this->primary_image_url) {
            return asset('no-image.png');
        }

        return asset('storage/listings/primary/'.$this->primary_image_url);
    }

    public function getListingStatusLabelAttribute(): string
    {
        return $this->listing_status?->label() ?? 'For Rent';
    }
}
