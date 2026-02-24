// app/components/features/Cards/BusinessFundingCard.tsx

import React from "react";
import { BarProps } from "../types";
import FeatureCard from "./FeatureCard";

const Bar: React.FC<BarProps> = ({ height, active = false }) => (
  <div
    style={{
      width: 16,
      height,
      borderRadius: 4,
      background: active
        ? "linear-gradient(180deg, #e84d1c, #f97316)"
        : "#e2e8f0",
    }}
  />
);

const BusinessFundingVisual: React.FC = () => {
  const bars: BarProps[] = [
    { height: 40 },
    { height: 65 },
    { height: 50 },
    { height: 75, active: true },
    { height: 55 },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        height: "100%",
      }}
    >
      {bars.map((b, i) => (
        <Bar key={i} height={b.height} active={b.active} />
      ))}
    </div>
  );
};

const BusinessFundingCard: React.FC = () => (
  <FeatureCard
    title="Business Funding"
    description="Access prequalified capital – right inside Payoneer – to seize opportunities, steady cash flow, and keep growing."
    visual={<BusinessFundingVisual />}
  />
);

export default BusinessFundingCard;