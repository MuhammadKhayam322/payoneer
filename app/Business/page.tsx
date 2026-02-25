import React from 'react'
import BusinessPaymentsHero from '../components/Business/Businesspaymentshero'
import IntroducingPayoneer from '../components/Business/IntroducingPayoneer'
import GoGlobal from '../components/Business/Goglobal'
import ExpandBusinessNetwork from '../components/Business/Expandbusinessnetwork'

function page() {
  return (
    <div>
        <BusinessPaymentsHero/>
        <IntroducingPayoneer/>
        <GoGlobal/>
        <ExpandBusinessNetwork/>
    </div>
  )
}

export default page