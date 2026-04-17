<?php

use App\Mail\MortgageLeadThankYouMail;
use App\Mail\NewMortgageLeadMail;
use App\Models\MortgageLead;
use Illuminate\Support\Facades\Mail;

test('mortgage leads can be submitted and emailed', function () {
    Mail::fake();

    $payload = [
        'first_name' => 'Jon',
        'email' => 'jon@example.com',
        'phone_number' => '(615) 555-1000',
        'timeline' => '0-3 months',
        'purchase_price_range' => '$300K - $400K',
        'down_payment_range' => '5% - 10%',
        'location' => 'Tennessee',
        'credit_score' => '700-759',
        'first_time_buyer' => 'yes',
        'consent' => true,
        'calculator_snapshot' => [
            'home_price' => 350000,
            'down_payment' => 35000,
            'interest_rate' => 6.75,
            'loan_term' => 30,
            'monthly_payment' => 2450,
        ],
    ];

    $response = $this->postJson(route('frontend.mortgage-leads.store'), $payload);

    $response
        ->assertOk()
        ->assertJson([
            'accepted' => true,
        ]);

    expect(MortgageLead::query()->count())->toBe(1);

    Mail::assertSent(NewMortgageLeadMail::class, function (NewMortgageLeadMail $mail) {
        return $mail->hasTo('info@whytennessee.com');
    });

    Mail::assertSent(MortgageLeadThankYouMail::class, function (MortgageLeadThankYouMail $mail) {
        return $mail->hasTo('jon@example.com');
    });
});
