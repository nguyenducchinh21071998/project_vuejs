<?php

declare(strict_types=1);

namespace App\Repositories\EmailAuthentication;

use App\Repositories\BaseRepositoryInterface;

interface EmailAuthenticationRepositoryInterface extends BaseRepositoryInterface
{
    public function getEmailAuthByToken($token);
}
