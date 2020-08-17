<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            \App\Repositories\Inquiry\InquiryRepositoryInterface::class,
            \App\Repositories\Inquiry\InquiryRepository::class
        );

        $this->app->bind(
            \App\Repositories\PasswordReset\PasswordResetRepositoryInterface::class,
            \App\Repositories\PasswordReset\PasswordResetRepository::class
        );

        $this->app->bind(
            \App\Repositories\Department\DepartmentRepositoryInterface::class,
            \App\Repositories\Department\DepartmentRepository::class
        );

        $this->app->bind(
            \App\Repositories\Position\JobTitleRepositoryInterface::class,
            \App\Repositories\Position\PositionRepository::class
        );

        $this->app->bind(
            \App\Repositories\User\UserRepositoryInterface::class,
            \App\Repositories\User\UserRepository::class
        );

        $this->app->bind(
            \App\Repositories\ImagePath\ImagePathRepositoryInterface::class,
            \App\Repositories\ImagePath\ImagePathRepository::class
        );

        $this->app->bind(
            \App\Repositories\EmailAuthentication\EmailAuthenticationRepositoryInterface::class,
            \App\Repositories\EmailAuthentication\EmailAuthenticationRepository::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
