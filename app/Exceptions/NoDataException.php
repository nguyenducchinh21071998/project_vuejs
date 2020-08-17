<?php

declare(strict_types=1);

namespace App\Exceptions;

use App\Enums\ErrorType;

class NoDataException extends BaseException
{
    public function toResponse($request)
    {
        $this->setErrorCode(ErrorType::CODE_4041);
        $this->setErrorMessage(__('errors.MSG_4041'));
        $this->setStatusCode(ErrorType::STATUS_4041);

        return parent::toResponse($request);
    }
}
