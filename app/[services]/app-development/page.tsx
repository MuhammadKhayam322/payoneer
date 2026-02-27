import React from 'react'
import HeroSection from '@/app/components/Services/HeroSection'
import AppServices from '@/app/components/Services/AppServices'
import DevelopmentProcess from '@/app/components/Services/DevelopmentProcess'
import TechStack from '@/app/components/Services/TecStack'
function page() {
  return (
    <div>
       <HeroSection
      title="Exceptional App Development Solutions"
      description="BrandRaize delivers innovative mobile and web applications to transform your business."
      readMoreLink="/services/app-development/read-more"
      getStartedLink="/contact"
    />
    <AppServices/>
    <DevelopmentProcess/>
    <TechStack/>
    </div>
  )
}

export default page