<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
use App\Enums\DBConstant;
use App\Enums\ErrorType;
use App\Exceptions\BaseException;

class CheckUserIsAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::guard('user')->check()) {
            $user = Auth::guard('user')->user();
        } else {
            return $next($request);
        }

        if ($user->is_authenticated == DBConstant::AUTH_AUTHENTICATED) {
            return $next($request);
        }

        throw new BaseException(ErrorType::CODE_4040, trans('errors.MSG_4040'), ErrorType::STATUS_4040);
    }
}
