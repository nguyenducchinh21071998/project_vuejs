<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimeSheet extends Model
{
    protected $table = 'timesheets';

    protected $fillable = [
        'employee_id',
        'worked_at',
        'check_in_at',
        'check_out_at',
    ];
}
