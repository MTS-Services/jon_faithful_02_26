<?php

namespace App\Models;

use App\Enums\ActiveInactive;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/** @var class-string<\App\Models\User> */
use App\Models\User;

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
    
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
