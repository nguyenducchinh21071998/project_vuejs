<?php

declare(strict_types=1);

namespace App\Repositories\Account;

use App\Enums\DBConstant;
use App\Models\Account;
use App\Repositories\BaseRepository;

class AccountRepository extends BaseRepository implements AccountRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Account::class;
    }
}
