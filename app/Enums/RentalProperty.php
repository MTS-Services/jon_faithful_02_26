<?php

namespace App\Enums;

enum RentalProperty: string
{
    case APARTMENT = 'apartment';
    case CONDO = 'condo';
    case SINGLE_FAMILY_HOME = 'single_family_home';
    case TOWNHOME = 'townhome';

    public function label(): string
    {
        return match ($this) {
            self::APARTMENT => 'Apartment',
            self::CONDO => 'Condo',
            self::SINGLE_FAMILY_HOME => 'Single Family Home',
            self::TOWNHOME => 'Townhome',
        };
    }
}
