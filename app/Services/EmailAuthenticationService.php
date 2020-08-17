<?php
declare(strict_types=1);

namespace App\Services;

use App\Enums\DBConstant;
use App\Repositories\EmailAuthentication\EmailAuthenticationRepositoryInterface;
use Carbon\Carbon;

class EmailAuthenticationService extends BaseService
{
    protected $emailAuthenticationRepository;

    public function __construct(EmailAuthenticationRepositoryInterface $emailAuthenticationRepository)
    {
        $this->emailAuthenticationRepository = $emailAuthenticationRepository;
    }

    public function create($data)
    {
        return $this->emailAuthenticationRepository->create($data);
    }

    public function getEmailAuthByToken($token)
    {
        return $this->emailAuthenticationRepository->getEmailAuthByToken($token);
    }

    public function getEmailAuthByRequest($email)
    {
        return $this->emailAuthenticationRepository->getEmailAuthByRequest($email);
    }

    public function delete($id)
    {
        return $this->emailAuthenticationRepository->delete($id);
    }

    public function isConfirmTokenExpire($timeCheck, $configTokenExpire)
    {
        $configTokenExpire = config('auth.email_auth_timeout');
        $isExpire = Carbon::parse($timeCheck)->addSeconds((int)$configTokenExpire)->isPast();

        return $isExpire;
    }
}
