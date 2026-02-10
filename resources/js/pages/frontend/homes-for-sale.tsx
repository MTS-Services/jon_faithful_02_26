import BuyingAHome from "@/components/sections/frontend/homes-for-sale/buying-a-home"
import ExploreTennessee from "@/components/sections/frontend/homes-for-sale/explore-tennessee"
import FAQ from "@/components/sections/frontend/homes-for-sale/faq"
import Hero from "@/components/sections/frontend/homes-for-sale/hero"
import QuickSearch from "@/components/sections/frontend/homes-for-sale/quick-search"
import TypesOfHomes from "@/components/sections/frontend/homes-for-sale/types-of-homes"
import WhyBuy from "@/components/sections/frontend/homes-for-sale/why-buy"
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
        <FrontendLayout>
            <Hero />
            <QuickSearch 
                listings={listings} 
                cities={cities}
                filters={filters}
            />
            <ExploreTennessee />
            <TypesOfHomes />
            <WhyBuy />
            <BuyingAHome />
            <FAQ />
        </FrontendLayout>
    )
}