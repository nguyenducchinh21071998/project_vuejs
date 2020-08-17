<?php

namespace App\Imports;

use App\Models\Account;
use App\Models\Employee;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class EmployeesImport implements ToCollection, WithHeadingRow
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            $account = Account::create([
                'email' => $row['email'],
                'password' => bcrypt($row['password']),
            ]);

            Employee::create([
                'id' => $row['id'],
                'position_id' => $row['position_id'],
                'department_id' => $row['department_id'],
                'job_title_id' => $row['job_title_id'],
                'account_id' => $account->id,
                'company_id' => $row['company_id'],
                'name' => $row['name'],
                'phone' => $row['phone'],
                'address' => $row['address'],
                'current_address' => $row['current_address'],
                'gender' => $row['gender'],
                'birthday' => Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['birthday'])),
                'other_email' => $row['other_email'],
                'identity_number' => $row['identity_number'],
                'identity_card_date' => Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['identity_card_date'])),
                'identity_card_place' => $row['identity_card_place'],
                'insurance_number' => $row['insurance_number'],
                'image_url' => $row['image_url'],
                'number_of_days_leave' => $row['number_of_days_leave'],
                'link_facebook' => $row['link_facebook'],
                'nation' => $row['nation'],
                'level' => $row['level'],
                'japanese_level' => $row['japanese_level'],
                'work_type' => $row['work_type'],
                'visa_card_number' => $row['visa_card_number'],
                'visa_date_period' => Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['visa_date_period'])),
                'university_name' => $row['university_name'],
                'join_date' => Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['join_date'])),
                'official_date' => Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['official_date'])),
                'end_date' => Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($row['end_date'])),
            ]);
        }
    }

    function headingRow(): int
    {
        return 1;
    }
}
