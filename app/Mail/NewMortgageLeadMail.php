<?php

namespace App\Mail;

use App\Models\MortgageLead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewMortgageLeadMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(public MortgageLead $lead) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Mortgage Lead',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.new-mortgage-lead',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
