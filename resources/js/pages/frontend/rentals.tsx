import FindThePerfectPlace from '@/components/sections/frontend/rentals/find-the-perfect-place';
import Hero from '@/components/sections/frontend/rentals/hero';
import PropertyOwner from '@/components/sections/frontend/rentals/property-owner';
import RentalListings from '@/components/sections/frontend/rentals/rental-listings';
import WhyTrust from '@/components/sections/frontend/rentals/why-trust';
import FrontendLayout from '@/layouts/frontend-layout';

interface City {
    id: number;
    name: string;
}

interface Props {
    rentals: any;
    cities: City[];
    filters: {
        search: string;
        city: string;
        price_min: string;
        price_max: string;
    };
}

export default function Rentals({ rentals, cities, filters }: Props) {
    return (
        <FrontendLayout>
            <Hero />
            <FindThePerfectPlace />
            <RentalListings rentals={rentals} cities={cities} filters={filters} />
            <PropertyOwner />
            <WhyTrust />
        </FrontendLayout>
    );
}
