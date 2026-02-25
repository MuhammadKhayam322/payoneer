import React from 'react'
import PaymentSolutionMarketplaces from '../components/MarketPlace/Paymentsolutionmarketplaces'
import GoodCompany from '../components/MarketPlace/Goodcompany'
import TrustedPartner from '../components/MarketPlace/Trustedpartner'
import Payoneerexperience from '../components/MarketPlace/Payoneerexperience'
import SmoothExperience from '../components/MarketPlace/Smoothexperience'
import RiskFraudProtection from '../components/MarketPlace/Riskfraudprotection'
import SupportSection from '../components/MarketPlace/SupportSection'
import TestimonialAndNextStep from '../components/MarketPlace/TestimonialandNextstep'
import GetStartedSection from '../components/MarketPlace/Getstartedsection'

function page() {
  return (
    <div>
        <PaymentSolutionMarketplaces/>
        <GoodCompany/>
        <TrustedPartner/>
        <Payoneerexperience/>
        <SmoothExperience/>
        <RiskFraudProtection/>
        <SupportSection/>
        <TestimonialAndNextStep/>
        <GetStartedSection/>
    </div>
  )
}

export default page