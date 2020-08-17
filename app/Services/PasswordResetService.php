<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\PasswordReset\PasswordResetRepositoryInterface;
use Illuminate\Support\Str;
use Carbon\Carbon;

class PasswordResetService extends BaseService
{
    protected $passwordResetRepository;

    public function __construct(
        PasswordResetRepositoryInterface $passwordResetRepository
    ) {
        $this->passwordResetRepository = $passwordResetRepository;
    }

    public function getPasswordResetByToken($token)
    {
        return $this->passwordResetRepository->getPasswordResetByToken($token);
    }

    public function getPasswordResetByEmail($email)
    {
        return $this->passwordResetRepository->getPasswordResetByEmail($email);
    }

    public function create($userType, $email, $token)
    {
        $data = [
            'user_type' => $userType,
            'email' => $email,
            'token' => $token
        ];

        return $this->passwordResetRepository->create($data);
    }

    public function generateResetToken()
    {
        return Str::random(40);
    }

    public function isResetTokenExpire($timeCheck, $configTokenExpire)
    {
        $configTokenExpire = $configTokenExpire * 60;
        $isExpire = Carbon::parse($timeCheck)->addSeconds($configTokenExpire)->isPast();

        return $isExpire;
    }

    public function delete($id)
    {
        return $this->passwordResetRepository->delete($id);
    }
}
