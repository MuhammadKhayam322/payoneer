// app/components/features/Cards/MulticurrencyAccountsCard.tsx

import React from "react";
import { CurrencyRowProps } from "../types";
import FeatureCard from "./FeatureCard";

const CurrencyRow: React.FC<CurrencyRowProps> = ({ flag, code, amount }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: 8,
      padding: "6px 10px",
      fontSize: 11,
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 14 }}>{flag}</span>
      <span style={{ fontWeight: 600, color: "#334155" }}>{code}</span>
    </div>
    <span style={{ color: "#64748b" }}>{amount}</span>
  </div>
);

const MulticurrencyVisual: React.FC = () => {
  const currencies: CurrencyRowProps[] = [
    { flag: "🇺🇸", code: "USD", amount: "$1,200.00" },
    { flag: "🇪🇺", code: "EUR", amount: "€890.00" },
    { flag: "🇬🇧", code: "GBP", amount: "£450.00" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        padding: "0 8px",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {currencies.map((c) => (
        <CurrencyRow key={c.code} flag={c.flag} code={c.code} amount={c.amount} />
      ))}
    </div>
  );
};

const MulticurrencyAccountsCard: React.FC = () => (
  <FeatureCard
    title="Multicurrency Accounts"
    description="Let your global clients pay you directly in multiple currencies – easy, fast, and friction-free."
    visual={<MulticurrencyVisual />}
  />
);

export default MulticurrencyAccountsCard;