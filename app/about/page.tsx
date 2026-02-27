import React from 'react'
import About from '../components/about/AboutBrandRaize'
import GlobalCommerceSection from '../components/about/Globalcommercesection'
import FeaturesGrid from '../components/FeaturesGrid'


function page() {
  return (
    <div>
       <About/>
       <GlobalCommerceSection/> 
       <FeaturesGrid/>
     
    </div>
  )
}

export default page