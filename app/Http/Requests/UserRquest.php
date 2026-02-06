<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'username' => [
                'required',
                'string',
                'max:255',
                Rule::unique('users', 'username')->ignore($this->user),
            ],

            'name' => ['required', 'string', 'max:255'],

            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users', 'email')->ignore($this->user),
            ],

            'phone' => ['nullable', 'string', 'max:20'],

            'your_self' => ['nullable', 'string'],

            'brokerage_name' => ['nullable', 'string'],

            'license_number' => ['nullable', 'string', 'max:100'],

            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],

            'status' => ['nullable', Rule::in(['active', 'inactive'])],

            'user_type' => ['required', 'string', Rule::in([
                'property_owner',
                'agent',
                'admin',
                'user',
            ])],

            'password' => [
                $this->isMethod('post') ? 'required' : 'nullable',
                'string',
                'min:8',
                'confirmed',
            ],
        ];
    }
}
