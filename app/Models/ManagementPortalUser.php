<?php

namespace App\Models;


use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class ManagementPortalUser extends Authenticatable implements JWTSubject
{
    protected $table = 'management_portal_users';

    protected $primaryKey = 'management_portal_user_id';

    protected $fillable = [
        'email',
        'password',
        'remember_token',
        'is_archived'
    ];

    protected $hidden = ['remember_token', 'password'];
}
