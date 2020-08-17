<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Company::class, function (Faker $faker) {
    return [
        'str_customer_id' =>  $faker->text(10),
        'name' =>  $faker->text(10),
        'name_for_index' => $faker->text(10),
        'name_en' => $faker->text(6),
        'url' => $faker->url,
        'phone' => $faker->phoneNumber,
        'prefecture_id' => null,
        'city' => $faker->text(8),
        'subsequent_address' => $faker->address,
        'is_archived' => 0,
        'created_at' => new DateTime,
        'updated_at' => new DateTime,
    ];
});
