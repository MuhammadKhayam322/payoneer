import React from 'react'
import PaymentHero from './components/HeroSection'
import FeaturesGrid from './components/features/FeaturesGrid'
import FactsStats from './components/FactsStats'
import BussinesswithPayoneer from './components/BussinesswithPayoneer'
import WhoAreOurCustomers from './components/WhoAreOurCustomers'
import ResourceHub from './components/ResourceHub'


function page() {
  return (
    <div>

  <PaymentHero/>
<FeaturesGrid />;
<FactsStats/>;
<BussinesswithPayoneer/>
<WhoAreOurCustomers/>
<ResourceHub/>

    </div>
  )
}

export default page