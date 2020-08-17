<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enums\DBConstant;
use App\Models\Department;
use App\Models\Position;
use App\Enums\ErrorType;
use App\Models\JobTitle;
use App\Models\Company;
use App\Models\Constant;
use App\Enums\Constant as DefaultConstant;
use App\Repositories\Company\CompanyRepositoryInterface;
use App\Repositories\Constant\ConstantRepositoryInterface;

class CommonController extends ApiController
{
    private $constantRepository;
    private $companyRepository;

    public function __construct(
        ConstantRepositoryInterface $constantRepository,
        CompanyRepositoryInterface $companyRepository
    )
    {
        $this->constantRepository = $constantRepository;
        $this->companyRepository = $companyRepository;
    }
    public function commonsData()
    {
        try {
            $foots = Department::select('id', 'code', 'name', 'company_code')->whereNull('parent_code')->get();
            $divisions = Department::select('id', 'code', 'name', 'parent_code', 'company_code')->whereNotNull('parent_code')->get();
            $positions = Position::select('id', 'name')->get();
            $jobTitle = JobTitle::select('id', 'code', 'name')->get();
            $workType = $this->constantRepository->getByType(DefaultConstant::TYPE_WORK_TYPE_EMPLOYEE_CONSTANT);
            $companies = $this->companyRepository->getRecursive();

            $data = [
                'foots' => $foots,
                'divisions' => $divisions,
                'positions' => $positions,
                'jobTitle' => $jobTitle,
                'workType' => $workType,
                'companies' => $companies
            ];

            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000,  $e->getMessage());
        }
    }
}
