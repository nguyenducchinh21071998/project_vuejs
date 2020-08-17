<?php

declare(strict_types=1);

namespace App\Exceptions;

class FormValidationException extends BaseException
{
    public function toResponse($request)
    {
        return parent::toResponse($request);
    }
}
