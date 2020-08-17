<?php

use App\Enums\DBConstant;
use Faker\Generator as Faker;

$factory->define(App\Models\BusinessCard::class, function (Faker $faker) {
    $chars = DBConstant::BUSINESS_CARD_SETTING_CODE_CHAR;

    $settingCode = '';

    for ($i = 1; $i <= DBConstant::BUSINESS_CARD_BASE36_LENGTH; $i++) {
        $settingCode .= substr(str_shuffle($chars), rand(1, 30), 4);
        if ($i != DBCONSTANT::BUSINESS_CARD_BASE36_LENGTH) {
            $settingCode .= '-';
        }
    }

    return [
        'company_id' => rand(1, 10),
        'user_id' => null,
        'str_subscription_id' => $faker->text(10),
        'setting_code' => $settingCode,
        'last_name_kanji' => $faker->text(10),
        'first_name_kanji' => $faker->text(10),
        'name_kanji_for_index' => $faker->text(10),
        'last_name_kana' => $faker->text(10),
        'first_name_kana' => $faker->text(10),
        'name_kana_for_index' => $faker->text(10),
        'department_id' => rand(1, 10),
        'position_id' => rand(1, 10),
        'employee_number' => $faker->text(5),
        'hire_date' => $faker->date(),
        'email' => $faker->unique()->safeEmail,
        'phone' => $faker->phoneNumber,
        'display_order' => 1,
        'is_expired' => 0,
        'is_archived' => 0,
        'created_at' => new DateTime,
        'updated_at' => new DateTime,
    ];
});
