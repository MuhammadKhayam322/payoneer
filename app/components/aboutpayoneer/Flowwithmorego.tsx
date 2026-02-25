"use client";
import React from "react";

export default function FlowWithMoreGo() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #d8f0ec 0%, #e0eef8 40%, #ddd8f0 70%, #ece8f8 100%)",
        padding: "72px 64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "48px",
        flexWrap: "wrap",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        overflow: "hidden",
        boxSizing: "border-box",
        minHeight: "420px",
      }}
    >
      {/* ── LEFT: Text ── */}
      <div style={{ flex: "1 1 320px", maxWidth: "500px" }}>
        <h2
          style={{
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 800,
            color: "#1a1a2e",
            lineHeight: 1.2,
            marginBottom: "24px",
            letterSpacing: "-0.5px",
          }}
        >
          Flow with more go
        </h2>

        <p style={{ fontSize: "15px", color: "#333", lineHeight: 1.85, marginBottom: "20px", maxWidth: "440px" }}>
          We make trade flow faster and easier for everyone, everywhere. We
          serve markets that others don&apos;t. We solve problems that others
          cannot by tackling them head-on, always innovating and simplifying
          complexity.
        </p>

        <p style={{ fontSize: "15px", color: "#333", lineHeight: 1.85, marginBottom: "36px", maxWidth: "440px" }}>
          On the way, we&apos;re meeting the needs of millions of businesses
          who, like us, aren&apos;t stuck with the slow status quo. We&apos;re
          out there imagining, engineering, and unlocking a universe of
          opportunities – and opening it to you.
        </p>

        <a
          href="#"
          style={{
            display: "inline-block",
            backgroundColor: "#1a1a2e",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 700,
            padding: "14px 36px",
            borderRadius: "50px",
            textDecoration: "none",
            letterSpacing: "0.2px",
          }}
        >
          Register now
        </a>
      </div>

      {/* ── RIGHT: Network graphic ── */}
      <div
        style={{
          flex: "0 0 auto",
          width: "420px",
          height: "380px",
          position: "relative",
        }}
      >
        {/* Concentric rings */}
        {[300, 220, 140].map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              border: "1px solid rgba(140,160,200,0.25)",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Center Payoneer hub */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ff5c5c, #e0206a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 18px rgba(220,40,80,0.35)",
            zIndex: 3,
          }}
        >
          {/* Grid icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>

        {/* Curved connecting lines (SVG) */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }}
          viewBox="0 0 420 380"
        >
          {/* line to top-left avatar */}
          <path d="M 210 190 Q 180 150 165 120" fill="none" stroke="rgba(100,180,160,0.6)" strokeWidth="1.5" />
          {/* line to bottom avatar */}
          <path d="M 210 190 Q 220 250 225 290" fill="none" stroke="rgba(220,80,80,0.6)" strokeWidth="1.5" />
        </svg>

        {/* Top-left: Woman avatar */}
        <div
          style={{
            position: "absolute",
            top: "68px",
            left: "138px",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "6px",
          }}
        >
          <div style={{ ...avatarStyle(56), background: "linear-gradient(135deg, #a0e0c0, #60c0a0)" }}>
            <img
              src="https://i.pravatar.cc/56?img=47"
              alt="user"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
          {/* Payment chip */}
          <div style={chipStyle}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e84040" strokeWidth="2">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
            </svg>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a2e", margin: 0 }}>750 USD</p>
              <p style={{ fontSize: "10px", color: "#888", margin: 0 }}>Sent</p>
            </div>
          </div>
        </div>

        {/* Bottom: Man avatar */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "175px",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "6px",
          }}
        >
          <div style={{ ...avatarStyle(60), background: "linear-gradient(135deg, #c0a0f0, #a060e0)" }}>
            <img
              src="https://i.pravatar.cc/60?img=12"
              alt="user"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
          {/* Payment chip */}
          <div style={chipStyle}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#40c080" strokeWidth="2">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M2 10h20" />
            </svg>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a2e", margin: 0 }}>1,200 USD</p>
              <p style={{ fontSize: "10px", color: "#888", margin: 0 }}>Received</p>
            </div>
          </div>
        </div>

        {/* Right: man avatar (dark) */}
        <div
          style={{
            position: "absolute",
            top: "130px",
            right: "24px",
            zIndex: 4,
          }}
        >
          <div style={{ ...avatarStyle(54), background: "linear-gradient(135deg, #4060c0, #2040a0)" }}>
            <img
              src="https://i.pravatar.cc/54?img=8"
              alt="user"
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
        </div>

        {/* Google icon badge */}
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "80px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
            zIndex: 4,
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </div>

        {/* Upwork badge */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            right: "20px",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            backgroundColor: "#6fda44",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
            zIndex: 4,
            color: "#fff",
            fontSize: "13px",
            fontWeight: 800,
          }}
        >
          up
        </div>
      </div>
    </section>
  );
}

// Avatar container style
const avatarStyle = (size: number): React.CSSProperties => ({
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "50%",
  overflow: "hidden",
  border: "3px solid #fff",
  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
  flexShrink: 0,
});

// Payment chip style
const chipStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "6px 10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
  whiteSpace: "nowrap",
};