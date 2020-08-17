<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Traits\SoftDeletes\CustomSoftDeletes;
use App\Enums\DBConstant;

class User extends Authenticatable implements JWTSubject
{
    use CustomSoftDeletes;

    protected $table = 'users';
    
    protected $primaryKey = 'user_id';

    protected $fillable = [
        'email',
        'employee_id',
        'password',
        'remember_token',
        'is_archived',
    ];
}
