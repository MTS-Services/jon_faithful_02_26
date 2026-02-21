import { Hero } from '@/components/sections/frontend/hero'
import BristolPage from '@/components/sections/frontend/livingIn-bristol/bristol-page'
import Living from '@/components/sections/frontend/livingIn-bristol/living'
import FrontendLayout from '@/layouts/frontend-layout'



export default function LivingInBristol({ city }: { city: any }) {
    return (
        <FrontendLayout activePage="city" subPage="Bristol">
            <Hero
                slides={[
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                ]}
                title={
                    <>
                        Living in Bristol, Tennessee
                    </>
                }
                description={
                    <>
                        Homes, Cost of Living, Neighborhoods & Small-Town Charm Bristol, Tennessee is a unique and affordable city in the Tri-Cities region of Northeast Tennessee, known for its rich music history, low cost of living, and strong community feel. Famous for being the “Birthplace of Country Music,” Bristol offers small-town charm with access to modern amenities.
                    </>
                }
                width="max-w-2xl"
            />
            <BristolPage city={city} />
        </FrontendLayout>
    )
}