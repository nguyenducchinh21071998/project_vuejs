<?php

declare(strict_types=1);

namespace App\Repositories\Employee;

use App\Repositories\BaseRepositoryInterface;

interface EmployeeRepositoryInterface extends BaseRepositoryInterface
{
    public function store($request);

    public function getAll($request);

    public function destroy($ids);

    public function showEmployee($id);

    public function findEmployee($id);

    public function takeResignation($id, $data);
}
