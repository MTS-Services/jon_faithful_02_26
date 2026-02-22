<?php

namespace App\Jobs;

use App\Mail\ListingSubmittedAdminMail;
use App\Mail\ListingSubmittedUserMail;
use App\Models\Listing;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendListingNotificationJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Listing $listing,
        public bool $isNew = true,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            $listing = $this->listing->fresh();

            if (! $listing) {
                Log::warning('SendListingNotificationJob: Listing not found', [
                    'listing_id' => $this->listing->id,
                ]);

                return;
            }

            $listing->load('user', 'features');

            $userEmail = $listing->user?->email;
            $adminEmail = config('mail.from.address');

            if ($adminEmail) {
                Mail::to($adminEmail)
                    ->send(new ListingSubmittedAdminMail($listing, $this->isNew));

                Log::info('Admin notification sent', [
                    'listing_id' => $listing->id,
                    'is_new' => $this->isNew,
                    'admin_email' => $adminEmail,
                ]);
            }

            sleep(10);
            if ($userEmail) {
                Mail::to($userEmail)
                    ->send(new ListingSubmittedUserMail($listing, $this->isNew));

                Log::info('User notification sent', [
                    'listing_id' => $listing->id,
                    'is_new' => $this->isNew,
                    'user_email' => $userEmail,
                ]);
            }
        } catch (\Exception $e) {
            Log::error('SendListingNotificationJob failed', [
                'listing_id' => $this->listing->id,
                'error' => $e->getMessage(),
                'stack' => $e->getTraceAsString(),
            ]);

            throw $e;
        }
    }
}
