import React from 'react'
import AboutPayoneer from '../components/aboutpayoneer/Aboutpayoneer'
import GlobalCommerceSection from '../components/aboutpayoneer/Globalcommercesection'
import CrossBorderSection from '../components/aboutpayoneer/Crossbordersection'
import FactsStats from '../components/FactsStats'
import FlowWithMoreGo from '../components/aboutpayoneer/Flowwithmorego'
import HowWeDoIt from '../components/aboutpayoneer/Howwedoit'

function page() {
  return (
    <div>
       <AboutPayoneer/>
       <GlobalCommerceSection/> 
       <CrossBorderSection/>
       <FactsStats/>
       <FlowWithMoreGo/>
       <HowWeDoIt/>
    </div>
  )
}

export default page