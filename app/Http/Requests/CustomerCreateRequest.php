<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use App\Enums\DBConstant;

class CustomerCreateRequest extends FormRequest
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
            'company_name' => 'required|min:3|max:256',
            'abbreviations' => 'required|max:20',
            'investment' => 'required|max:20',
            'shareholder' => 'required|max:256',
            'number_employee' => 'required|max:20',
        ];

        return $rules;
    }

    public function messages()
    {
        return [
            'company_name.required' => DBConstant::VALIDATION['required'],
            'company_name.max' => DBConstant::VALIDATION['max'],
            'abbreviations.required' => DBConstant::VALIDATION['required'],
            'abbreviations.max' => DBConstant::VALIDATION['max'],
            'investment.max' => DBConstant::VALIDATION['max'],
            'investment.numeric' => DBConstant::VALIDATION['numeric'],
            'investment.required' => DBConstant::VALIDATION['required'],
            'shareholder.required' => DBConstant::VALIDATION['required'],
            'shareholder.max' => DBConstant::VALIDATION['max'],
            'number_employee.required' => DBConstant::VALIDATION['required'],
            'number_employee.max' => DBConstant::VALIDATION['max'],
            
        ];
    }
}
