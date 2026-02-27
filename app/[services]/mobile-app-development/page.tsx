import React from 'react'
import HeroSection from '@/app/components/Services/HeroSection'
import DevelopmentProcess from '@/app/components/Services/DevelopmentProcess'
import TechStack from '@/app/components/Services/TecStack'
import MobileAppServices from '@/app/components/Services/MobileAppServices'
function page() {
  return (
    <div>
        <HeroSection  title="Grow Your Business With Powerful Digital Marketing Strategies"
      description="BrandRaize delivers creative campaigns and measurable results that boost your online presence."
      readMoreLink="/services/app-development/read-more"
      getStartedLink="/contact"/>
      <MobileAppServices/>
      <DevelopmentProcess/>
      <TechStack/>
    </div>
    
  )
}

export default page