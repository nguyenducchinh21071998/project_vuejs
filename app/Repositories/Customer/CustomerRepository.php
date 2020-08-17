<?php

declare(strict_types=1);

namespace App\Repositories\Customer;

use App\Enums\Constant;
use App\Enums\DBConstant;
use App\Models\Account;
use App\Models\Customer;
use App\Models\Employee;
use App\Models\CustomerMemberResponsibility;
use App\Repositories\BaseRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Enums\ErrorType;

class CustomerRepository extends BaseRepository implements CustomerRepositoryInterface
{
    /**
     * Get model
     * @return string
     */
    public function getModel()
    {
        return Customer::class;
    }

    /**
     * Get all customer
     * @param $request
     * @param $limit
     * @param $page
     * @return array
     */
    public function getAll($request)
    {
        try {
            $perPage = $request->input('per_page', Constant::DEFAULT_LIMIT_RESPONSE);
            $sortColumn = $request->input('sort_column', Constant::DEFAULT_SORT_COLUMN_RESPONSE);
            $sortBy = $request->input('sort_by', Constant::DEFAULT_SORT_BY_RESPONSE);
            $customers = $this->model->orderBy($sortColumn, $sortBy);
            $customers = $customers->paginate($perPage);
            $data = [
                'customers' => $customers,
            ];

            return $data;
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Create customer
     * @param $request
     * @return array
     */
    public function createCustomer($data)
    {
        DB::beginTransaction();
        try {
            $createCustomer = $this->model->create($data);
            $array = [];
            foreach ($data['responsibilityCustomer'] as $key => $value) {
                $array[] = [
                    'type'          => DBConstant::RESPONSIBILITY_CUSTOMER,
                    'customer_id'   => $createCustomer['id'],
                    'name' => $value['name'],
                    'position'      => $value['employee_position'],
                ];
            }
            foreach ($data['responsibilityFabbiJapan'] as $key => $value) {
                $array[] = [
                    'type'          => DBConstant::RESPONSIBILITY_FABBI_JAPAN,
                    'customer_id'   => $createCustomer['id'],
                    'position'      => null,
                    'name' => $value['name']
                ];
            }
            foreach ($data['responsibilityFabbi'] as $key => $value) {
                $array[] = [
                    'type'          => DBConstant::RESPONSIBILITY_FABBI,
                    'customer_id'   => $createCustomer['id'],
                    'position'      => null,
                    'name' => $value['name']
                ];
            }
            CustomerMemberResponsibility::insert($array);
            DB::commit();
            return $createCustomer;
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            DB::rollBack();
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Deatil customer
     * @param $request
     * @return array
     */
    public function detailCustomer($id)
    {
        return $this->model->with('customerResponsibilities')->find($id);
    }

    /**
     * Edit customer
     * @param $request
     * @return array
     */
    public function editCustomer($id)
    {
        return $this->model->with('customerResponsibilities')->find($id);
    }

    /**
     * Update customer
     * @param $request
     * @return array
     */
    public function updateCustomer($data)
    {
        DB::beginTransaction();
        try {
            CustomerMemberResponsibility::where('customer_id', $data['id'])->delete();
            $array = [];
            foreach ($data['responsibilityCustomer'] as $key => $value) {
                $array[] = [
                    'type'          => DBConstant::RESPONSIBILITY_CUSTOMER,
                    'customer_id'   => $data['id'],
                    'name' => $value['name'],
                    'position'      => $value['employee_position'],
                ];
            }
            foreach ($data['responsibilityFabbiJapan'] as $key => $value) {
                $array[] = [
                    'type'          => DBConstant::RESPONSIBILITY_FABBI_JAPAN,
                    'customer_id'   => $data['id'],
                    'position'      => null,
                    'name' => $value['name'],
                ];
            }
            foreach ($data['responsibilityFabbi'] as $key => $value) {
                $array[] = [
                    'type'        => DBConstant::RESPONSIBILITY_FABBI,
                    'customer_id' => $data['id'],
                    'position'    => null,
                    'name' => $value['name'],
                ];
            }
            CustomerMemberResponsibility::insert($array);
            unset($data['responsibilityCustomer'], $data['responsibilityFabbiJapan'], $data['responsibilityFabbi'], $data['customer_responsibilities']);
            $customer = $this->model->where('id', $data['id'])->update($data);
            DB::commit();
            return $customer;
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            DB::rollBack();
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    /**
     * Delete customer
     * @param $request
     * @return array
     */
    public function deleteCustomer($id)
    {
        DB::beginTransaction();
        try {
            CustomerMemberResponsibility::where('customer_id', $id)->delete();
            $customerDetele = Customer::find($id)->delete();
            DB::commit();
            return $customerDetele;
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            DB::rollBack();
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
