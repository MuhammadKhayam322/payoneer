import React from 'react'
import PaymentHero from './components/HeroSection'
import FeaturesGrid from './components/FeaturesGrid'
import FactsStats from './components/BrandRaizeLeader'
import EmpoweringTech from './components/EmpoweringTech'
import WhoAreOurCustomers from './components/WhoAreOurCustomers'
import WhyChoiceBrandraize from './components/WhyChoiceBrandraize'



function page() {
  return (
    <div >

<PaymentHero/>
<FeaturesGrid />
<FactsStats/>
<EmpoweringTech/>
<WhoAreOurCustomers/>
<WhyChoiceBrandraize/>


    </div>
  )
}

export default page