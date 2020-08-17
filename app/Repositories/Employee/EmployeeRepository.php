<?php

declare(strict_types=1);

namespace App\Repositories\Employee;

use App\Enums\Constant;
use App\Enums\DBConstant;
use App\Enums\ErrorType;
use App\Models\Account;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Position;
use App\Repositories\BaseRepository;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class EmployeeRepository extends BaseRepository implements EmployeeRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Employee::class;
    }

    /**
     * get all employee
     * @param $request
     * @param $limit
     * @param $page
     * @return array
     */


    public function getAll($request)
    {
        $perPage = $request->input('per_page', Constant::DEFAULT_LIMIT_RESPONSE);
        $sortColumn = $request->input('sort_column', Constant::DEFAULT_SORT_COLUMN_RESPONSE);
        $sortBy = $request->input('sort_by', Constant::DEFAULT_SORT_BY_RESPONSE);
        $employees = $this->model->with(['department.parent', 'position', 'jobTitle', 'company'])->orderBy($sortColumn, $sortBy);
        if ($request->has('job_status') && $request->job_status) {
            $employees->whereNotNull('resignation_date');
        } else {
            $employees->whereNull('resignation_date');
        }
        if ($request->has('name')) {
            $employees->where('name', 'LIKE', '%' . $request->name . '%');
        }
        if ($request->has('work_type')) {
            $employees->where('work_type', 'LIKE', '%' . $request->work_type . '%');
        }
        if ($request->has('job_title_code') && $request->job_title_code) {
            $employees->where('job_title_code', $request->job_title_code);
        }
        if ($request->has('company_code') && $request->company_code) {
            $employees->where('company_code', $request->company_code);
        }
        if ($request->has('japanese_level') && $request->japanese_level) {
            $employees->where('japanese_level', $request->japanese_level);
        }
        if ($request->has('position_id') && $request->position_id) {
            $employees->where('position_id', $request->position_id);
        }
        if ($request->has('division_code') && $request->division_code) {
            $employees->where('department_code', $request->division_code);
        }
        if ($request->has('foot_code') && $request->foot_code) {
            $employees->where(function ($query) use ($request) {
                $query->where('department_code', $request->foot_code)
                    ->orwhereHas('department', function ($query) use ($request) {
                        return $query->whereHas('parent', function ($subQuery) use ($request) {
                            return $subQuery->where('code', $request->foot_code);
                        });
                    });
            });
        }
        $employees = $employees->paginate($perPage);
        $employees->map(function ($value) {
            if ($value->department_code) {
                $value->division = ($value->department->parent_code ? $value->department->name : '');
                $value->foot = ($value->department->parent_code ? $value->department->parent->name : $value->department->name);
            }
            $value->position_name = $value->position->name;
            $value->job_title_name = $value->jobTitle->name;
            $value->company_name = $value->company->name;
        });
        $data = [
            'employees' => $employees
        ];

        return $data;
    }

    /**
     * Get employee, department
     * @param $id
     * @return array
     */
    public function findEmployee($id)
    {
        $employee = $this->model->with('department')->findOrFail($id);
        $employee->image_url = $this->imageService->getS3FileUrl($employee->image_url, Constant::PATH_NO_IMAGE_AVAILABLE);
        return $employee;
    }

    /**
     * Update employee
     * @param $request , int $id
     * @return array
     */
    public function updateEmployee($id, $request)
    {
        DB::beginTransaction();
        try {
            $data = $request->all();
            if ($data['identity_card_date']) {
                $data['identity_card_date'] = Carbon::createFromFormat('d/m/Y', $data['identity_card_date'])->format('Y-m-d');
            }
            if ($data['birthday']) {
                $data['birthday'] = Carbon::createFromFormat('d/m/Y', $data['birthday'])->format('Y-m-d');
            }
            if ($data['join_date']) {
                $data['join_date'] = Carbon::createFromFormat('d/m/Y', $data['join_date'])->format('Y-m-d');
            }
            if ($data['visa_date_period']) {
                $data['visa_date_period'] = Carbon::createFromFormat('d/m/Y', $data['visa_date_period'])->format('Y-m-d');
            }
            $resultEmployee = $this->find($id);
            if ($request->file_url) {
                $data['image_url'] = $this->imageService->uploadFileToS3($request, Constant::PATH_AVATAR_EMPLOYEES);
            }
            if ($resultEmployee->image_url && $request->image_url) {
                $this->imageService->deleteFileFromS3($resultEmployee->image_url);
            }
            $resultEmployee->update($data);
            DB::commit();
            return ['success' => true];
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            DB::rollBack();
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Create employee
     * @param $request
     * @return array
     */

    public function store($request)
    {
        DB::beginTransaction();
        try {
            $data = $request->all();
            if ($data['identity_card_date']) {
                $data['identity_card_date'] = Carbon::createFromFormat('d/m/Y', $data['identity_card_date'])->format('Y-m-d');
            }
            if ($data['birthday']) {
                $data['birthday'] = Carbon::createFromFormat('d/m/Y', $data['birthday'])->format('Y-m-d');
            }
            if ($data['join_date']) {
                $data['join_date'] = Carbon::createFromFormat('d/m/Y', $data['join_date'])->format('Y-m-d');
            }
            if ($data['visa_date_period']) {
                $data['visa_date_period'] = Carbon::createFromFormat('d/m/Y', $data['visa_date_period'])->format('Y-m-d');
            }
            $account = Account::create([
                'email' => $request->email,
                'password' => bcrypt($request->email)
            ]);
            $data['account_id'] = $account->id;
            $data['image_url'] = $this->imageService->uploadFileToS3($request, Constant::PATH_AVATAR_EMPLOYEES);
            $this->model->create($data);
            DB::commit();
            return ['success' => true];
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            DB::rollBack();
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * @param $ids
     * @return int
     */
    public function destroy($ids)
    {
        if ($ids) {
            return $this->model->destroy($ids);
        } else {
            return false;
        }
    }

    public function showEmployee($id)
    {
        $employee = $this->model->with(['department.parent', 'position', 'jobTitle', 'company'])->findOrFail($id);
        if ($employee->department_code) {
            $employee->division = ($employee->department->parent_code ? $employee->department->name : '');
            $employee->foot = ($employee->department->parent_code ? $employee->department->parent->name : $employee->department->name);
        }
        $employee->position_name = $employee->position->name;
        $employee->company_name = $employee->company->name;
        $employee->job_title_name = $employee->jobTitle->name;
        $employee->image_url = $this->imageService->getS3FileUrl($employee->image_url, Constant::PATH_NO_IMAGE_AVAILABLE);
        return $employee;
    }

    public function takeResignation($id, $data)
    {
        DB::beginTransaction();
        try {
            $check = $this->model->where('id', $id)->whereNotNull('resignation_date')->count();
            if (!!$check) {
                return [
                    'success' => false,
                    'code' => ErrorType::CODE_4015,
                    'status_code' => ErrorType::STATUS_4015,
                    'message' => 'Employee resigined'
                ];
            }
            $data['resignation_date'] = Carbon::createFromFormat('d/m/Y', $data['resignation_date'])->format('Y-m-d');
            $employee = $this->update($id, $data);
            $account = Account::find($employee['account_id']);
            $account->update([
                'is_active' => Constant::INACTIVE_ACCOUNT
            ]);
            DB::commit();

            return [
                'success' => true
            ];
        } catch (\Exception $e) {
            DB::rollBack();

            return [
                'success' => false,
                'code' => ErrorType::CODE_5000,
                'status_code' => ErrorType::STATUS_500,
                'message' => $e->getMessage()
            ];
        }
    }
}
