import ExploreTennessee from "@/components/sections/frontend/homes-for-sale/explore-tennessee"
import Hero from "@/components/sections/frontend/homes-for-sale/hero"
import QuickSearch from "@/components/sections/frontend/homes-for-sale/quick-search"
import FrontendLayout from '@/layouts/frontend-layout'

export default function HomesForSale() {
    return (
        <FrontendLayout>
            <Hero />
            <QuickSearch />
            <ExploreTennessee />

        </FrontendLayout>
    )
}
