<?php

declare(strict_types=1);

namespace App\Exceptions;

use App\Enums\ErrorType;

class SettlementException extends BaseException
{
    public function toResponse($request)
    {
        $this->setErrorCode(ErrorType::CODE_5006);
        $this->setErrorMessage(__('errors.MSG_5006'));
        $this->setStatusCode(ErrorType::STATUS_5006);

        return parent::toResponse($request);
    }
}
