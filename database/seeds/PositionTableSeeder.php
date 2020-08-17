<?php

use Illuminate\Database\Seeder;

class PositionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('positions')->truncate();
        $positions = [
            ['id' => 1, 'name' => "Internship"],
            ['id' => 2, 'name' => "Fresher"],
            ['id' => 3, 'name' => "Junior"],
            ['id' => 4, 'name' => "Senior"],
            ['id' => 5, 'name' => "Leader"]
        ];
        foreach ($positions as $position) {
            \App\Models\Position::create($position);
        }
    }
}
