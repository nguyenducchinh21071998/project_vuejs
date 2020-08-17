<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Account;
use App\Enums\Constant;

class Employee extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $table = 'employees';

    public $incrementing = false;

    protected $fillable = [
        'id',
        'position_id',
        'department_code',
        'account_id',
        'job_title_code',
        'company_code',
        'name',
        'phone',
        'phone_family',
        'address',
        'current_address',
        'gender',
        'birthday',
        'other_email',
        'identity_number',
        'identity_card_date',
        'identity_card_place',
        'insurance_number',
        'image_url',
        'number_of_days_leave',
        'link_facebook',
        'nation',
        'nationality',
        'level',
        'japanese_level',
        'work_type',
        'visa_card_number',
        'visa_date_period',
        'university_name',
        'join_date',
        'resignation_date',
        'resignation_reason'
    ];

    public function setIdAttribute($id)
    {
        $this->attributes['id'] = str_pad($id, Constant::EMPLOYEE_ID_LENGTH, "0", STR_PAD_LEFT);
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_code', 'code');
    }

    public function position()
    {
        return $this->belongsTo(Position::class, 'position_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_code', 'code');
    }

    public function jobTitle()
    {
        return $this->belongsTo(JobTitle::class, 'job_title_code', 'code');
    }

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id');
    }
}
