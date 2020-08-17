<?php

declare(strict_types=1);

namespace App\Repositories\EmailAuthentication;

use App\Repositories\BaseRepository;

class EmailAuthenticationRepository extends BaseRepository implements EmailAuthenticationRepositoryInterface
{
    public function getModel()
    {
        return \App\Models\EmailAuthentication::class;
    }

    public function getEmailAuthByToken($token)
    {
        $emailAuth  = $this->model::where('token', $token)->first();

        return $emailAuth;
    }

    public function getEmailAuthByRequest($email)
    {
        $emailAuth = $this->model::where('email', $email)->first();

        return $emailAuth;
    }
}
