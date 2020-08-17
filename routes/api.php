<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', 'Api\Auth\AuthController@login')->name('user.login');

Route::middleware(['auth:user'])->group(function () {
    Route::namespace('Api\Auth')->group(function () {
        Route::get('my-info', 'Api\Auth\AuthController@getAuthenticatedUser')->name('user.my-info');
        Route::post('logout', 'Api\Auth\AuthController@logout')->name('logout');
    });
});

Route::get('commons', 'Api\CommonController@commonsData');

Route::group(['namespace' => 'Api', 'prefix' => 'employees', 'middleware' => 'cors'], function () {
    Route::get('/', 'EmployeeController@list')->name('employees.list');
    Route::post('/', 'EmployeeController@store')->name('employees.store');
    Route::get('/create', 'EmployeeController@create')->name('employees.create');
    Route::get('/{id}', 'EmployeeController@show')->name('employees.show');
    Route::get('/{id}/edit', 'EmployeeController@edit')->name('employees.edit');
    Route::post('/{id}', 'EmployeeController@update')->name('employees.update');
    Route::delete('/{id}', 'EmployeeController@destroy')->name('employees.destroy');
    Route::post('/import', 'EmployeeController@import')->name('employees.import');
    Route::post('/resignation/{id}', 'EmployeeController@takeResignation');
});

Route::group(['namespace' => 'Api', 'prefix' => 'customers', 'middleware' => 'cors'], function () {
    Route::get('/', 'CustomerController@list')->name('customers.list');
    Route::get('/{id}', 'CustomerController@show')->name('customers.show');
    Route::post('/{id}/edit', 'CustomerController@edit')->name('customers.edit');
    Route::post('/update', 'CustomerController@update')->name('customers.update');
    Route::post('/create', 'CustomerController@create')->name('customers.create');
    Route::post('/delete/{id}', 'CustomerController@delete')->name('customers.delete');
});

Route::group(['namespace' => 'Api', 'prefix' => 'charts'], function () {
    Route::get('/', 'ChartController@getChartsData');
    Route::get('/chart', 'ChartController@getChartsDataMemberInOut');
});

Route::post('/deploy', 'Api\Hooks\DeployController@deploy');
Route::get('/test', 'Api\Hooks\DeployController@test');
