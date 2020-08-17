<?php

use Illuminate\Database\Seeder;

class ConstantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('constants')->truncate();
        $constants = [
            ['code' => 'FULLTIME', 'name' => 'Full Time', 'type' => 1],
            ['code' => 'PARTTIME', 'name' => 'Part Time', 'type' => 1],
            ['code' => 'CTV', 'name' => 'CTV', 'type' => 1],
        ];
        foreach ($constants as $constant) {
            \App\Models\Constant::create($constant);
        }
    }
}
