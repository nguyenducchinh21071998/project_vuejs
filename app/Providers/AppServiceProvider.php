<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            \App\Repositories\Account\AccountRepositoryInterface::class,
            \App\Repositories\Account\AccountRepository::class
        );
        $this->app->bind(
            \App\Repositories\Employee\EmployeeRepositoryInterface::class,
            \App\Repositories\Employee\EmployeeRepository::class
        );
        $this->app->bind(
            \App\Repositories\Position\PositionRepositoryInterface::class,
            \App\Repositories\Position\PositionRepository::class
        );
        $this->app->bind(
            \App\Repositories\JobTitle\JobTitleRepositoryInterface::class,
            \App\Repositories\JobTitle\JobTitleRepository::class
        );
        $this->app->bind(
            \App\Repositories\Constant\ConstantRepositoryInterface::class,
            \App\Repositories\Constant\ConstantRepository::class
        );
        $this->app->bind(
            \App\Repositories\Customer\CustomerRepositoryInterface::class,
            \App\Repositories\Customer\CustomerRepository::class
        );
        $this->app->bind(
            \App\Repositories\Chart\ChartRepositoryInterface::class,
            \App\Repositories\Chart\ChartRepository::class
        );
        $this->app->bind(
            \App\Repositories\Company\CompanyRepositoryInterface::class,
            \App\Repositories\Company\CompanyRepository::class
        );
        $this->app->bind(
            \App\Repositories\Department\DepartmentRepositoryInterface::class,
            \App\Repositories\Department\DepartmentRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
