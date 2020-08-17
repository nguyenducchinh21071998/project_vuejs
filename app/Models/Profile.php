<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Account;

class Profile extends Model
{
    protected $table = 'profiles';

    protected $fillable = [
        'position_id',
        'department_id',
        'account_id',
        'job_title_id',
        'name',
        'phone',
        'address',
        'current_address',
        'gender',
        'birthday',
        'other_email',
        'identity_number',
        'identity_card_date',
        'identity_card_place',
        'insurance_number',
        'join_date',
        'official_date',
        'end_date',
        'number_of_days_leave'
    ];

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id');
    }
}
