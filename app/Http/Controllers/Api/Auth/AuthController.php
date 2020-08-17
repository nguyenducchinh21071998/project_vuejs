<?php

namespace App\Http\Controllers\Api\Portal\Auth;

use App\Http\Controllers\Api\ApiController;
use App\Http\Requests\Common\LoginRequest;
use App\Enums\ErrorType;
use Exception;

class AuthController extends ApiController
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    public function login(LoginRequest $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (!$token = $this->getGuard('user')->attempt($credentials)) {
            return $this->sendError(ErrorType::CODE_4010, ErrorType::STATUS_4010, trans('errors.MSG_4010'));
        }

        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
        $data = [
            'token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => $this->getGuard()->factory()->getTTL() * 60
        ];

        return $this->sendSuccess($data, trans('response.success'));
    }

    public function logout()
    {
        $this->getGuard('user')->logout();

        return $this->sendSuccess(null, trans('response.success'));
    }

    public function getAuthenticatedUser()
    {
        $data = $this->getGuard('user')->user();

        return $this->sendSuccess($data, trans('response.success'));
    }
}
