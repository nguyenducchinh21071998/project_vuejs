<?php

use Illuminate\Database\Seeder;

class JobTitleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('job_titles')->truncate();
        $jobTitles = [
            ['id' => 1, 'code' => 'NONE', 'name' => "None", "color_code" => "#ffffb3"],
            ['id' => 2, 'code' => 'DIVISION_MANAGER', 'name' => "Division Manager", "color_code" => "#9966ff"],
            ['id' => 3, 'code' => 'GROUP_MANAGER', 'name' => "Group Manager", "color_code" => "#ccccff"],
            ['id' => 4, 'code' => 'TEAM_LEAD', 'name' => "Team Lead", "color_code" => "#336600"],
            ['id' => 5, 'code' => 'MEMBER', 'name' => "Member", "color_code" => "#009999"],
        ];
        foreach ($jobTitles as $jobTitle) {
            \App\Models\JobTitle::create($jobTitle);
        }
    }
}
