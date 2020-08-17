<?php

use App\Enums\DBConstant;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Models\Settlement::class, function (Faker $faker) {
    return [
        'str_payment_id' => $faker->bankAccountNumber,
        'contract_id' => $faker->numberBetween(1, 20),
        'currency' =>  $faker->randomElement(['JPY', '$']),
        'status' => $faker->numberBetween(1, 6),
        'approval_error_reason' => $faker->word(),
        'approval_failed_at' => $faker->dateTimeBetween(),
        'approved_amount' => $faker->numberBetween(100000, 999999),
        'approved_at' => $faker->dateTimeBetween(),
        'capture_error_reason' => $faker->word(),
        'capture_failed_at' => $faker->dateTimeBetween(),
        'captured_amount' => $faker->numberBetween(100000, 999999),
        'captured_at' => $faker->dateTimeBetween(),
        'cancellation_error_reason' => new DateTime,
        'cancellation_failed_at' => $faker->dateTimeBetween(),
        'canceled_amount' => $faker->numberBetween(100000, 999999),
        'canceled_at' => new DateTime,
        'created_at' => new DateTime,
        'updated_at' => new DateTime,
    ];
});
