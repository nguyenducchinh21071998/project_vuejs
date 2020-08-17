<?php

declare(strict_types=1);

namespace App\Services;

use App\Enums\ErrorType;
use App\Enums\Flag;
use App\Exceptions\AuthenticationException;
use App\Models\RefreshToken;
use Carbon\Carbon;

class RefreshTokenService extends BaseService
{
    /**
     * Generate a refresh token.
     *
     * @param int $userId
     * @return string
     */
    public function generateRefreshToken(int $userId): string
    {
        // Generate a refresh token and encrypt it
        $refreshToken = str_random(40);
        $encryptedRefreshToken = hash('sha256', $refreshToken);

        // Store the encrypted refresh token in database
        $refreshTokenEntity = new RefreshToken();
        $refreshTokenEntity->user_id = $userId;
        $refreshTokenEntity->encrypted_refresh_token = $encryptedRefreshToken;
        $refreshTokenEntity->expires_in = (new Carbon())->addMinute(env('JWT_REFRESH_TTL'));
        $refreshTokenEntity->is_blacklisted = Flag::FALSE;
        $refreshTokenEntity->save();

        return $refreshToken;
    }

    /**
     * Delete the currently registered refresh token.
     *
     * @param int    $userId
     * @param string $refreshToken
     */
    public function checkValidRefreshToken(int $userId, string $refreshToken): void
    {
        // Encrypt refresh token
        $encryptedRefreshToken = hash('sha256', $refreshToken);

        // Check if a valid refresh token exists
        $refreshTokenEntity = RefreshToken::where('user_id', $userId)
            ->where('encrypted_refresh_token', $encryptedRefreshToken)
            ->where('expires_in', '>=', Carbon::now())
            ->where('is_blacklisted', Flag::FALSE)
            ->first();

        if ($refreshTokenEntity) {
            // Delete a record
            $refreshTokenEntity->delete();
        } else {
            throw new AuthenticationException(ErrorType::CODE_4012, __('errors.MSG_4012'), ErrorType::STATUS_4012);
        }
    }
}
