<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserContact extends Model
{
    protected $fillable = [
        'id',
        'name',
        'email',
        'message',
        'user_id',
    ];
}
