"use client";

import { ReactElement } from "react";

export default function SmoothExperience(): ReactElement {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #fce4ec 40%, #e8f5e9 70%, #e0f7fa 100%)",
        padding: "70px 60px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* ── LEFT COLUMN TOP: Heading + description + CTA ── */}
        <div
          style={{
            padding: "10px 32px 32px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "260px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(22px, 2.8vw, 34px)",
              fontWeight: "700",
              color: "#1a1a1a",
              lineHeight: 1.2,
              marginBottom: "18px",
              letterSpacing: "-0.3px",
            }}
          >
            A smooth experience
            <br />for your sellers
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "#6b7280",
              lineHeight: 1.75,
              marginBottom: "28px",
              maxWidth: "340px",
            }}
          >
            The Payoneer account is the account for modern online businesses, just
            like your sellers. It allows them to get paid easily in the currency of
            their choice, pay for inventory they import from overseas and get access
            to working capital.
          </p>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "#1a1a1a",
              border: "1.5px solid #1a1a1a",
              borderRadius: "50px",
              padding: "10px 22px",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
              width: "fit-content",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.background = "#1a1a1a";
              b.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.background = "transparent";
              b.style.color = "#1a1a1a";
            }}
          >
            Request a demo →
          </button>
        </div>

        {/* ── RIGHT COLUMN TOP: Give sellers flexibility ── */}
        <FeatureCard
          title="Give sellers flexibility"
          description="The Payoneer account gives sellers a set of local receiving account details, so they can get paid by global marketplaces via their preferred method and currency."
          gradient="linear-gradient(135deg, #e0f2fe 0%, #ede9fe 100%)"
          avatarGradient="linear-gradient(135deg, #c4b5fd, #818cf8)"
          accentColor="#7c3aed"
          showPaymentBadge={false}
          showInfoBadge
        />

        {/* ── LEFT COLUMN BOTTOM: Smart choices ── */}
        <FeatureCard
          title="Give sellers smart choices to manage business expenses"
          description="Sellers can get access to a physical or virtual Payoneer card to pay for ads, inventory, cloud services and more, either online or in store, anywhere Mastercard® is accepted."
          gradient="linear-gradient(135deg, #fce4ec 0%, #ffe0b2 100%)"
          avatarGradient="linear-gradient(135deg, #f48fb1, #ffb74d)"
          accentColor="#f43f5e"
          showCardWidget
        />

        {/* ── RIGHT COLUMN BOTTOM: Direct access to funds ── */}
        <FeatureCard
          title="Give sellers direct access to their funds"
          description="Give your sellers practical ways to access and use their funds, withdrawing money to their local bank account or ATMs, paying expenses, spending online and in store whenever they need."
          gradient="linear-gradient(135deg, #e0f7fa 0%, #e8eaf6 100%)"
          avatarGradient="linear-gradient(135deg, #80deea, #9fa8da)"
          accentColor="#0891b2"
          showPaymentBadge
        />
      </div>
    </section>
  );
}

// ── REUSABLE FEATURE CARD ─────────────────────────────────────────
interface FeatureCardProps {
  title: string;
  description: string;
  gradient: string;
  avatarGradient: string;
  accentColor: string;
  showPaymentBadge?: boolean;
  showInfoBadge?: boolean;
  showCardWidget?: boolean;
}

function FeatureCard({
  title,
  description,
  gradient,
  avatarGradient,
  accentColor,
  showPaymentBadge = false,
  showInfoBadge = false,
  showCardWidget = false,
}: FeatureCardProps): ReactElement {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
        border: "1px solid rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Text section */}
      <div style={{ padding: "24px 24px 0" }}>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "10px",
            lineHeight: 1.35,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "12.5px",
            color: "#6b7280",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>

      {/* Illustration area */}
      <div
        style={{
          background: gradient,
          margin: "20px 0 0",
          height: "170px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showCardWidget ? (
          /* Card widget illustration */
          <div style={{ position: "relative", width: "200px", height: "130px" }}>
            {/* Background card */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                width: "70px",
                height: "90px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #1a1a2e, #16213e)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: "28px", height: "20px", borderRadius: "4px", background: "#fbbf24", opacity: 0.9 }} />
                <svg width="28" height="18" viewBox="0 0 38 24" fill="none">
                  <circle cx="15" cy="12" r="12" fill="#eb001b" opacity="0.9" />
                  <circle cx="23" cy="12" r="12" fill="#f79e1b" opacity="0.9" />
                </svg>
              </div>
              <div>
                <div style={{ display: "flex", gap: "4px" }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: "20px", height: "6px", borderRadius: "2px", background: "rgba(255,255,255,0.3)" }} />
                  ))}
                  <div style={{ width: "28px", height: "6px", borderRadius: "2px", background: "rgba(255,255,255,0.7)" }} />
                </div>
              </div>
            </div>

            {/* Donut chart */}
            <div
              style={{
                position: "absolute",
                bottom: "0px",
                left: "0px",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                border: "10px solid transparent",
                backgroundClip: "padding-box",
                boxShadow: "0 0 0 10px #fff",
                background: `conic-gradient(${accentColor} 0% 40%, #f97316 40% 65%, #22c55e 65% 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff" }} />
            </div>

            {/* Red accent dot */}
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "0",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#f43f5e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />
            </div>

            {/* Info badge */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "0",
                background: "#fff",
                borderRadius: "8px",
                padding: "3px 2px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span style={{ fontSize: "9px", color: "#374151", fontWeight: "600" }}>Mastercard®</span>
            </div>
          </div>
        ) : (
          /* Avatar illustration */
          <div style={{ position: "relative", width: "160px", height: "140px" }}>
            {/* Outer ring */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.3)",
              }}
            />
            {/* Avatar circle */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "82px",
                height: "82px",
                borderRadius: "50%",
                background: avatarGradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "3px solid rgba(255,255,255,0.6)",
              }}
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill="rgba(255,255,255,0.8)">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>

            {/* Accent dot */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                right: "10px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                background: accentColor,
              }}
            />

            {/* Payment badge */}
            {showPaymentBadge && (
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "0",
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "5px 10px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
                <div>
                  <div style={{ fontSize: "9px", fontWeight: "700", color: "#1a1a1a", lineHeight: 1 }}>2,000 USD</div>
                  <div style={{ fontSize: "8px", color: "#9ca3af" }}>Withdrawn</div>
                </div>
              </div>
            )}

            {/* Info badge */}
            {showInfoBadge && (
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "0",
                  background: "#fff",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}