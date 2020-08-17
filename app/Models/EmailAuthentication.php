<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmailAuthentication extends Model
{
    protected $table = 'email_authns';

    protected $fillable = [
        'user_type',
        'email',
        'token',
    ];
}
