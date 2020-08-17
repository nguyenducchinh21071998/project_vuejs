<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\User\UserRepositoryInterface;
use App\Enums\DBConstant;
use Carbon\Carbon;

class UserService extends BaseService
{
    protected $userRepository;

    public function __construct(
        UserRepositoryInterface $userRepository
    )
    {
        $this->userRepository = $userRepository;
    }

    public function searchPagination($params, $request)
    {
        $limit = $params['limit'];
        $currentPage = $params['currentPage'];
        $sortBy = $params['sortBy'];
        $sortType = $params['sortType'];
        $filters = [
            'users.user_id' => [
                'where' => '=',
                'value' => null,
            ],
            'users.email' => [
                'where' => 'like',
                'value' => null,
            ],
            'users.qr_i_token' => [
                'where' => 'like',
                'value' => null,
            ],
            'users.qr_g_token' => [
                'where' => 'like',
                'value' => null,
            ],
            'business_cards.business_card_id' => [
                'where' => '=',
                'value' => null,
            ],
        ];
        $filters['users.user_id']['value'] = $request['user_id'] ?? '';
        $filters['users.email']['value'] = $request['email'] ?? '';
        $filters['users.qr_i_token']['value'] = $request['qr_i_token'] ?? '';
        $filters['users.qr_g_token']['value'] = $request['qr_g_token'] ?? '';
        $filters['business_cards.business_card_id']['value'] = $request['business_card_id'] ?? '';

        $data = $this->userRepository->search($filters);
        $total = $data->get()->count();

        $data = $data->orderBy($sortBy, $sortType);
        $data = $data->limit($limit)->offset(($currentPage - 1) * $limit);

        return [
            'users' => $data->get(),
            'pagination' => [
                'total' => $total,
                'current_page' => $currentPage,
                'limit' => $limit,
            ],
        ];
    }

    public function create($data)
    {
        return $this->userRepository->create($data);
    }

    public function getUserByEmail($email)
    {
        return $this->userRepository->getUserByEmail($email);
    }

    public function getUserById($userId)
    {
        return $this->userRepository->getUserById($userId);
    }

    public function updatePassword($userId, $password)
    {
        $data = [
            'password' => bcrypt($password)
        ];

        return $this->userRepository->update($userId, $data);
    }

    public function updateIsAuthenticated($userId)
    {
        return $this->userRepository->update($userId, ['is_authenticated' => DBConstant::AUTH_AUTHENTICATED]);
    }

    public function delete($id)
    {
        return $this->userRepository->delete($id);
    }

    public function updateEmail($userId, $email)
    {
        $data = [
            'email' => $email
        ];

        return $this->userRepository->update($userId, $data);

    }

    public function isConfirmEmailExpire($timeCheck, $configEmailExpire)
    {
        $configEmailExpire = config('auth.email_auth_timeout');
        $isExpire = Carbon::parse($timeCheck)->addSeconds((int)$configEmailExpire)->isPast();

        return $isExpire;
    }
}
