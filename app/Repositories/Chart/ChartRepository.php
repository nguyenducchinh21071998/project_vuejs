<?php

declare(strict_types=1);

namespace App\Repositories\Chart;


use App\Models\Employee;
use App\Repositories\BaseRepository;
use App\Repositories\Chart\ChartRepositoryInterface;
use Illuminate\Support\Facades\DB;
use App\Enums\DBConstant;
use App\Models\Department;
use App\Enums\Constant;
use App\Models\JobTitle;
use App\Models\Company;

class ChartRepository extends BaseRepository implements ChartRepositoryInterface
{
    /**
     * Get model
     * @return string
     */
    public function getModel()
    {
        return Employee::class;
    }

    /**
     * Get chart member in company
     * @return array
     */
    public function getChartMemberCompanies()
    {
        $memberFoots = [];
        $memberFootLabels = [];
        $memberFootColors = [];
        $memberDivisions = [];
        $memberDivisionLabels = [];
        $memberDivisionColors = [];
        $memberJobTitle = [];
        $jobTitleLabels = [];
        $jobTitleColors = [];
        $memberCompanies = [];
        $memberLabels = [];
        $memberColors = [];
        $employees = $this->model
            ->with(['department.parent'])
            ->select(DB::raw('department_code, job_title_code, company_code'))
            ->whereNull('employees.resignation_date')
            ->get();
        $departments = Department::get();
        $jobTitles = JobTitle::get();
        $companies = Company::get();
        // add default value for memberCompany
        foreach ($companies as $company) {
            $memberCompanies[$company->code] = 0;
            $memberLabels[$company->code] = $company->name;
            $memberColors[$company->code] = $company->color_code;
        }

        // add default value for memberJobTitle
        foreach ($jobTitles as $jobTitle) {
            $memberJobTitle[$jobTitle->code] = 0;
            $jobTitleLabels[$jobTitle->code] = $jobTitle->name;
            $jobTitleColors[$jobTitle->code] = $jobTitle->color_code;
        }
        // add default value for Division and Foot
        foreach ($departments as $department) {
            if ($department->parent_code) {
                $memberDivisions[$department->code] = 0;
                $memberDivisionLabels[$department->code] = $department->name;
                $memberDivisionColors[$department->code] = $department->color_code;
            }
            if (!$department->parent_code) {
                $memberFoots[$department->code] = 0;
                $memberFootLabels[$department->code] = $department->name;
                $memberFootColors[$department->code] = $department->color_code;
            }
        }
        foreach ($employees as $employee) {
            // get mount for each company
            $memberCompanies[$employee->company_code] += 1;
            // get mount for each jobTitle
            $memberJobTitle[$employee->job_title_code] += 1;
            // get mount for each division
            if ($employee->department_code) {
                if ($employee->department->parent_code) {
                    $memberDivisions[$employee->department_code] += 1;
                }
                // get mount for each foot
                if (!$employee->department->parent_code) {
                    $memberFoots[$employee->department_code] += 1;
                } else {
                    $memberFoots[$employee->department->parent_code] += 1;
                }
            }
        }
        $dataCompanies = [
            "data" => array_values($memberCompanies),
            "backgroundColor" => array_values($memberColors),
            "labels" => array_values($memberLabels),
        ];
        $dataJobTitles = [
            "data" => array_values($memberJobTitle),
            "backgroundColor" => array_values($jobTitleColors),
            "labels" => array_values($jobTitleLabels),
        ];
        $dataDivisions = [
            "data" => array_values($memberDivisions),
            "backgroundColor" => array_values($memberDivisionColors),
            "labels" => array_values($memberDivisionLabels),
            "label" => '',
        ];
        $dataFoots = [
            "data" => array_values($memberFoots),
            "backgroundColor" => array_values($memberFootColors),
            "labels" => array_values($memberFootLabels),
        ];
        $data = [
            'memberCompanies' => $dataCompanies,
            'memberFoots' => $dataFoots,
            'memberDivisions' => $dataDivisions,
            'memberJobTitle' => $dataJobTitles
        ];

        return $data;
    }

    /**
     * Get chart member in out
     * @return array
     */
    public function getMemberInOut($option)
    {
        $data = [];
        $year = date("Y");
        $employees = $this->model
            ->with(['department.parent'])
            ->select(DB::raw('department_code, job_title_code, company_code, join_date, resignation_date'))
            ->whereYear('employees.join_date', '=', $year)
            ->get();
        $departments = Department::get();
        if ($option == Constant::VALUE_OPTION_CHART_ALL) {
            $memberIn = DBConstant::COUNT_MEMBER_EACH_MONTHS;
            $memberOut = DBConstant::COUNT_MEMBER_EACH_MONTHS;
            foreach ($employees as $employee) {
                $memberIn[date("m", strtotime($employee->join_date))] += 1;
                if ($employee->resignation_date) {
                    $memberOut[date("m", strtotime($employee->resignation_date))] += 1;
                }
            }
            $data = [
                "memberIn" => array_values($memberIn),
                "memberOut" => array_values($memberOut),
            ];
        }

        if ($option == Constant::VALUE_OPTION_CHART_FOOT) {
            $memberFootIn = [];
            $memberFootOuts = [];
            foreach ($departments as $department) {
                if (!$department->parent_code) {
                    $memberFootIn[$department->code] = DBConstant::COUNT_MEMBER_EACH_MONTHS;
                    $memberFootOuts[$department->code . '_out'] = DBConstant::COUNT_MEMBER_EACH_MONTHS;
                }
            }
            foreach ($employees as $employee) {
                if ($employee->department_code) {
                    if (!$employee->department->parent_code) {
                        $memberFootIn[$employee->department->code][date("m", strtotime($employee->join_date))] += 1;
                    } else {
                        $memberFootIn[$employee->department->parent->code][date("m", strtotime($employee->join_date))] += 1;
                    }
                    if (!$employee->department->parent_code && $employee->resignation_date) {
                        $memberFootOuts[$employee->department->code . '_out'][date("m", strtotime($employee->resignation_date))] += 1;
                    } else if ($employee->resignation_date) {
                        $memberFootOuts[$employee->department->parent->code . '_out'][date("m", strtotime($employee->resignation_date))] += 1;
                    }
                }
            }
            $memberFoots = array_merge($memberFootIn, $memberFootOuts);
            foreach ($memberFoots as $key => $memberFoot) {
                $data[$key]['data'] = array_values($memberFoot);
                $data[$key]['label'] = DBConstant::CHART_OPTION_IN_OUT[$key];
                $data[$key]['borderColor'] = DBConstant::CHART_OPTION_COLOR[$key];
            }
        }

        if ($option == Constant::VALUE_OPTION_CHART_DIVISION) {
            $memberDivisionsIn = [];
            $memberDivisionsOut = [];
            foreach ($departments as $department) {
                if ($department->parent_code) {
                    $memberDivisionsIn[$department->code] = DBConstant::COUNT_MEMBER_EACH_MONTHS;
                    $memberDivisionsOut[$department->code . '_out'] = DBConstant::COUNT_MEMBER_EACH_MONTHS;
                }
            }
            // add default value for Division and Foot
            foreach ($employees as $employee) {
                if ($employee->department_code) {
                    if ($employee->department->parent_code) {
                        $memberDivisionsIn[$employee->department->code][date("m", strtotime($employee->join_date))] += 1;
                    }
                    if ($employee->department->parent_code && $employee->resignation_date) {
                        $memberDivisionsOut[$employee->department->code . '_out'][date("m", strtotime($employee->resignation_date))] += 1;
                    }
                }
            }
            $memberDivisions = array_merge($memberDivisionsIn, $memberDivisionsOut);
            foreach ($memberDivisions as $key => $memberDivision) {
                $data[$key]['data'] = array_values($memberDivision);
                $data[$key]['label'] = DBConstant::CHART_OPTION_IN_OUT[$key];
                $data[$key]['borderColor'] = DBConstant::CHART_OPTION_COLOR[$key];
            }
        }
        return $data;
    }
}
