<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class BaseController extends Controller
{
    /**
     * Write debug log.
     *
     * @param $message
     */
    protected function logDebug($message): void
    {
        // Log context
        $context = $this->getContext();

        Log::debug($message, $context);
    }

    /**
     * Write info log.
     *
     * @param $message
     */
    protected function logInfo($message): void
    {
        // Log context
        $context = $this->getContext();

        Log::info($message, $context);
    }

    /**
     * Write warning log.
     *
     * @param $message
     */
    protected function logWarning($message): void
    {
        // Log context
        $context = $this->getContext();

        Log::warning($message, $context);
    }

    /**
     * Get log context.
     *
     * @param $code
     * @return array
     */
    private function getContext($code = null): array
    {
        if ($code) {
            return $context = [
                'code' => $code,
                'user_id' => Auth::check() ? Auth::user()->id : null,
                'input' => request()->all(),
            ];
        }

        return $context = [
                'user_id' => Auth::check() ? Auth::user()->id : null,
                'input' => request()->all(),
            ];
    }
}
