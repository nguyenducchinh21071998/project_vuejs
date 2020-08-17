<?php

namespace App\Http\Controllers\Api;

use App\Enums\ErrorType;
use App\Repositories\Chart\ChartRepositoryInterface;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class ChartController extends ApiController
{
    private $chartRepository;

    public function __construct(
        ChartRepositoryInterface $chartRepository
    )
    {
        $this->chartRepository = $chartRepository;
    }

    /**
     * get common charts
     * @return \Illuminate\Http\JsonResponse
     */
    public function getChartsData()
    {
        try {

            $data = $this->chartRepository->getChartMemberCompanies();

            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());

            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $e->getMessage());
        }
    }

    /**
     * get common charts
     * @return \Illuminate\Http\JsonResponse
     */
    public function getChartsDataMemberInOut(Request $request)
    {
        try {
            $memberJoinOut = $this->chartRepository->getMemberInOut($request->option);

            return $this->sendSuccess($memberJoinOut);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());

            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $e->getMessage());
        }
    }
}
