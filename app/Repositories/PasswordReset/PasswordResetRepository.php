<?php

declare(strict_types=1);

namespace App\Repositories\PasswordReset;

use App\Repositories\BaseRepository;

class PasswordResetRepository extends BaseRepository implements PasswordResetRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\PasswordReset::class;
    }

    public function getPasswordResetByToken($token)
    {
        $passwordReset = $this->model::where('token', $token)->first();

        return $passwordReset;
    }

    public function getPasswordResetByEmail($email)
    {
        $passwordReset = $this->model::where('email', $email)->first();

        return $passwordReset;
    }
}
