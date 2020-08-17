<?php

declare(strict_types=1);

namespace App\Exceptions;

use App\Enums\ErrorType;

class NoAccountException extends BaseException
{
    public function toResponse($request)
    {
        $this->setErrorCode(ErrorType::CODE_4040);
        $this->setErrorMessage(__('errors.MSG_4040'));
        $this->setStatusCode(ErrorType::STATUS_4040);

        return parent::toResponse($request);
    }
}
