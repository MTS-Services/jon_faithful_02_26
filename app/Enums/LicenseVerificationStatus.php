<?php

namespace App\Enums;

enum LicenseVerificationStatus: string
{
    case PENDING = 'pending';
    case APPROVED = 'approved';
    case REJECTED = 'rejected';

    public function label(): string
    {
        return match ($this) {
            self::PENDING => 'Pending',
            self::APPROVED => 'Approved',
            self::REJECTED => 'Rejected',
        };
    }
    public function color(): string
    {
        return match ($this) {
            self::PENDING => 'bg-amber-500',
            self::APPROVED => 'bg-green-500',
            self::REJECTED => 'bg-red-500',
        };
    }
}