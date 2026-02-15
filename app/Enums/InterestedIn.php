<?php

namespace App\Enums;

enum InterestedIn: string
{
    case MOVING_TO_TENNESSEE = 'moving_to_tennessee';
    case BUYING_A_HOME = 'buying_a_home';
    case SELLING_A_HOME = 'selling_a_home';
    case REALTOR_LISTING = 'realtor_listing';
    case PARTNERSHIP_ADVERTISING = 'partnership_advertising';
    case OTHER = 'other';

    public function label(): string
    {
        return match ($this) {
            self::MOVING_TO_TENNESSEE => 'Moving to Tennessee',
            self::BUYING_A_HOME => 'Buying a Home',
            self::SELLING_A_HOME => 'Selling a Home',
            self::REALTOR_LISTING => 'Realtor: Listing a Property',
            self::PARTNERSHIP_ADVERTISING => 'Partnership / Advertising',
            self::OTHER => 'Other',
        };
    }
}
