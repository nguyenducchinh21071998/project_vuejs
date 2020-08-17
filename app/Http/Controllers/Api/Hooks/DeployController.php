<?php


namespace App\Http\Controllers\Api\Hooks;


use App\Http\Controllers\Api\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class DeployController extends ApiController
{
    public function deploy(Request $request) {
        Log::info('====================START DEPLOY====================');
        $data = $request->all();

        $changeType = $data['content']['change_type'] ?? null;
        $ref = $data['content']['ref'] ?? null;
        Log::info("$changeType - $ref");
        if (strpos($ref, 'develop') !== false && $changeType === 'update') {
            $output = shell_exec('sh ' . base_path() ."/deploy/dev.sh");
            Log::info(json_encode($data));
            Log::info($output);
            Log::info('====================FINISH DEPLOY====================');
        } else {
            Log::info('====================NOTHING DEPLOY====================');
        }
    }

    public function test() {
        Log::info('ok');
        dd('ok');
    }
}
