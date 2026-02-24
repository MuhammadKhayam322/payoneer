// app/components/features/Cards/StablecoinPaymentsCard.tsx

import React from "react";
import FeatureCard from "./FeatureCard";

const StablecoinVisual: React.FC = () => (
  <div
    style={{
      position: "relative",
      height: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    }}
  >
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #a78bfa, #818cf8, #60a5fa)",
        opacity: 0.9,
        position: "absolute",
        right: 20,
        bottom: 0,
      }}
    />
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #fbbf24, #f97316)",
        position: "absolute",
        right: 70,
        bottom: 30,
      }}
    />
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #34d399, #059669)",
        position: "absolute",
        right: 90,
        bottom: 0,
        opacity: 0.85,
      }}
    />
  </div>
);

const StablecoinPaymentsCard: React.FC = () => (
  <FeatureCard
    tag="COMING SOON"
    title="Stablecoin Payments"
    description="Stablecoin payments settle in seconds 24/7 – no banking hours, no weekends, no borders. Payoneer brings that speed straight into your workflows."
    highlighted
    visual={<StablecoinVisual />}
  />
);

export default StablecoinPaymentsCard;