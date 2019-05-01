<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests\CreateFormRequest;

class UserController extends Controller
{
    public function index(){
    	return User::orderBy('id', 'desc')->get();
    	// dd(User::orderBy('id', 'desc')->get());
    }
    public function home(){
    	return view('vueApp');
    }
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());
        return $user;
    }

    public function delete($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return '';
    }
}
