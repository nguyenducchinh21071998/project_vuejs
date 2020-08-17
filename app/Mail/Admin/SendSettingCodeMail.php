<?php

namespace App\Mail\Admin;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendSettingCodeMail extends Mailable
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
        $title = $this->emailContent['title'];
        $body = $this->emailContent['body'];
        $lastNameKanji = $this->emailContent['last_name_kanji'];
        $firstNameKanji = $this->emailContent['first_name_kanji'];

        return $this->view('admin.emails.send_setting_code')
            ->subject($title)
            ->with([
                'title' => $title,
                'body' => $body,
                'lastNameKanji' => $lastNameKanji,
                'firstNameKanji' => $firstNameKanji,
            ]);
    }
}
