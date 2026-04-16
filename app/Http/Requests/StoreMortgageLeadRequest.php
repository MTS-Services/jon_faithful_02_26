<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMortgageLeadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'phone_number' => ['required', 'string', 'max:25'],
            'timeline' => ['required', 'string', 'max:50'],
            'purchase_price_range' => ['required', 'string', 'max:50'],
            'down_payment_range' => ['required', 'string', 'max:50'],
            'location' => ['required', 'string', 'max:100'],
            'credit_score' => ['nullable', 'string', 'max:50'],
            'first_time_buyer' => ['nullable', 'string', 'max:25'],
            'consent' => ['accepted'],
            'calculator_snapshot' => ['nullable', 'array'],
            'calculator_snapshot.home_price' => ['nullable', 'numeric', 'min:0'],
            'calculator_snapshot.down_payment' => ['nullable', 'numeric', 'min:0'],
            'calculator_snapshot.interest_rate' => ['nullable', 'numeric', 'min:0'],
            'calculator_snapshot.loan_term' => ['nullable', 'numeric', 'min:0'],
            'calculator_snapshot.monthly_payment' => ['nullable', 'numeric', 'min:0'],
        ];
    }
}
