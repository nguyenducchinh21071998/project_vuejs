<?php

declare(strict_types=1);

namespace App\Services;

use App\Repositories\ImagePath\ImagePathRepositoryInterface;
use App\Enums\ErrorType;
use App\Enums\DBConstant;
use App\Exceptions\SystemException;
use App\Enums\Constant;
use Illuminate\Support\Facades\Storage;
use Aws\S3\Exception\S3Exception;
use Illuminate\Support\Facades\Log;

class ImageService extends BaseService
{
    /**
     * Upload file to s3
     * @param $request , $path
     * @return string
     */
    public function uploadFileToS3($request, $path)
    {
        if ($request->file('file_url')) {
            $file = $request->file('file_url');
            $extension = $file->getClientOriginalExtension('file_url');
            $fileName = $file->getClientOriginalName('file_url');
            $fileName = trim($fileName, $extension) . '_' . time() . '_' . rand(1000, 9999) . '.' . $extension;
            $urlPath = $path . $fileName;
            // upload image to S3
            Storage::disk('s3')->putFileAs($path, $file, $fileName);
            return $urlPath;
        }
    }

    /**
     * Get url s3  file
     * @param $path
     * @return string
     */
    public function getS3FileUrl($path, $defaultImage = null)
    {
        try {
            $disk = Storage::disk('s3');
            if ($disk->exists($path)) {
                $s3Client = $disk->getDriver()->getAdapter()->getClient();
                $command = $s3Client->getCommand(
                    'GetObject',
                    [
                        'Bucket' => config('filesystems.disks.s3.bucket'),
                        'Key' => $path,
                        'ResponseContentDisposition' => 'attachment;',
                    ]
                );
                $request = $s3Client->createPresignedRequest($command, '+1440 minutes');
                return (string)$request->getUri();
            }
            return $defaultImage;
        } catch (S3Exception $e) {
            Log::error($e->getMessage() . $e->getTraceAsString());
            return $defaultImage;
        }
    }

    /**
     * Delete file from s3
     * @param $path
     */
    public function deleteFileFromS3($path)
    {
        $disk = Storage::disk('s3');
        if ($disk->exists($path)) {
            Storage::disk('s3')->delete($path);
        }
    }

}
