<?php

namespace App\Enums;

enum ListingProperty: string
{
    case HOUSE = 'house';
    case TOWNHOUSE = 'townhouse';
    case CONDO = 'condo';
    case MULTI_FAMILY = 'multi_family';
    case MOBILE = 'mobile';
    case CO_OP = 'co_op';
    case LAND = 'land';
    case OTHER = 'other';

    public function label(): string
    {
        return match ($this) {
            self::HOUSE => 'House',
            self::TOWNHOUSE => 'Townhouse',
            self::CONDO => 'Condo',
            self::MULTI_FAMILY => 'Multi-family',
            self::MOBILE => 'Mobile',
            self::CO_OP => 'Co-op',
            self::LAND => 'Land',
            self::OTHER => 'Other',
        };
    }
}
