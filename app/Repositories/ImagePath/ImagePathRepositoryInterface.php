<?php

declare(strict_types=1);

namespace App\Repositories\ImagePath;

use App\Repositories\BaseRepositoryInterface;

interface ImagePathRepositoryInterface extends BaseRepositoryInterface
{
    public function checkImageExisted($object, $objectId);
}
