<?php

declare(strict_types=1);

namespace App\Repositories\Company;

use App\Models\Company;
use App\Models\Department;
use App\Repositories\BaseRepository;

class CompanyRepository extends BaseRepository implements CompanyRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Company::class;
    }

    function getRecursive()
    {
        // TODO: Implement getRecursive() method.
        $companies = $this->model::all();
        $roots = [];

        foreach ($companies as $company) {
            if (!$company['parent_code']) {
                $roots[$company['code']] = [
                    'name' => $company['name'],
                    'childs' => []
                ];
            }
        }
        $lv1Code = [];
        foreach ($companies as $company) {
            if ($company['parent_code'] && isset($roots[$company['code']])) {
                $roots[$company['code']]['childs'][$company['code']] = [
                    'name' => $company['name'],
                    'childs' => []
                ];
                $lv1Code[] = $company['code'];
            }
        }

        return $roots;
    }
}
