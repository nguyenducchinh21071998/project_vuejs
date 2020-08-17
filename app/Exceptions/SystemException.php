<?php

declare(strict_types=1);

namespace App\Exceptions;

use App\Enums\ErrorType;

class SystemException extends BaseException
{
    public function toResponse($request)
    {
        $this->setErrorCode(ErrorType::CODE_5000);
        $this->setErrorMessage(__('errors.MSG_5000'));
        $this->setStatusCode(ErrorType::STATUS_5000);

        return parent::toResponse($request);
    }
}
