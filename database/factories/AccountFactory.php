<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Models\Account::class, function (Faker $faker) {
    return [
        'email' => $faker->unique()->firstName . "@fabbi.io",
        'password' => bcrypt("123456"),
        'remember_token' => Str::random(10),
    ];
});
