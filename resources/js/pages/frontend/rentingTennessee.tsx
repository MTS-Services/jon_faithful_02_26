import RentingHero from '@/components/sections/frontend/renting-tennessee/renting-hero'
import RentingSections from '@/components/sections/frontend/renting-tennessee/rentingSections'
import FrontendLayout from '@/layouts/frontend-layout'

export default function rentingTennessee() {
  return (
    <FrontendLayout activePage="moving-to-tennessee" subPage="Renting in Tennessee">
      <RentingHero />
      <RentingSections />
    </FrontendLayout>
  )
}
