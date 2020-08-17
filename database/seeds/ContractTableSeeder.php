<?php

use Illuminate\Database\Seeder;

class ContractTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        factory(App\Models\Contract::class, 50)->create();
    }
}
