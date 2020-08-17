<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\FacebookFriend;
use App\Models\User;
use Carbon\Carbon;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;

class OAuthService extends BaseService
{
    protected $userCreatorService;

    protected $firebaseService;

    protected $guzzleHttpClient;

    public function __construct(UserCreatorService $userCreatorService, FirebaseService $firebaseService)
    {
        $this->userCreatorService = $userCreatorService;
        $this->firebaseService = $firebaseService;

        // Generate Guzzle http client
        $this->guzzleHttpClient = new Client();
    }

    /**
     * Authenticate via Facebook.
     *
     * @param string $fbToken
     * @return null|object
     */
    public function authenticateViaFacebook(string $fbToken)
    {
        try {
            $resFacebookJson = $this->guzzleHttpClient->get("https://graph.facebook.com/v3.2/me?fields=id,email,name,birthday&access_token=${fbToken}");
            $resFacebook = json_decode($resFacebookJson->getBody()->getContents(), true);

            // Check if Facebook account exists
            if (!(count($resFacebook) && isset($resFacebook['id']))) {
                return;
            }

            // Find the user with Facebook ID
            $user = User::where('facebook_id', $resFacebook['id'])->first();

            if (!empty($user)) {
                return $user;
            }

            // Create a new user
            DB::beginTransaction();

            $newUser = new User();
            $newUser->facebook_id = $resFacebook['id'];
            if (isset($resFacebook['email'])) {
                $newUser->email = $resFacebook['email'];
            }
            if (isset($resFacebook['name'])) {
                $newUser->name = $resFacebook['name'];
            }
            if (isset($resFacebook['birthday'])) {
                $newUser->birthday = Carbon::createFromFormat('m/d/Y', $resFacebook['birthday'])->format('Y-m-d');
            }
            $newUser->last_login = Carbon::now();
            $newUser->save();

            // Register a few settings after a user is created
            $this->userCreatorService->afterCreate($newUser);

            // Get Facebook friends and register them
            $resFriendsJson = $this->client->get("https://graph.facebook.com/v3.2/me/friends?fields=id&access_token=${fbToken}");
            $resFriends = json_decode($resFriendsJson->getBody()->getContents(), true);

            if (count($resFriends['data'] && isset($resFriends['data']))) {
                foreach ($resFriends['data'] as $friend) {
                    $facebookFriend = FacebookFriend::firstOrNew([
                        'user_id' => $newUser->user_id,
                        'facebook_id' => $friend['id'],
                    ]);
                    $facebookFriend->save();
                }
            }

            DB::commit();

            return $newUser;
        } catch (\Exception $e) {
            DB::rollBack();

            return;
        }
    }
}
