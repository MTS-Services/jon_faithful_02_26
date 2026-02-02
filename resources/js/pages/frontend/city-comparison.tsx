import CityComparisonPage from '@/components/sections/frontend/city-comparison/city.comparison-page'
import { Hero } from '@/components/sections/frontend/hero'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function CityComparison() {
    return (
        <>
            <FrontendLayout>
                <Hero
                    slides={[
                        "assets/images/moving-checklist/moving-banner.jpeg",
                    ]}
                    title={
                        <>
                            Moving to Tennessee Checklist
                        </>
                    }
                    description={
                        <>
                            Moving to Tennessee is an exciting decision, but a successful relocation starts with the right plan. Whether you’re moving from another state or relocating within Tennessee, this complete moving checklist will help you stay organized, reduce stress, and avoid costly mistakes. Use this Tennessee moving checklist to prepare before, during, and after your move.
                        </>
                    }
                />
                <CityComparisonPage />
            </FrontendLayout>
        </>
    )
}
