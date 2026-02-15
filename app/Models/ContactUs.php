<?php

namespace App\Models;

use App\Enums\InterestedIn;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;

    protected $table = 'contact_us';

    protected $fillable = [
        'full_name',
        'phone_number',
        'email',
        'interested_in',
        'city_id',
        'message',
        'is_confirmed',
    ];

    protected $casts = [
        'is_confirmed' => 'boolean',
        'interested_in' => InterestedIn::class,
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
