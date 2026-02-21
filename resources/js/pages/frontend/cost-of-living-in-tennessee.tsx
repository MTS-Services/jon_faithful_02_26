import CostOfRentingByRegion from '@/components/sections/frontend/cost-of-living-in-tennessee/cost-of-renting-by-region'
import FindHomes from '@/components/sections/frontend/cost-of-living-in-tennessee/find-homes'
import HealthcareTransportationCosts from '@/components/sections/frontend/cost-of-living-in-tennessee/healthcare-transportation-costs'
import Hero from '@/components/sections/frontend/cost-of-living-in-tennessee/hero'
import HousingCostsInTennessee from '@/components/sections/frontend/cost-of-living-in-tennessee/housing-costs-in-tennessee'
import IsTennesseeAffordable from '@/components/sections/frontend/cost-of-living-in-tennessee/is-tennessee-affordable'
import TaxesInTennessee from '@/components/sections/frontend/cost-of-living-in-tennessee/taxes-in-tennessee'
import UtilitiesMonthlyBills from '@/components/sections/frontend/cost-of-living-in-tennessee/utilities-monthly-bills'
import WhyPeopleMove from '@/components/sections/frontend/cost-of-living-in-tennessee/why-people-move'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function CostOfLivingInTennessee() {
  return (
    <div>
       <FrontendLayout activePage="moving-to-tennessee" subPage="Cost of Living in Tennessee">
            <Hero/>
            <IsTennesseeAffordable/>
            <HousingCostsInTennessee/>
            <TaxesInTennessee/>
            <UtilitiesMonthlyBills/>
            <HealthcareTransportationCosts/>
            <CostOfRentingByRegion/>
            <WhyPeopleMove/>
            <FindHomes/>
        </FrontendLayout>
    </div>
  )
}
