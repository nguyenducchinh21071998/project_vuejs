<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerMemberResponsibility extends Model
{
    protected $fillable = [
        'customer_id', 'name', 'position', 'type'
    ];
}
