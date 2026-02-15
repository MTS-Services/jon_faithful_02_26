<?php

namespace App\Models;

use App\Enums\ExternalListingType;
use Illuminate\Database\Eloquent\Model;

class ExternalListingSubmission extends Model
{
    protected $table = 'external_listing_submissions';

    protected $fillable = [
        'user_id',
        'external_listing_type',
        'name',
        'email',
        'external_link',
    ];

    protected $casts = [
        'user_id'    => 'integer',
        'external_listing_type' => ExternalListingType::class,
    ];

    /* ---------------- Relationships ---------------- */

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
