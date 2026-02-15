<?php

namespace App\Mail\Rentals;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RentalSubmittedAdmin extends Mailable
{
    use Queueable, SerializesModels;
    public $rental;
    public $isNew;
    public $subject;

    public function __construct($rental, $isNew = true)
    {
        $this->rental = $rental;
        $this->isNew = $isNew;
        $this->subject = $this->isNew ? 'Rental Submission Received' : 'Rental Information Updated';
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->subject,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.rentals.admin_notification',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
