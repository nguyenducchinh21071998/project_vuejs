<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'code' => 'FABBI_HA_NOI', 'name' => 'Fabbi Ha Noi', 'address' => '11F Detech Tower, 107 Nguyen Phong Sac, Dich Vong Hau, Cau Giay, Ha Noi', 'parent_code' => null, 'color_code' => '#d9d9d9'
            ],
            [
                'code' => 'FABBI_JAPAN', 'name' => 'Fabbi Japan', 'address' => 'Tokyo-Tou Taito-Ku Taito 1chome 8ban 5go', 'parent_code' => null, 'color_code' => '#ff9999'
            ],
            [
                'code' => 'FABBI_AI', 'name' => 'Fabbi AI', 'address' => '13F Detech Tower, 107 Nguyen Phong Sac, Dich Vong Hau, Cau Giay, Ha Noi', 'parent_code' => null, 'color_code' => '#999966'
            ],
            [
                'code' => 'FABBI_CRM', 'name' => 'Fabbi CRM', 'address' => '14F Detech Tower, 107 Nguyen Phong Sac, Dich Vong Hau, Cau Giay, Ha Noi', 'parent_code' => null, 'color_code' => '#33cc33'
            ]
        ];
        DB::table('companies')->truncate();
        DB::table('companies')->insert($data);
    }
}
