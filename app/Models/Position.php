<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    protected $table = 'positions';

    protected $fillable = [
        'name'
    ];

    public function profiles()
    {
        return $this->hasMany(Employee::class, 'position_id', 'id');
    }
}
