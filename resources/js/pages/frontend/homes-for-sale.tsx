import FAQ from "@/components/sections/frontend/homes-for-sale/faq"
import Hero from "@/components/sections/frontend/homes-for-sale/hero"
import QuickSearch from "@/components/sections/frontend/homes-for-sale/quick-search"
import FrontendLayout from '@/layouts/frontend-layout'

interface City {
    id: number;
    name: string;
}

interface Props {
    listings: any;
    cities: City[];
    filters: {
        search: string;
        city: string;
        price_min: string;
        price_max: string;
    };
}

export default function HomesForSale({ listings, cities, filters }: Props) {
    return (
        <FrontendLayout activePage="homes-for-sale">
            <Hero />
            <QuickSearch 
                listings={listings} 
                cities={cities}
                filters={filters}
            />    
            <FAQ />
        </FrontendLayout>
    )
}