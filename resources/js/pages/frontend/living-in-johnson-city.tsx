import { Hero } from '@/components/sections/frontend/hero'
import JohnsonCityPage from '@/components/sections/frontend/johnson-city/johnson-city-page'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function LivingInJohnsonCity() {
  return (
    <div>
      <FrontendLayout>
                {/* <Hero />
            <MovingToChattanooga />
            <ChattanoogaLocated />
            <CostOfLiving /> */}

                <Hero
                    slides={[
                        '/assets/images/Johnson_City__Tennessee1-scaled.jpeg',
                    ]}
                    
                    title={<>Living in Johnson City, Tennessee</>}
                    description={
                        <>
                           Homes, Cost of Living, Neighborhoods & Mountain Lifestyle Johnson City, Tennessee is one of East Tennessee’s fastest-growing cities, known for its mountain views, affordable housing, and high quality of life. Located in the heart of the Tri-Cities region, Johnson City attracts families, healthcare professionals, retirees, and remote workers looking for a balanced lifestyle.
                        </>
                    }
                />
                <JohnsonCityPage />
            </FrontendLayout>
    </div>
  )
}
