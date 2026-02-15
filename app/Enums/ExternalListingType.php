<?php

namespace App\Enums;

enum ExternalListingType: string
{
    case LISTING = 'listing';
    case RENTAL = 'rental';

    public function label(): string
    {
        return match ($this) {
            self::LISTING => 'Listing',
            self::RENTAL => 'Rental',
        };
    }
}
