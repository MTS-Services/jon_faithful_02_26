import BuyingAHome from '@/components/sections/frontend/homes-for-sale/buying-a-home'
import ExploreTennessee from '@/components/sections/frontend/homes-for-sale/explore-tennessee'
import TypesOfHomes from '@/components/sections/frontend/homes-for-sale/types-of-homes'
import WhyBuy from '@/components/sections/frontend/homes-for-sale/why-buy'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

export default function Buying() {
  return (
    <FrontendLayout activePage="moving-to-tennessee" subPage="Buying">
        <ExploreTennessee />
            <TypesOfHomes />
            <WhyBuy />
            <BuyingAHome />
    </FrontendLayout>
  )
}
