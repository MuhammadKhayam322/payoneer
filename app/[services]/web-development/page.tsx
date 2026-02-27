import DevelopmentProcess from '@/app/components/Services/DevelopmentProcess'
import HeroSection from '@/app/components/Services/HeroSection'
import TechStack from '@/app/components/Services/TecStack'
import WebServices from '@/app/components/Services/WebServices'

import React from 'react'

function page() {
  return (
    <div>
       <HeroSection
      title="Powerful E-Commerce Solutions"
      description="BrandRaize builds fast, scalable online stores that drive sales and grow your brand."
      readMoreLink="/services/ecommerce/read-more"
      getStartedLink="/contact"
    />
        <WebServices/>
        <DevelopmentProcess/>
        <TechStack/>
    </div>
  )
}

export default page