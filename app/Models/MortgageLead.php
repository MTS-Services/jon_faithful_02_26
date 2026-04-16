<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MortgageLead extends Model
{
    protected $fillable = [
        'first_name',
        'email',
        'phone_number',
        'timeline',
        'purchase_price_range',
        'down_payment_range',
        'location',
        'credit_score',
        'first_time_buyer',
        'consent',
        'calculator_snapshot',
    ];

    protected function casts(): array
    {
        return [
            'consent' => 'boolean',
            'calculator_snapshot' => 'array',
        ];
    }
}
