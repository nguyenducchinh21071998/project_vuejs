<?php

declare(strict_types=1);

namespace App\Exceptions;

use App\Enums\ErrorType;

class DBException extends BaseException
{
    public function toResponse($request)
    {
        $this->setErrorCode(ErrorType::CODE_5002);
        $this->setErrorMessage(__('errors.MSG_5002'));
        $this->setStatusCode(ErrorType::STATUS_5002);

        return parent::toResponse($request);
    }
}
