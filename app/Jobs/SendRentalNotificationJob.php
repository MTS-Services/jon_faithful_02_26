<?php

namespace App\Jobs;

use App\Mail\Rentals\RentalSubmittedAdmin;
use App\Mail\Rentals\RentalSubmittedUser;
use App\Models\Rental;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendRentalNotificationJob implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Rental $rental,
        public bool $isNew = true,
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        try {
            $rental = $this->rental->fresh();

            if (! $rental) {
                Log::warning('SendrentalNotificationJob: rental not found', [
                    'rental_id' => $this->rental->id,
                ]);

                return;
            }

            $rental->load('user', 'features');

            $userEmail = $rental->user?->email;
            $adminEmail = config('mail.from.address');

            if ($adminEmail) {
                Mail::to($adminEmail)
                    ->send(new RentalSubmittedAdmin($rental, $this->isNew));

                Log::info('Admin notification sent', [
                    'rental_id' => $rental->id,
                    'is_new' => $this->isNew,
                    'admin_email' => $adminEmail,
                ]);
            }

            sleep(10);
            if ($userEmail) {
                Mail::to($userEmail)
                    ->send(new RentalSubmittedUser($rental, $this->isNew));

                Log::info('User notification sent', [
                    'rental_id' => $rental->id,
                    'is_new' => $this->isNew,
                    'user_email' => $userEmail,
                ]);
            }
        } catch (\Exception $e) {
            Log::error('SendrentalNotificationJob failed', [
                'rental_id' => $this->rental->id,
                'error' => $e->getMessage(),
                'stack' => $e->getTraceAsString(),
            ]);

            throw $e;
        }
    }
}
