<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\Inquiry\InquiryRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use App\Enums\DBConstant;

class InquiryService extends BaseService
{
    protected $inquiryRepository;
    
    public function __construct(InquiryRepositoryInterface $inquiryRepository)
    {
        $this->inquiryRepository = $inquiryRepository;
    }

    /**
     * Get business card list
     * @author huydn
     * @return array
     */
    public function create($request)
    {
        $userId = null;
        if (!empty($this->getGuard()->user())) {
            $userId = $this->getGuard()->user()->company_admin_user_id;
        } else if (!empty($this->getGuard('user')->user())) {
            $userId = $this->getGuard('user')->user()->user_id;
        }
        $request['user_id'] = $userId;

        $inquiry = $this->inquiryRepository->create($request);

        return $inquiry;
    }

    public function getType()
    {
        $types = [];
        $types[0]['name'] = trans('labels.inquiry_request');
        $types[0]['value'] = DBConstant::INQUIRY_TYPE_REQUESTS;
        $types[1]['name'] = trans('labels.inquiry_how_to_use');
        $types[1]['value'] = DBConstant::INQUIRY_TYPE_HOW_TO_USE;
        $types[2]['name'] = trans('labels.inquiry_report_bug');
        $types[2]['value'] = DBConstant::INQUIRY_TYPE_REPORT_BUG;
        $types[3]['name'] = trans('labels.inquiry_other');
        $types[3]['value'] = DBConstant::INQUIRY_TYPE_OTHER;

        return $types;
    }
}
