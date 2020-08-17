<?php

declare(strict_types=1);

namespace App\Repositories\JobTitle;

use App\Models\JobTitle;
use App\Repositories\BaseRepository;

class JobTitleRepository extends BaseRepository implements JobTitleRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return JobTitle::class;
    }
}
