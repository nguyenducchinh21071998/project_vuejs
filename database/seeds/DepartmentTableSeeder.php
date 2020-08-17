<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('departments')->truncate();
        $departments = [
            ['code' => 'F1', 'name' => 'F1', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#33cc33'],
            ['code' => 'F2', 'name' => 'F2', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#6666ff'],
            ['code' => 'D1', 'name' => "D1", "parent_code" => 'F1', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#33cc33'],
            ['code' => 'D2', 'name' => "D2", "parent_code" => 'F1', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#336699'],
            ['code' => 'HR', 'name' => "HR", "parent_code" => 'F1', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#9966ff'],
            ['code' => 'PR', 'name' => "PR", "parent_code" => 'F1', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#d98c8c'],
            ['code' => 'ACCOUNTING', 'name' => "Accounting", "parent_code" => 'F1', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#009999'],
            ['code' => 'QA', 'name' => "QA", "parent_code" => 'F1', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#ccccff'],
            ['code' => '11F', 'name' => "11F", "parent_code" => 'F1', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#eb99ff'],
            ['code' => 'D3', 'name' => "D3", "parent_code" => 'F2', 'company_code' => 'FABBI_HA_NOI', 'color_code' => '#6666ff'],
        ];
        foreach ($departments as $department) {
            \App\Models\Department::create($department);
        }
    }
}
