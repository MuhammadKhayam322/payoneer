// app/components/features/Cards/WorkforceManagementCard.tsx

import React from "react";
import FeatureCard from "./FeatureCard";

const WorkforceVisual: React.FC = () => {
  const avatars: { bg: string; fill: string }[] = [
    { bg: "#bfdbfe", fill: "#3b82f6" },
    { bg: "#bbf7d0", fill: "#10b981" },
    { bg: "#fde68a", fill: "#f59e0b" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {avatars.map((a, i) => (
        <div
          key={i}
          style={{
            width: 48,
            height: 56,
            borderRadius: 8,
            background: a.bg,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 32,
              height: 40,
              borderRadius: "50% 50% 0 0",
              background: a.fill,
              opacity: 0.7,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const WorkforceManagementCard: React.FC = () => (
  <FeatureCard
    title="Workforce Management"
    description="Simplify hiring, onboarding, and paying global teams across 160+ countries while staying aligned with local compliance."
    visual={<WorkforceVisual />}
  />
);

export default WorkforceManagementCard;