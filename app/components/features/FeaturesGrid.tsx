// app/components/features/FeaturesGrid.tsx

import React from "react";
import StablecoinPaymentsCard from "./cards/StablecoinPaymentsCard";
import CommercialCardsCard from "./cards/CommercialCardsCard";
import WorkforceManagementCard from "./cards/WorkforceManagementCard";
import MulticurrencyAccountsCard from "./cards/MulticurrencyAccountsCard";
import PayGloballyCard from "./cards/PayGloballyCard";
import BusinessFundingCard from "./cards/BusinessFundingCard";

const FeaturesGrid: React.FC = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
    

      .features-section {
        font-family: 'DM Sans', sans-serif;
        background: #f8fafc;
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
        color: #0f172a;
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
        <h2>
          All you need to grow
          <br />
          your business globally
        </h2>
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
