<?php

namespace App\Mail\User;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegisterConfirmEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $emailContent;
    protected $tokenExpireTime;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($arr, $tokenExpireTime)
    {
        $this->emailContent = $arr;
        $this->tokenExpireTime = $tokenExpireTime;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $url = $this->emailContent['url'];

        return $this->view('user.emails.register_account')
            ->subject(trans('register.title'))
            ->with([
                'url' => $url,
                'tokenExpireTime' => $this->tokenExpireTime,
            ]);
    }
}
