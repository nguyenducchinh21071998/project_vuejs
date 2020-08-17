<?php

declare(strict_types=1);

namespace App\Repositories\Company;

use App\Repositories\BaseRepositoryInterface;

interface CompanyRepositoryInterface extends BaseRepositoryInterface
{
    public function getRecursive();
}
