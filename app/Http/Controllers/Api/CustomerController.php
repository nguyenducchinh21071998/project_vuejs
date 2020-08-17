<?php

namespace App\Http\Controllers\Api;

use App\Enums\DBConstant;
use App\Repositories\Customer\CustomerRepositoryInterface;
use Illuminate\Http\Request;
use App\Enums\ErrorType;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\CustomerCreateRequest;
use App\Http\Requests\CustomerUpdateRequest;
use App\Models\Employee;

class CustomerController extends ApiController
{
    private $customerRepository;

    public function __construct(
        CustomerRepositoryInterface $customerRepository
    )
    {
        $this->customerRepository = $customerRepository;
    }

    /**
     * Get list customer
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function list(Request $request)
    {
        $data = $this->customerRepository->getAll($request);

        return $this->sendSuccess($data);
    }

    /**
     * Show Customer
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $data = $this->customerRepository->detailCustomer($id);

            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000);
        }
    }

    /**
     * Edit Customer
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit($id)
    {
        try {
            $data = $this->customerRepository->editCustomer($id);

            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());

            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $data['message']);
        }
    }
    
    /**
     * Update Customer
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CustomerCreateRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = $this->customerRepository->updateCustomer($request->all());
            DB::commit();
            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            DB::rollBack();
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $data['message']);
        }
    }
        
    /**
     * Create Customer
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CustomerCreateRequest $request)
    {
        DB::beginTransaction();
        try {
            $data = $this->customerRepository->createCustomer($request->all());
            DB::commit();
            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            DB::rollBack();
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $data['message']);
        }
    }
            
    /**
     * Delete Customer
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id) 
    {
        try {
            $data = $this->customerRepository->deleteCustomer($id);
            return $this->sendSuccess($data);
        } catch (\Exception $e) {
            return $this->sendError(ErrorType::CODE_5000, ErrorType::STATUS_5000, $data['message']);
        }
    }

    /**
     * Get employee all
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    // public function getEmployeeAll(Request $request) {
    //     $employees = Employee::select('id', 'employees.name as text')->get();
    //     $data = [
    //         'employees' => $employees
    //     ];
    //     return $this->sendSuccess($data);
    // }
}
