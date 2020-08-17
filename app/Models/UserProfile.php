<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProfile extends Model
{
    protected $table = 'user_profiles';

    protected $fillable = [
        'employee_id',
        'last_name',
        'first_name',
        'name',
        'position_id',
        'department_id',
        'phone',
        'address',
        'birthday',
        'start_date',
        'work_type',
    ];
}
