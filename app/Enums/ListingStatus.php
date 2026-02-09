<?php

namespace App\Enums;

enum ListingStatus: string
{
    case BASIC = 'basic_property';
    case FEATURE = 'featured_property';
    case PLATINUM = 'platinum_property';

    public function label(): string
    {
        return match ($this) {
            self::BASIC => 'Basic Property Listing',
            self::FEATURE => 'Feature Property Listing',
            self::PLATINUM => 'Platinum Property Listing',
        };
    }
}
