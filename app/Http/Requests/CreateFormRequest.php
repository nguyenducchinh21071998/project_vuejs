<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class CreateFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:3|max:255',
            'email' => 'required|email|unique:users',
            'mobile' => 'required|min:10|max:10|unique:users',
            'address' => 'required|min:2|string',
            'password' => 'required|string|min:6|max:25',
        ];
    }
    public function messages()
    {
        return [
            'name.min' => 'Tên phải có 2 kí tự trở nên',
            'name.max' => 'Tên quá dài',
            'name.required' => 'Tên không được bỏ trống',
            'email.unique' => 'Email đã tồn tại',
            'email.required' => 'Email không được bỏ trống',
            'email.email' => 'Email không đúng định dạng',
            'mobile.required' => 'Số điện thoại không được để trống',
            'mobile.unique' => 'Số điện thoại đã tồn tại',
            'mobile.min' => 'Số điện thoại phải có 10 số',
            'mobile.max' => 'Số điện thoại phải có 10 số',
            'address.required' => 'Địa chỉ không được bỏ trống',
            'address.min' => 'Địa chỉ không đúng',
            'password.required' => 'Password không được để trống',
            'password.min' => 'Password phải có 6 kí tự trở nên',
            'password.max' => 'Password quá dài',
        ];
    }
}