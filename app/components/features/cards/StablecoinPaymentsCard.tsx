// app/components/features/Cards/StablecoinPaymentsCard.tsx
import { Video } from "lucide-react";
import React from "react";
import FeatureCard from "./ServicesCard";

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
    icon={<Video size={24} />}
    title="Digital Marketing"
    description="A complete range of digital marketing solutions — SEO, social media, ads, and more."
    highlighted
    
  />
);

export default StablecoinPaymentsCard;
