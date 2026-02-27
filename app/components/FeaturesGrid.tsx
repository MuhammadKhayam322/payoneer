// app/components/features/FeaturesGrid.tsx

import React from "react";
import StablecoinPaymentsCard from "./features/cards/StablecoinPaymentsCard";
import CommercialCardsCard from "./features/cards/CommercialCardsCard";
import WorkforceManagementCard from "./features/cards/WorkforceManagementCard";
import MulticurrencyAccountsCard from "./features/cards/MulticurrencyAccountsCard";
import PayGloballyCard from "./features/cards/PayGloballyCard";
import BusinessFundingCard from "./features/cards/BusinessFundingCard";

const FeaturesGrid: React.FC = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
    

      .features-section {
        font-family: 'DM Sans', sans-serif;
         background:
        "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)"
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 64px 24px;
      }
      .features-heading {
        text-align: center;
        margin-bottom: 48px;
      }
      .features-heading h2 {
        font-size: clamp(26px, 4vw, 38px);
        font-weight: 700;
        color: #fafbfd;
        line-height: 1.25;
        letter-spacing: -0.02em;
      }
      .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        max-width: 960px;
        width: 100%;
      }
      @media (max-width: 768px) {
        .features-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 480px) {
        .features-grid { grid-template-columns: 1fr; }
      }
    `}</style>

    <section className="features-section">
      <div className="features-heading">
        <h2>Discover Our Services</h2>
         </div>
        <div className="features-heading">
        <p className="text-lg max-w-6xl mx-auto " style={{color:"white", fontSize: "16px", lineHeight: "1.75"  }}>
          We provide a full spectrum of creative and digital services to help your brand grow.
        </p>
       
      </div>

      <div className="features-grid">
        <StablecoinPaymentsCard />
        <CommercialCardsCard />
        <WorkforceManagementCard />
        <MulticurrencyAccountsCard />
        <PayGloballyCard />
        <BusinessFundingCard />
      </div>
    </section>
  </>
);

export default FeaturesGrid;
