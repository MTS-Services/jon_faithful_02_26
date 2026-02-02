import Hero from '@/components/sections/frontend/rentals/hero'
import Disclaimer from '@/components/sections/frontend/why-tennessee/disclaimer'
import Guiding from '@/components/sections/frontend/why-tennessee/guiding'
import OurCommitment from '@/components/sections/frontend/why-tennessee/our-commitment'
import WhoWeServe from '@/components/sections/frontend/why-tennessee/who-we-serve'
import WhyTrust from '@/components/sections/frontend/why-tennessee/why-trust'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function WhyTennessee() {
  return (
    <FrontendLayout>
        <Hero/>
        <Guiding/>
        <WhoWeServe/>
        <WhyTrust/>
        <OurCommitment/>
        <Disclaimer/>
    </FrontendLayout>
  )
}
