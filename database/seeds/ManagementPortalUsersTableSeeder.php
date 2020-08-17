<?php

use App\Enums\DBConstant;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Traits\SoftDeletes\CustomSoftDeletes;

class ManagementPortalUsersTableSeeder extends Seeder
{
    use CustomSoftDeletes;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('management_portal_users')->insert([
            [
                'management_portal_user_id' => 1,
                'email' => 'portal@gmail.com',
                'password' => Hash::make('12345678'),
                'is_archived' => DBConstant::ARCHIVED_FLAG,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]
        ]);
    }
}
