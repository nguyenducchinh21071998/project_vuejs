<?php

declare(strict_types=1);

namespace App\Repositories\User;

use App\Enums\DBConstant;
use App\Repositories\BaseRepository;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return \App\Models\User::class;
    }

    public function receive($id)
    {
        $data = $this->model::select(
            'users.user_id',
            'users.email',
            'users.qr_i_token',
            'users.qr_g_token',
            'users.is_authenticated'
        )->with(['businessCards' => function ($qr) {
            $qr->with(['department' => function ($q) {
                $q->select('department_id', 'name');
            }])->with(['position' => function ($q) {
                $q->select('position_id', 'name');
            }])->with(['company' => function ($q) {
                $q->select('company_id', 'name');
            }])->select(
                'user_id',
                'department_id',
                'position_id',
                'company_id',
                'last_name_kanji',
                'first_name_kanji',
                'last_name_kana',
                'first_name_kana'
            );
        }])->where('users.user_id', $id)->first();

        return $data;
    }

    public function updateToken($params, $id)
    {
        $data = $this->update($id, $params);

        return [
            "qr_i_token" => $data["qr_i_token"],
            "qr_g_token" => $data["qr_g_token"]
        ];
    }

    public function search($filters)
    {
        $data = $this->model::select(
            'users.user_id',
            'users.email',
            'users.qr_i_token',
            'users.qr_g_token',
            'business_cards.business_card_id'
        )->leftJoin('business_cards', function ($join) {
            $join->on('business_cards.user_id', '=', 'users.user_id')
                ->where('business_cards.is_archived', '=', DBConstant::NOT_ARCHIVED_FLAG);
        });

        foreach ($filters as $key => $where) {
            if (!$where['value']) {
                continue;
            }
            if ($where['where'] == 'like') {
                $data = $data->where($key, 'like', $where['value'] . '%');
            } elseif ($where['where'] == '=') {
                $data = $data->where($key, '=', $where['value']);
            }
        }

        return $data;
    }

    public function getUserByEmail($email)
    {
        $user = $this->model::where('email', $email)->first();

        return $user;
    }

    public function getUserById($userId)
    {
        $user = $this->model::where('user_id', $userId)->first();

        return $user;
    }

    public function getUserByQRToken($tokenType, $token)
    {
        $user = $this->model::where($tokenType, $token)->first();

        return $user;
    }
}
