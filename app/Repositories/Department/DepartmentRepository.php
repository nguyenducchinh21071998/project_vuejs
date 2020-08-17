<?php

declare(strict_types=1);

namespace App\Repositories\Department;

use App\Models\Department;
use App\Repositories\BaseRepository;

class DepartmentRepository extends BaseRepository implements DepartmentRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Department::class;
    }
}
