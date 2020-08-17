<?php

use App\Enums\DBConstant;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Models\CompanyAdminUser::class, function (Faker $faker) {
    return [
        'company_id' => factory(App\Models\Company::class)->create()->company_id,
        'email' => $faker->unique()->safeEmail,
        'password' => bcrypt('12345678'),
        'remember_token' => Str::random(255),
        'is_authenticated' => DBConstant::AUTH_AUTHENTICATED,
        'is_archived' => DBConstant::NOT_ARCHIVED_FLAG,
        'created_at' => new DateTime,
        'updated_at' => new DateTime,
    ];
});
