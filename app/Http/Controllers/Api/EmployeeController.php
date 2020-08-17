<?php

namespace App\Http\Controllers\Api;

use App\Enums\DBConstant;
use App\Http\Requests\EmployeeDestroyRequest;
use App\Http\Requests\EmployeeImportRequest;
use App\Http\Requests\EmployeeRegisterRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use App\Imports\EmployeesImport;
use App\Repositories\Department\DepartmentRepositoryInterface;
use App\Repositories\Employee\EmployeeRepositoryInterface;
use App\Repositories\JobTitle\JobTitleRepositoryInterface;
use App\Repositories\Position\PositionRepositoryInterface;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Enums\ErrorType;
use App\Http\Requests\EmployeeResignationRequest;
use App\Repositories\Account\AccountRepositoryInterface;
use Illuminate\Support\Facades\Log;
use App\Enums\Constant;
use Maatwebsite\Excel\Facades\Excel;

class EmployeeController extends ApiController
{
    private $employeeRepository;
    private $departmentRepository;
    private $positionRepository;
    private $jobTitleRepository;

    public function __construct(
        EmployeeRepositoryInterface $employee,
        DepartmentRepositoryInterface $department,
        PositionRepositoryInterface $position,
        JobTitleRepositoryInterface $jobTitle,
        AccountRepositoryInterface $accountRepository
    ) {
        $this->employeeRepository = $employee;
        $this->departmentRepository = $department;
        $this->positionRepository = $position;
        $this->jobTitleRepository = $jobTitle;
        $this->accountRepository = $accountRepository;
    }

    /**
     * get list employee
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function list(Request $request)
    {
        try {
            $data = $this->employeeRepository->getAll($request);

            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());

            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000,  $e->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try {
            $id = str_pad($id, Constant::EMPLOYEE_ID_LENGTH, "0", STR_PAD_LEFT);
            $data = $this->employeeRepository->findEmployee($id);
            if ($data['identity_card_date']) {
                $data['identity_card_date'] = Carbon::createFromFormat('Y-m-d', $data['identity_card_date'])->format('d/m/Y');
            }
            if ($data['birthday']) {
                $data['birthday'] = Carbon::createFromFormat('Y-m-d', $data['birthday'])->format('d/m/Y');
            }
            if ($data['join_date']) {
                $data['join_date'] = Carbon::createFromFormat('Y-m-d', $data['join_date'])->format('d/m/Y');
            }
            if ($data['visa_date_period']) {
                $data['visa_date_period'] = Carbon::createFromFormat('Y-m-d', $data['visa_date_period'])->format('d/m/Y');
            }

            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000,  $e->getMessage());
        }
    }

    /**
     * get employee by Id
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $id = str_pad($id, Constant::EMPLOYEE_ID_LENGTH, "0", STR_PAD_LEFT);
            $data = $this->employeeRepository->showEmployee($id);
            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000,  $e->getMessage());
        }
    }

    /**
     * get data for create form
     * @return \Illuminate\Http\JsonResponse
     */
    public function create()
    {
        try {
            $dataDepartment = $this->departmentRepository->all();
            $dataPosition = $this->positionRepository->all();
            $dataJobTitle = $this->jobTitleRepository->all();
            $data = [
                'departments' => $dataDepartment,
                'positions' => $dataPosition,
                'job_titles' => $dataJobTitle,
                'japanese_level' => DBConstant::JAPANESE_LEVEL,
                'job_level' => DBConstant::JOB_LEVEL,
                'company' => DBConstant::COMPANY,
                'gender' => DBConstant::GENDER,
                'work_type' => DBConstant::WORK_TYPE
            ];
            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());

            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000,  $e->getMessage());
        }
    }

    /**
     * create employee
     * @param EmployeeRegisterRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(EmployeeRegisterRequest $request)
    {
        $result = $this->employeeRepository->store($request);

        if (!$result['success']) {
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $result['message']);
        }
        return $this->sendSuccess();
    }

    /**
     * update employee
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(EmployeeUpdateRequest $request, $id)
    {
        $id = str_pad($id, Constant::EMPLOYEE_ID_LENGTH, "0", STR_PAD_LEFT);
        $result = $this->employeeRepository->updateEmployee($id, $request);

        if (!$result['success']) {
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $result['message']);
        }
        return $this->sendSuccess();
    }

    /**
     * delete employee
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        try {
            $id = str_pad($id, Constant::EMPLOYEE_ID_LENGTH, "0", STR_PAD_LEFT);
            $this->employeeRepository->destroy($id);

            return $this->sendSuccess();
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());

            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $e->getMessage());
        }
    }

    /**
     * import employee from file
     * @param EmployeeImportRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function import(EmployeeImportRequest $request)
    {
        try {
            $path = $request->file('import_file');
            Excel::import(new EmployeesImport, $path);

            return $this->sendSuccess();
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());

            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $e->getMessage());
        }
    }

    public function takeResignation(EmployeeResignationRequest $request, $id)
    {
        $result = $this->employeeRepository->takeResignation($id, $request->all());
        if (!$result['success']) {
            return $this->sendError($result['code'], $result['status_code'], $result['message']);
        }
        return $this->sendSuccess();
    }
}
