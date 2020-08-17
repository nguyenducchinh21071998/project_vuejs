<?php

use Illuminate\Database\Seeder;

class SettlementTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        factory(App\Models\Settlement::class, 30)->create();
    }
}
