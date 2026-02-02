import FindThePerfectPlace from '@/components/sections/frontend/rentals/find-the-perfect-place'
import Hero from '@/components/sections/frontend/rentals/hero'
import PropertyOwner from '@/components/sections/frontend/rentals/property-owner'
import RentalListings from '@/components/sections/frontend/rentals/rental-listings'
import WhyTrust from '@/components/sections/frontend/rentals/why-trust'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function Rentals() {
  return (
    <FrontendLayout>
        <Hero/>
        <FindThePerfectPlace/>
        <RentalListings/>
        <PropertyOwner/>
        <WhyTrust/>
    </FrontendLayout>
  )
}
