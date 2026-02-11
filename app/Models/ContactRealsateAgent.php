<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactRealsateAgent extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'listing_id',
        'realstate_agent_id',
    ];
}
