<?php

namespace App\Mail\User;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ChangeMail extends Mailable
{
    use Queueable, SerializesModels;

    public $emailContent;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($arr)
    {
        $this->emailContent = $arr;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $url = $this->emailContent['url'];

        return $this->view('user.emails.change_email')
            ->subject(trans('auth.change_email_subject'))
            ->with([
                'url' => $url,
            ]);
    }
}
