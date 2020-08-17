<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'companies';

    protected $fillable = [
        'code',
        'parent_code',
        'name',
        'address',
        'created_by',
        'updated_by'
    ];

    public function department()
    {
        return $this->hasMany(Department::class, 'company_code', 'code');
    }

    public function employees()
    {
        return $this->hasMany(Employee::class, 'company_code', 'code');
    }
}
