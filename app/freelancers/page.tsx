import React from 'react'
import FreelancerFeatures from '../components/Freelencer/Freelancerfeatures'
import PayoneerHero from '../components/Freelencer/PayoneerHero'
import FeesMadeEasy from '../components/Freelencer/Feesmadeeasy'
import ResourceHub from '../components/ResourceHub'
import SupportSection from '../components/Freelencer/SupportSection'

function page() {
  return (
    <div>
      <PayoneerHero/>
      <FreelancerFeatures/>
      <FeesMadeEasy/>
      <ResourceHub/>
      <SupportSection/>
    </div>
  )
}

export default page