<?php

namespace App\Models;

use App\Enums\UserType;
use App\Enums\ActiveInactive;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/** @var class-string<\App\Models\City> */
use App\Models\City;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'username',
        'name',
        'email',
        'phone',
        'city_id',
        'user_type',
        'status',
        'password',
        'your_self',
        'brokerage_name',
        'license_number',
        'image',
        'is_verified',
        'license_verification_status',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'user_type' => UserType::class,
            'status' => ActiveInactive::class,
            'is_verified' => 'boolean',
        ];
    }

    public function isAdmin()
    {
        return false;
    }

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        if (filter_var($this->image, FILTER_VALIDATE_URL)) {
            return $this->image;
        }
        if (!$this->image) {
            return asset('no-user-image-icon.png');
        }
        return asset('storage/user_images/' . $this->image);
    }

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }
}
