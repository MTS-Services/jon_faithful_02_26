<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CityMortgageSetting extends Model
{
    protected $fillable = [
        'city_id',
        'base_price',
        'down_payment',
        'annual_tax',
        'annual_insurance',
        'is_active',
    ];

    protected $casts = [
        'base_price' => 'float',
        'down_payment' => 'float',
        'annual_tax' => 'float',
        'annual_insurance' => 'float',
        'is_active' => 'bool',
    ];

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }
}
