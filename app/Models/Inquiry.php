<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model
{
    protected $table = 'inquiries';

    protected $primaryKey = 'inquiry_id';

    protected $fillable = [
        'user_id',
        'inquiry_type',
        'body',
    ];
}
