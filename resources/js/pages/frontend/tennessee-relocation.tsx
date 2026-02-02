import AverageHomePrice from '@/components/sections/frontend/tennessee-relocation/average-home-price'
import AverageRentalCost from '@/components/sections/frontend/tennessee-relocation/average-rental-cost'
import ChoosingTheRightArea from '@/components/sections/frontend/tennessee-relocation/choosing-the-right-area'
import Hero from '@/components/sections/frontend/tennessee-relocation/hero'
import HomePriceRanges from '@/components/sections/frontend/tennessee-relocation/home-price-ranges'
import HousingOptions from '@/components/sections/frontend/tennessee-relocation/housing-options'
import MovingToTennessee from '@/components/sections/frontend/tennessee-relocation/moving-to-yennessee'
import Tabs from '@/components/sections/frontend/tennessee-relocation/tabs'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function TennesseeRelocation() {
    return (
    <FrontendLayout>
        <Hero/>
        <MovingToTennessee/>
        <ChoosingTheRightArea/>
        <HousingOptions/>
        <AverageRentalCost/>
        <AverageHomePrice/>
        <HomePriceRanges/>
        <Tabs/>
    </FrontendLayout>
  )
}
