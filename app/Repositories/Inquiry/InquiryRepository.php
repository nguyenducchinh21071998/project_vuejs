<?php

declare(strict_types=1);

namespace App\Repositories\Inquiry;

use App\Repositories\BaseRepository;

class InquiryRepository extends BaseRepository implements InquiryRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\Inquiry::class;
    }
}
