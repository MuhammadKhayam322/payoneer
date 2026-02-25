// app/components/features/Cards/CommercialCardsCard.tsx

import React from "react";
import FeatureCard from "./ServicesCard";
import {  TabletSmartphone } from "lucide-react";
const CommercialCardVisual: React.FC = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
    <div
      style={{
        width: 140,
        height: 88,
        borderRadius: 10,
        background: "linear-gradient(135deg, #1e293b 60%, #334155)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "12px 14px",
      }}
    >
      <div style={{ fontSize: 9, color: "#94a3b8", letterSpacing: 1 }}>
        PAYONEER
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: 9, color: "#64748b" }}>•••• 4291</div>
        <div style={{ display: "flex" }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#ef4444", opacity: 0.9 }} />
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#f97316", opacity: 0.9, marginLeft: -8 }} />
        </div>
      </div>
    </div>
  </div>
);

const CommercialCardsCard: React.FC = () => (
  <FeatureCard
    icon={<TabletSmartphone size={24} />}
    title="Application Development"
    description="Custom web apps and enterprise portals built for performance and scalability."
    
  />
);

export default CommercialCardsCard;