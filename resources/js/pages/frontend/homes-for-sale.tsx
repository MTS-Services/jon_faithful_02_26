import BuyingAHome from "@/components/sections/frontend/homes-for-sale/buying-a-home"
import ExploreTennessee from "@/components/sections/frontend/homes-for-sale/explore-tennessee"
import FAQ from "@/components/sections/frontend/homes-for-sale/faq"
import Hero from "@/components/sections/frontend/homes-for-sale/hero"
import QuickSearch from "@/components/sections/frontend/homes-for-sale/quick-search"
import TypesOfHomes from "@/components/sections/frontend/homes-for-sale/types-of-homes"
import WhyBuy from "@/components/sections/frontend/homes-for-sale/why-buy"
import FrontendLayout from '@/layouts/frontend-layout'

export default function HomesForSale() {
    return (
        <FrontendLayout>
            <Hero />
            <QuickSearch />
            <ExploreTennessee />
            <TypesOfHomes />
            <WhyBuy />
            <BuyingAHome />
            <FAQ />
        </FrontendLayout>
    )
}
