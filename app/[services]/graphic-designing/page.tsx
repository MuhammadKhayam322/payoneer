import React from 'react'
import HeroSection from '@/app/components/Services/HeroSection'
import GrapicServices from '@/app/components/Services/GrapicServices'
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
    <GrapicServices/>
    <DevelopmentProcess/>
    <TechStack/>
    </div>
  )
}

export default page