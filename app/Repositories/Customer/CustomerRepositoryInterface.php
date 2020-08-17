<?php

declare(strict_types=1);

namespace App\Repositories\Customer;

use App\Repositories\BaseRepositoryInterface;

interface CustomerRepositoryInterface extends BaseRepositoryInterface
{
    public function getAll($request);
    
    public function detailCustomer($id);

    public function editCustomer($id);
    
    public function updateCustomer($data);
    
    public function createCustomer($data);
    
    public function deleteCustomer($id);
}
