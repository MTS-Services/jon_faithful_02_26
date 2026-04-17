<?php

namespace App\Mail;

use App\Models\MortgageLead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class MortgageLeadThankYouMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public MortgageLead $lead) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Your Tennessee Home Buying Options',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.mortgage-lead-thank-you',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
