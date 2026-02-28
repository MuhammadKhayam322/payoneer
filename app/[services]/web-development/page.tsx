import DevelopmentProcess from '@/app/components/Services/DevelopmentProcess'
import HeroSection from '@/app/components/Services/HeroSection'
import TechStack from '@/app/components/Services/TecStack'
import WebServices from '@/app/components/Services/WebServices'

import React from 'react'

function page() {
  return (
    <div>
       <HeroSection
      title="We Create Exceptionally Creative Web Designs"
      description="BrandRaize knows your high standards and loves to meet them ingeniously."
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