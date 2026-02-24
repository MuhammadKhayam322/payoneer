// app/components/features/Cards/PayGloballyCard.tsx

import React from "react";
import FeatureCard from "./FeatureCard";

const PayGloballyVisual: React.FC = () => {
  const dots: { color: string; deg: number }[] = [
    { color: "#3b82f6", deg: 0 },
    { color: "#10b981", deg: 72 },
    { color: "#f59e0b", deg: 144 },
    { color: "#ef4444", deg: 216 },
    { color: "#8b5cf6", deg: 288 },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          border: "1.5px dashed #cbd5e1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: "1.5px dashed #94a3b8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #e84d1c, #f97316)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 12,
            }}
          >
            ✈
          </div>
        </div>

        {dots.map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: dot.color,
              top: "50%",
              left: "50%",
              transform: `rotate(${dot.deg}deg) translateY(-44px) translateX(-4px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const PayGloballyCard: React.FC = () => (
  <FeatureCard
    title="Pay Globally"
    description="Send single, batch, or recurring payments worldwide, with automated scheduling that saves time."
    visual={<PayGloballyVisual />}
  />
);

export default PayGloballyCard;