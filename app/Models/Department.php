<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'departments';

    protected $fillable = [
        'code',
        'name',
        'address',
        'parent_code',
        'company_code',
        'postal_code'
    ];

    public function parent()
    {
        return $this->belongsTo(Department::class, 'parent_code','code');
    }
}
