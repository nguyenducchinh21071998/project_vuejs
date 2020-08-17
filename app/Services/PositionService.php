<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\Position\JobTitleRepositoryInterface;
use App\Repositories\BusinessCard\BusinessCardRepositoryInterface;
use Exception;
use Illuminate\Support\Facades\Auth;

class PositionService extends BaseService
{
    protected $positionRepository, $businessCardRepository;

    public function __construct(
        JobTitleRepositoryInterface $positionRepository,
        BusinessCardRepositoryInterface $businessCardRepository
    ) {
        $this->positionRepository = $positionRepository;
        $this->businessCardRepository = $businessCardRepository;
    }

    public function getAllByCompanyId($companyId)
    {
        $positions = $this->positionRepository->getAllByCompanyId($companyId);

        return $positions;
    }

    /**
     * Create position
     * @param $formData
     */
    public function createPosition($formData)
    {
        try {
            $formData['company_id'] = Auth::user()->company_id;
            $position = $this->positionRepository->createPosition($formData);

            return $position;
        } catch (Exception $exception) {
            throw $exception;
        }
    }

    /**
     * Delete position
     * @param $id
     * */
    public function delete($id)
    {
        try {
            $this->businessCardRepository->unsetPosition($id);
            $position = $this->positionRepository->deletePosition($id);

            return $position;
        } catch (Exception $exception) {
            throw $exception;
        }
    }

    public function getAllPosition()
    {
        $businessCards = $this->getGuard('user')->user()->businessCards;
        if (!$businessCards) {
            return null;
        }
        $companyId = $this->getGuard('user')->user()->businessCards[0]->company_id;
        $positions = $this->positionRepository->getAllPositionByCompanyId($companyId);

        return $positions;
    }

    public function getPositionName($id)
    {
        $position = $this->positionRepository->getPositionName($id);

        return $position;
    }

    public function getCompanyIdByPosition($id)
    {
        $companyId = $this->positionRepository->find($id)->company_id;

        return $companyId;
    }
}
