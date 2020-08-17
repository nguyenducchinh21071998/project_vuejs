<?php

declare(strict_types=1);

namespace App\Exceptions;

class AuthenticationException extends BaseException
{
    public function toResponse($request)
    {
        return parent::toResponse($request);
    }
}
