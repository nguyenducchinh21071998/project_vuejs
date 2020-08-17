<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    protected $fillable = [
        'company_name', 'abbreviations', 'investment', 'shareholder', 'rank', 'website', 'description', 'number_employee', 'contract_onsite_leader', 'contract_onsite_member', 
        'lab_contract_onsite_leader', 'lab_contract_onsite_member', 'contract_offshore_brse', 'contract_offshore_se', 'contract_offshore_tester', 'contract_offshore_comtor', 'lab_contract_offshore',
    ];

    public function employees() {
        return $this->belongsToMany('App\Models\Employee', 'customer_member_responsibilities', 'customer_id', 'employee_id')->withPivot('position', 'type');
    }
    public function customerResponsibilities()
    {
        return $this->hasMany('App\Models\CustomerMemberResponsibility');
    }
}
