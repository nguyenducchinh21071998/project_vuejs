<?php

declare(strict_types=1);

namespace App\Repositories\Chart;

use App\Repositories\BaseRepositoryInterface;

interface ChartRepositoryInterface extends BaseRepositoryInterface
{
    public function getChartMemberCompanies();

    public function getMemberInOut($option);
}
