import React from 'react'
import HeroSection from '@/app/components/Services/HeroSection'
import ITServices from '@/app/components/Services/IT-Services'
import DevelopmentProcess from '@/app/components/Services/DevelopmentProcess'
import TechStack from '@/app/components/Services/TecStack'
function Page() {
  return (
    <div>
        <HeroSection
              title="Innovative IT Solutions for Your Business"
              description="BrandRaize delivers end-to-end IT solutions tailored to optimize your operations and security."
              readMoreLink="/services/app-development/read-more"
              getStartedLink="/contact"
            />
           <ITServices/> 
            <DevelopmentProcess/>
               <TechStack/>
    </div>
  )
}

export default Page