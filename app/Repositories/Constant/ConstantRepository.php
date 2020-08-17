<?php

declare(strict_types=1);

namespace App\Repositories\Constant;

use App\Models\Constant;
use App\Repositories\BaseRepository;
use App\Enums\Constant as DefaultConstant;

class ConstantRepository extends BaseRepository implements ConstantRepositoryInterface
{
    /**
     * Get model
     * @return string
     */
    public function getModel()
    {
        return Constant::class;
    }

    /**
     * Get by type
     * @param $type
     * @return array
     */

    public function getByType($type)
    {
        $constants = $this->model::where('type', $type)->get();
        $rs = [];
        foreach ($constants as $constant) {
            $rs[$constant->code] = $constant->name;
        }
        return $rs;
    }
}
