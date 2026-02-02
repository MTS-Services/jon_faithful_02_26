
import ChattanoogaLocated from "@/components/sections/frontend/chattanooga/chattanooga-located"
import CostOfLiving from "@/components/sections/frontend/chattanooga/cost-of-living"
import Hero from "@/components/sections/frontend/chattanooga/hero"
import MovingToChattanooga from "@/components/sections/frontend/chattanooga/moving-to-chattanooga"
import FrontendLayout from "@/layouts/frontend-layout"

export default function LivingInChattanooga() {
    return (
        <FrontendLayout>
            <Hero />
            <MovingToChattanooga />
            <ChattanoogaLocated />
            <CostOfLiving />
        </FrontendLayout>
    )
}