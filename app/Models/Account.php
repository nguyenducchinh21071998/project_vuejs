<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Profile;

class Account extends Model
{
    protected $table = 'accounts';

    protected $fillable = [
        'id',
        'email',
        'password',
        'is_active'
    ];
}
