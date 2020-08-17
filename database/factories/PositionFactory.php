<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Position::class, function (Faker $faker) {
    return [
        'company_id' => rand(1, 10),
        'name' => $faker->text(8),
        'created_at' => new DateTime,
        'updated_at' => new DateTime,
    ];
});
