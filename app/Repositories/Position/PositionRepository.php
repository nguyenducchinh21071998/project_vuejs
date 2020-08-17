<?php

declare(strict_types=1);

namespace App\Repositories\Position;

use App\Models\Position;
use App\Repositories\BaseRepository;

class PositionRepository extends BaseRepository implements PositionRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Position::class;
    }
}
