<?php

use App\Enums\DBConstant;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Models\Contract::class, function (Faker $faker) {
    return [
        'contract_id' => $faker->numberBetween(1, 10000),
        'plan_id' => $faker->numberBetween(1, 2),
        'business_card_id' =>  $faker->numberBetween(3, 22),
        'settlement_status' => $faker->numberBetween(1, 6),
        'start_date' => $faker->dateTimeBetween(),
        'end_date' => $faker->dateTimeBetween(),
        'price' => $faker->numberBetween(100000, 999999),
        'cancellation_reservation_flag' => DBConstant::NOT_ARCHIVED_FLAG,
        'created_at' => new DateTime,
        'updated_at' => new DateTime,
    ];
});
