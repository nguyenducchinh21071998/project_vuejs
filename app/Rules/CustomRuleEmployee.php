<?php

namespace App\Rules;

use App\Models\Employee;
use Illuminate\Contracts\Validation\Rule;
use App\Enums\DBConstant;

class CustomRuleEmployee implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param  mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $id = str_pad($value, 4, "0", STR_PAD_LEFT);
        $checkEmployeeDelete = Employee::where('id', $id)->onlyTrashed()->count();
        $checkEmployeeActive = Employee::where('id', $id)->count();
        return $checkEmployeeDelete == 0 && $checkEmployeeActive == 0;
    }

    /**
     * Get the validation error message.
     *
     * @return array
     */
    public function message()
    {
        return [
            'id.unique' => DBConstant::VALIDATION['unique'],
        ];
    }
}
