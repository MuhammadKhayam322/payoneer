"use client";

import { useState, ReactNode, ReactElement } from "react";

// ── TYPES ─────────────────────────────────────────────────────────
interface Feature {
  iconBg: string | null;
  icon: ReactNode;
  title: string;
  description: string;
  link: string | null;
}

interface TabEntry {
  features: Feature[];
  Card: () => ReactElement;
}

interface TransactionRow {
  real: boolean;
  date?: string;
  desc?: string;
  status?: string;
  amount?: string;
  amountColor?: string;
  balance?: string;
}

// ── CONSTANTS ─────────────────────────────────────────────────────
const tabs: string[] = ["Get paid", "Pay and use funds", "Go further, faster"];

// ── TAB 0 FEATURES ────────────────────────────────────────────────
const getPaidFeatures: Feature[] = [
  {
    iconBg: "#3b82f6",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: "Billing's a breeze",
    description: "Overseas doesn't mean overcomplicated. With a few clicks, request payments from nearly anyone, anywhere and leave the rest to us.",
    link: null,
  },
  {
    iconBg: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Your payments feel local",
    description: "Local receiving accounts and flexible payment methods give your clients a better, more convenient paying experience.",
    link: "Explore more",
  },
  {
    iconBg: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    ),
    title: "Your business is global",
    description: "When customers and clients can pay you from anywhere, you can do business internationally with ease.",
    link: null,
  },
];

// ── TAB 1 FEATURES ────────────────────────────────────────────────
const payFeatures: Feature[] = [
  {
    iconBg: "#3b82f6",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    title: "Make payments",
    description: "If you need to scale up with sub-contractors, you can send payments directly to their bank accounts from your Payoneer account.",
    link: "Explore more",
  },
  {
    iconBg: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Pay your way",
    description: "Need a card for business? We'll give you a physical or virtual card (or both!) in multiple currencies attached to your account.",
    link: "Explore more",
  },
  {
    iconBg: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="12 5 12 19" />
        <polyline points="5 12 12 19 19 12" />
      </svg>
    ),
    title: "Withdrawing money",
    description: "Get the flexibility you need. Withdraw funds from your Payoneer account to your bank account in over 190 countries and 70 currencies or at ATMs, worldwide.",
    link: "Explore more",
  },
];

// ── TAB 2 FEATURES ────────────────────────────────────────────────
const goFurtherFeatures: Feature[] = [
  {
    iconBg: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Keep an eye on your finances",
    description: "Payoneer lets you track your payments and download monthly reports so it's easy to stay up to date.",
    link: null,
  },
  {
    iconBg: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Save like a local",
    description: "There are no lengthy or costly international wire transfers to think about. With Payoneer you can get paid quickly and simply, as if you were a local.",
    link: "Explore more",
  },
  {
    iconBg: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: "Open Marketplace opportunities",
    description: "With connections to virtually all the leading freelance marketplaces, Payoneer lets you expand global business as you wish.",
    link: "Explore more",
  },
];

// ── CARD: GET PAID ────────────────────────────────────────────────
function GetPaidCard(): ReactElement {
  const fields: { icon: string; label: string; value: string | null }[] = [
    { icon: "👤", label: "Payer name", value: "Floyd Parker" },
    { icon: "✉️", label: "Payer email", value: "floyd@floydco.com" },
    { icon: "📅", label: "Payment due date", value: null },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#fce4ec 0%,#e8eaf6 60%,#f3e5f5 100%)",
        borderRadius: "20px",
        padding: "32px",
        width: "100%",
        maxWidth: "340px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "24px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px" }}>
          Amount requested
        </p>
        <div
          style={{
            background: "#dcfce7",
            borderRadius: "8px",
            padding: "10px 16px",
            marginBottom: "20px",
            display: "inline-block",
          }}
        >
          <span style={{ fontSize: "22px", fontWeight: "700", color: "#16a34a" }}>
            500.00 USD
          </span>
        </div>

        {fields.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 0",
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "14px" }}>{row.icon}</span>
              <span style={{ fontSize: "13px", color: "#6b7280" }}>{row.label}</span>
            </div>
            {row.value ? (
              <span style={{ fontSize: "13px", color: "#374151", fontWeight: "500" }}>
                {row.value}
              </span>
            ) : (
              <div style={{ display: "flex", gap: "6px" }}>
                <div style={{ width: "50px", height: "10px", borderRadius: "4px", background: "#e5e7eb" }} />
                <div style={{ width: "36px", height: "10px", borderRadius: "4px", background: "#e5e7eb" }} />
              </div>
            )}
          </div>
        ))}

        <button
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "14px",
            borderRadius: "8px",
            background: "#4b5563",
            color: "#fff",
            border: "none",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Request payment
        </button>
      </div>
    </div>
  );
}

// ── CARD: PAY AND USE FUNDS ───────────────────────────────────────
function PayAndUseFundsCard(): ReactElement {
  const summaryRows: { label: string }[] = [
    { label: "Fee (3%)" },
    { label: "Recipient gets" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#ede9fe 0%,#dbeafe 60%,#e0f2fe 100%)",
        borderRadius: "20px",
        padding: "32px",
        width: "100%",
        maxWidth: "340px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "24px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        {/* Top row: avatar + green badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#e5e7eb",
              }}
            />
            <div>
              <div
                style={{
                  width: "80px",
                  height: "10px",
                  borderRadius: "4px",
                  background: "#e5e7eb",
                  marginBottom: "5px",
                }}
              />
              <div
                style={{
                  width: "55px",
                  height: "8px",
                  borderRadius: "4px",
                  background: "#f3f4f6",
                }}
              />
            </div>
          </div>
          <div
            style={{
              background: "#dcfce7",
              borderRadius: "8px",
              padding: "6px 12px",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "700", color: "#16a34a" }}>
              600.00 USD
            </span>
          </div>
        </div>

        <p
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#1a1a1a",
            marginBottom: "4px",
          }}
        >
          Payment summary
        </p>

        {summaryRows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 0",
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <span style={{ fontSize: "13px", color: "#6b7280" }}>{row.label}</span>
            <div
              style={{
                width: "80px",
                height: "10px",
                borderRadius: "4px",
                background: "#e5e7eb",
              }}
            />
          </div>
        ))}

        {/* Total row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 0",
            borderTop: "1px solid #f3f4f6",
          }}
        >
          <div>
            <p style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a1a", margin: 0 }}>
              Total payment
            </p>
            <p style={{ fontSize: "11px", color: "#9ca3af", margin: "3px 0 0" }}>
              Usually paid in 2 calendar days
            </p>
          </div>
          <span style={{ fontSize: "18px", fontWeight: "800", color: "#1a1a1a" }}>
            618.00 USD
          </span>
        </div>
      </div>
    </div>
  );
}

// ── CARD: GO FURTHER, FASTER ──────────────────────────────────────
function GoFurtherCard(): ReactElement {
  const rows: TransactionRow[] = [
    {
      real: true,
      date: "18 Sep",
      desc: "Anthony James",
      status: "Completed",
      amount: "2,530.00 EUR",
      amountColor: "#16a34a",
      balance: "EUR balance",
    },
    {
      real: true,
      date: "16 Sep",
      desc: "Withdrawal",
      status: "Completed",
      amount: "1,789.00 USD",
      amountColor: "#1a1a1a",
      balance: "USD balance",
    },
    { real: false },
    { real: false },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#fef9c3 0%,#fce7f3 50%,#e0f2fe 100%)",
        borderRadius: "20px",
        padding: "32px",
        width: "100%",
        maxWidth: "380px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "24px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2px",
          }}
        >
          <p style={{ fontSize: "15px", fontWeight: "700", color: "#1a1a1a", margin: 0 }}>
            Transactions activity
          </p>
          <div style={{ display: "flex", gap: "4px" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#d1d5db",
                }}
              />
            ))}
          </div>
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "14px" }}>
          Your transactions list
        </p>

        {/* Column headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "52px 1fr 90px 80px 16px",
            gap: "6px",
            paddingBottom: "8px",
            borderBottom: "1px solid #f3f4f6",
          }}
        >
          {["Date", "Description", "Amount", "Balance", ""].map((h, i) => (
            <span key={i} style={{ fontSize: "11px", color: "#9ca3af", fontWeight: "600" }}>
              {h}
            </span>
          ))}
        </div>

        {/* Transaction rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "52px 1fr 90px 80px 16px",
              gap: "6px",
              padding: "12px 0",
              borderBottom: "1px solid #f9fafb",
              alignItems: "center",
            }}
          >
            {row.real ? (
              <>
                <span style={{ fontSize: "12px", color: "#6b7280" }}>{row.date}</span>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "600", color: "#1a1a1a", margin: 0 }}>
                    {row.desc}
                  </p>
                  <p style={{ fontSize: "11px", color: "#9ca3af", margin: "2px 0 0" }}>
                    {row.status}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: row.amountColor ?? "#1a1a1a",
                  }}
                >
                  {row.amount}
                </span>
                <span style={{ fontSize: "11px", color: "#6b7280" }}>{row.balance}</span>
                <span style={{ color: "#9ca3af", fontSize: "14px" }}>›</span>
              </>
            ) : (
              <>
                {[0, 1, 2, 3].map((j) => (
                  <div
                    key={j}
                    style={{
                      height: "10px",
                      borderRadius: "4px",
                      background: "#f3f4f6",
                    }}
                  />
                ))}
                <span style={{ color: "#e5e7eb", fontSize: "14px" }}>›</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── TAB DATA MAP ──────────────────────────────────────────────────
const tabData: TabEntry[] = [
  { features: getPaidFeatures, Card: GetPaidCard },
  { features: payFeatures, Card: PayAndUseFundsCard },
  { features: goFurtherFeatures, Card: GoFurtherCard },
];

// ── MAIN EXPORT ───────────────────────────────────────────────────
export default function FreelancerFeatures() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { features, Card } = tabData[activeTab];

  return (
    <section
      style={{
        background: "#fafafa",
        padding: "60px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "clamp(22px, 2.5vw, 32px)",
          fontWeight: "700",
          color: "#1a1a1a",
          marginBottom: "32px",
          letterSpacing: "-0.3px",
        }}
      >
        The ideal account for freelancers
      </h2>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid #e5e7eb",
          marginBottom: "56px",
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            style={{
              background: "none",
              border: "none",
              padding: "12px 36px",
              fontSize: "15px",
              fontWeight: activeTab === i ? "600" : "400",
              color: activeTab === i ? "#1a1a1a" : "#6b7280",
              cursor: "pointer",
              borderBottom: activeTab === i ? "3px solid #22c55e" : "3px solid transparent",
              marginBottom: "-1px",
              transition: "all 0.2s",
              borderRight: i < tabs.length - 1 ? "1px solid #e5e7eb" : "none",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "80px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {/* Left: Feature list */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {features.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: f.iconBg ?? "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: f.iconBg ? "none" : "1.5px solid #e5e7eb",
                }}
              >
                {f.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    marginBottom: "6px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#6b7280",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {f.description}
                </p>
                {f.link && (
                  <a
                    href="#"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "14px",
                      color: "#3b82f6",
                      fontWeight: "500",
                      textDecoration: "none",
                      marginTop: "8px",
                    }}
                  >
                    {f.link} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Dynamic card */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card />
        </div>
      </div>
    </section>
  );
}