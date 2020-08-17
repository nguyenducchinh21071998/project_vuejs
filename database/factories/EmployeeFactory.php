<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Models\Employee::class, function (Faker $faker) {
    static $number = 1;

    return [
        'id' => $number,
        'position_id' => $faker->numberBetween(1, 5),
        'department_id' => $faker->numberBetween(4, 6),
        'account_id' => $number++,
        'job_title_id' => $faker->numberBetween(1, 10),
        'company_id' => $faker->numberBetween(1, 2),
        'name' => $faker->name,
        'phone' => $faker->randomNumber(9, false),
        'address' => $faker->address,
        'current_address' => $faker->address,
        'gender' => $faker->numberBetween(1, 2),
        'birthday' => $faker->dateTimeBetween('-40 years')->format('Y-m-d'),
        'other_email' => $faker->unique()->freeEmail,
        'identity_number' => $faker->creditCardNumber,
        'identity_card_date' => $faker->dateTimeThisYear()->format('Y-m-d'),
        'identity_card_place' => $faker->city,
        'insurance_number' => $faker->creditCardNumber,
        'image_url' => $faker->imageUrl(60,60),
        'number_of_days_leave' => $faker->numberBetween(0, 12),
        'link_facebook' => $faker->url,
        'nation' => $faker->text(6),
        'nationality' => $faker->text(6),
        'level' => $faker->numberBetween(1, 5),
        'japanese_level' => $faker->numberBetween(1, 5),
        'work_type' => $faker->text(6),
        'visa_card_number' => $faker->creditCardNumber,
        'visa_date_period' => $faker->dateTimeThisYear()->format('Y-m-d'),
        'university_name' => $faker->city,
        'join_date' => $faker->dateTimeThisYear()->format('Y-m-d'),
    ];
});
