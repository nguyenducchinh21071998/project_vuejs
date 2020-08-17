<?php

namespace App\Http\Requests;

use App\Rules\CustomRuleEmployee;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use App\Enums\DBConstant;

class EmployeeRegisterRequest extends FormRequest
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
    public function rules(Request $request)
    {
        $rules = [
            'id' => ['required', 'numeric', 'unique:employees', 'digits_between:1,4', new CustomRuleEmployee($request->id)],
            'email' => 'required|email|unique:accounts',
            'position_id' => 'required',
            'company_code' => 'required',
            'job_title_code' => 'required',
            /*'birthday' => 'date',*/
            'other_email' => 'email',
            /*'join_date' => 'date',*/
            /*'official_date' => 'date|after_or_equal:join_date',*/
            /*'end_date' => 'date|after_or_equal:join_date',*/
            'number_of_days_leave' => 'numeric',
        ];

        if ($request->image_url) {
            $rules['image_url'] = 'mimes:jpeg,jpg,png,gif|max:2000';
        }

        if ($request->identity_card_date) {
            /*$rules['identity_card_date'] = 'date';*/
        }

        if ($request->insurance_number) {
            $rules['insurance_number'] = 'numeric';
        }

        if ($request->phone) {
            $rules['phone'] = 'numeric';
        }

        if ($request->phone_family) {
            $rules['phone_family'] = 'numeric';
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'email.unique' => DBConstant::VALIDATION['unique'],
            'id.unique' => DBConstant::VALIDATION['unique'],
            'id.digits_between' => DBConstant::VALIDATION['max'],
            'email.email' => DBConstant::VALIDATION['email'],
            'other_email.email' => DBConstant::VALIDATION['email'],
            'id.numeric' => DBConstant::VALIDATION['numeric'],
            'phone.numeric' => DBConstant::VALIDATION['numeric'],
            'phone_family.numeric' => DBConstant::VALIDATION['numeric'],
            'insurance_number.numeric' => DBConstant::VALIDATION['numeric'],
            'number_of_days_leave.numeric' => DBConstant::VALIDATION['numeric'],
            'email.required' => DBConstant::VALIDATION['required'],
            'id.required' => DBConstant::VALIDATION['required'],
            'position_id.required' => DBConstant::VALIDATION['required'],
            'company_code.required' => DBConstant::VALIDATION['required'],
            'job_title_code.required' => DBConstant::VALIDATION['required'],
            'birthday.date' => DBConstant::VALIDATION['date'],
            'join_date.date' => DBConstant::VALIDATION['date'],
            'official_date.date' => DBConstant::VALIDATION['date'],
            'end_date.date' => DBConstant::VALIDATION['date'],
            'identity_card_date.date' => DBConstant::VALIDATION['date'],
            'official_date.after_or_equal' => DBConstant::VALIDATION['after_or_equal'],
            'end_date.after_or_equal' => DBConstant::VALIDATION['after_or_equal'],
            'image_url.max' => DBConstant::VALIDATION['image_url_max'],
            'image_url.mimes' => DBConstant::VALIDATION['image_url_mimes'],
        ];
    }
}
