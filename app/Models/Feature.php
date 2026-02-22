<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $fillable = [
        'sort_order',
        'feature_category_id',
        'name',
        'slug',
    ];

    public function listings()
    {
        return $this->morphedByMany(Listing::class, 'featureable');
    }

    public function rentals()
    {
        return $this->morphedByMany(Rental::class, 'featureable');
    }
    
    public function featureCategory()
    {
        return $this->belongsTo(FeatureCategory::class);
    }
}
