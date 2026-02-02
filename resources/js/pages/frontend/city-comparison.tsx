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
                        "https://whytennessee.com/wp-content/uploads/2025/12/View-From-Fire-Tower-Bays-Mountain-Park-Kingsport-TN-1-scaled.jpeg",
                    ]}
                    title={
                        <>
                            Tennessee City Comparison Guide
                        </>
                    }
                    description={
                        <>
                            Moving to Tennessee is exciting — but choosing the right city can feel overwhelming. Each city offers a different lifestyle, cost of living, job market, and housing options. This guide breaks down Tennessee’s most popular cities side by side so you can confidently decide where to live.
                        </>
                    }
                />
                <CityComparisonPage />
            </FrontendLayout>
        </>
    )
}
