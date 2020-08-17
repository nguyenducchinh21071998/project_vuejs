<?php

namespace App\Http\Controllers\Api\Portal\Auth;

use App\Enums\ErrorType;
use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\Portal\Auth\ResetPasswordRequest;
use App\Services\PasswordResetService;

class ResetPasswordController extends ApiController
{
    protected $passwordResetService;

    public function __construct(
        PasswordResetService $passwordResetService
    ) {
        $this->passwordResetService = $passwordResetService;
    }

    /**
     * Reset password
     *
     * @param ResetPasswordRequest $request
     * @return void
     */
    public function reset(ResetPasswordRequest $request)
    {
        // TODO
        /*$token = $request->token;
        $passwordReset = $this->passwordResetService->getPasswordResetByToken($token);
        if (!$passwordReset) {
            return $this->sendError(ErrorType::CODE_4012, ErrorType::STATUS_4012, trans('passwords.token'));
        }

        $tokenExpireTime = config('auth.passwords.portals.expire');
        $isResetTokenExpire = $this->passwordResetService->isResetTokenExpire($passwordReset->created_at, $tokenExpireTime);
        if ($isResetTokenExpire) {
            return $this->sendError(ErrorType::CODE_4011, ErrorType::STATUS_4011, trans('passwords.token'));
        }

        $user = $this->managementPortalUserService->getUserByEmail($passwordReset->email);
        if (!$user) {
            return $this->sendError(ErrorType::CODE_4040, ErrorType::STATUS_4040, trans('passwords.user'));
        }

        $user = $this->managementPortalUserService->updatePassword($user->management_portal_user_id, $request->password);
        $passwordReset = $this->passwordResetService->delete($passwordReset->id);

        return $this->sendSuccess(null, trans('passwords.reset'));*/
    }
}
