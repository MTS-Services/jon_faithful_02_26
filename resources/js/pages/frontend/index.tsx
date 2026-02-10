import BestCities from '@/components/sections/frontend/home/BestCities'
import ConfidenceCTA from '@/components/sections/frontend/home/ConfidenceCTA'
import { Hero } from '@/components/sections/frontend/home/hero'
import PlatinumProperties from '@/components/sections/frontend/home/PlatinumProperties'
import RelocationGuides from '@/components/sections/frontend/home/RelocationGuides'
import { Test } from '@/components/sections/frontend/home/test'
import TrustSection from '@/components/sections/frontend/home/TrustSection'
import WhyMove from '@/components/sections/frontend/home/why-move'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function Home({ listings }: any) {
  return (
    <FrontendLayout>
      <Hero />
      <WhyMove />
      <BestCities />
      <PlatinumProperties listings={listings} />
      <TrustSection />
      <RelocationGuides />
      <ConfidenceCTA />
    </FrontendLayout>
  )
}
