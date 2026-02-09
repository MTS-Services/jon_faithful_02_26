<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExternalListingSubmission extends Model
{
    protected $table = 'external_listing_submissions';

    protected $fillable = [
        'user_id',
        // 'listing_id',
        // 'listing_type',
        'name',
        'email',
        'external_link',
    ];

    protected $casts = [
        'user_id'    => 'integer',
    ];

    /* ---------------- Relationships ---------------- */

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Polymorphic relation to Listing / Rental
     */
    // public function listing()
    // {
    //     return $this->morphTo(null, 'listing_type', 'listing_id');
    // }
}
