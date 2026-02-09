<?php

namespace App\Models;

use App\Enums\ActiveInactive;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = [
        'name',
        'state',
        'slug',
        'status',
    ];

    protected $casts = [
        'status' => ActiveInactive::class,
        'created_at' => 'datetime',
    ];
    
}
