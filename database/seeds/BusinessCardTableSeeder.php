<?php

use Illuminate\Database\Seeder;

class BusinessCardTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\BusinessCard::class, 20)->create();
    }
}
