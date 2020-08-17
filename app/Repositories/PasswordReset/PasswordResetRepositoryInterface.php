<?php

declare(strict_types=1);

namespace App\Repositories\PasswordReset;

use App\Repositories\BaseRepositoryInterface;

interface PasswordResetRepositoryInterface extends BaseRepositoryInterface
{
    public function getPasswordResetByToken($token);

    public function getPasswordResetByEmail($email);
}
