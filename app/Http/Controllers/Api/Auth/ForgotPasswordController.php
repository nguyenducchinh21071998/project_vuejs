<?php

namespace App\Http\Controllers\Api\Portal\Auth;

use App\Enums\ErrorType;
use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\Portal\Auth\ForgotPasswordRequest;
use App\Services\PasswordResetService;
use Exception;

class ForgotPasswordController extends ApiController
{
    protected $passwordResetService;

    public function __construct(
        PasswordResetService $passwordResetService
    ) {
        $this->passwordResetService = $passwordResetService;
    }

    public function sendResetLinkEmail(ForgotPasswordRequest $request)
    {
        // TODO
        /*$user = $this->managementPortalUserService->getUserByEmail($request->email);
            if (!$user) {
                return $this->sendError(ErrorType::CODE_4040, ErrorType::STATUS_4040, trans('passwords.user'));
            }

            $passwordResetOld = $this->passwordResetService->getPasswordResetByEmail($user->email);

            if ($passwordResetOld) {
                $this->passwordResetService->delete($passwordResetOld->id);
            }

            $resetToken = $this->passwordResetService->generateResetToken();
            $userType = DBConstant::USER_TYPE_MANAGEMENT_PORTAL_USER;
            $passwordReset = $this->passwordResetService->create($userType, $user->email, $resetToken);

            // send mail
            $this->portalAuthService->sendMailResetPassword($user, $resetToken);

            return $this->sendSuccess(null, trans('passwords.sent'));*/
    }
}
