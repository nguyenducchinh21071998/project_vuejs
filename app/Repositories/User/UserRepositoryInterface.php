<?php

declare(strict_types=1);

namespace App\Repositories\User;

use App\Repositories\BaseRepositoryInterface;

interface UserRepositoryInterface extends BaseRepositoryInterface
{
    public function updateToken($params, $id);

    public function receive($id);

    public function search($filters);

    public function getUserByEmail($email);

    public function getUserByQRToken($tokenType, $token);
}
