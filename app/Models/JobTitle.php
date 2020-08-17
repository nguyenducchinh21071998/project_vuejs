<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JobTitle extends Model
{
    protected $table = 'job_titles';

    protected $fillable = [
        'code',
        'name'
    ];

    public function profiles()
    {
        return $this->hasMany(Employee::class, 'job_title_code', 'code');
    }
}
