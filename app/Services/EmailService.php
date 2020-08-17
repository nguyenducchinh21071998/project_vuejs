<?php

declare(strict_types=1);

namespace App\Services;

use App\Enums\DBConstant;
use App\Mail\MailContent;
use App\Models\EmailContent;
use App\Models\NotificationSetting;
use Illuminate\Support\Facades\Mail;

class EmailService extends BaseService
{
    /**
     * Send email to a user.
     *
     * @param string              $emailAddress
     * @param EmailContent        $emailContent
     * @param NotificationSetting $notificationSetting
     */
    public function sendEmailToUser(string $emailAddress, EmailContent $emailContent, NotificationSetting $notificationSetting): void
    {
        if ($emailAddress && $emailContent && $notificationSetting->email_notif == DBConstant::NOTIFICATION_SETTING_ON) {
            Mail::to($emailAddress)->send(new MailContent($emailContent));

            // Write log
            $context = [
                'user_id' => $notificationSetting->user_id,
                'email' => $emailAddress,
                'email_content_id' => $emailContent->email_content_id,
            ];
            $this->logInfo('Sent email.', $context);
        }
    }
}
