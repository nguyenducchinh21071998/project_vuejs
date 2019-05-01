<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('auth/register', 'AuthController@register');
Route::post('auth/login', 'AuthController@login');
Route::group(['middleware' => 'jwt.auth'], function(){
  Route::get('auth/user', 'AuthController@user');
});
Route::group(['middleware' => 'jwt.refresh'], function(){
  Route::get('auth/refresh', 'AuthController@refresh');
});
Route::group(['middleware' => 'jwt.auth'], function(){
   Route::post('auth/logout', 'AuthController@logout');
});
// Route::group(['prefix' => '/admin', 'as' => 'admin'], function(){
// 	Route::get('list-user', 'UserController@index')->name('list-user.index');
// });
Route::delete('delete-user/{id}', 'UserController@delete')->name('delete-user');
Route::post('create', 'UserController@create');
Route::get('edit/{id}', 'UserController@update');
Route::group(['prefix' => '/admin', 'as' => 'admin'], function () {
    Route::resource('list-user', 'UserController', ['except' => ['create', 'edit']]);
});
