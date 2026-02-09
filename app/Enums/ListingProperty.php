<?php

namespace App\Enums;

enum ListingProperty: string
{
    case RURAL = 'rural_properties_and_mini_farms';
    case SINGLE = 'single_properties_homes';
    case TOWN = 'towndhomes_and_condos';

    public function label(): string
    {
        return match ($this) {
            self::RURAL => 'Rural Properties & Mini Farms',
            self::SINGLE => 'Single Properties Homes',
            self::TOWN => 'Towndhomes & Condos',
        };
    }
}
