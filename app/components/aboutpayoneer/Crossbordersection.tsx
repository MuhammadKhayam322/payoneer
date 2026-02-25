"use client";
import React from "react";

export default function CrossBorderSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #f8f0fa 0%, #e8f5f0 30%, #e0f0f8 60%, #eef0fa 100%)",
        padding: "72px 64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "48px",
        flexWrap: "wrap",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        overflow: "hidden",
        boxSizing: "border-box",
        minHeight: "380px",
      }}
    >
      {/* ── LEFT: Text ── */}
      <div style={{ flex: "1 1 320px", maxWidth: "520px" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "#1a1a2e",
            lineHeight: 1.2,
            marginBottom: "28px",
            letterSpacing: "-0.5px",
          }}
        >
          We simplify cross-<br />border trade
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: 1.85,
            maxWidth: "460px",
          }}
        >
          As you can imagine, it&apos;s been quite a journey to simplify global
          commerce. We&apos;re levelling the playing field, so that businesses
          of all sizes can trade securely, conveniently, and at low cost all
          around the world. So, here are some of the stats, milestones, and
          highlights, plus more about who we are and what we stand for.
        </p>
      </div>

      {/* ── RIGHT: Animated Orb Graphic ── */}
      <div
        style={{
          flex: "0 0 auto",
          width: "380px",
          height: "380px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            position: "absolute",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            border: "1px solid rgba(100,180,200,0.35)",
            animation: "spin 18s linear infinite",
          }}
        />
        {/* Middle ring */}
        <div
          style={{
            position: "absolute",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            border: "1px solid rgba(160,200,220,0.3)",
            animation: "spinReverse 14s linear infinite",
          }}
        />

        {/* Center rainbow ring orb */}
        <div
          style={{
            position: "relative",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 8px 40px rgba(100,100,200,0.18), 0 2px 12px rgba(0,0,0,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="rainbowRing" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4040" />
                <stop offset="20%" stopColor="#ff8800" />
                <stop offset="40%" stopColor="#ffe000" />
                <stop offset="60%" stopColor="#40cc40" />
                <stop offset="80%" stopColor="#4080ff" />
                <stop offset="100%" stopColor="#cc40ff" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#rainbowRing)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="220 40"
            />
          </svg>
        </div>

        {/* Floating orbs */}
        {/* Red small - top center */}
        <div style={{ position: "absolute", top: "38px", left: "50%", transform: "translateX(-50%)", ...orbStyle("#e84040", 10) }} />
        {/* Teal - top right */}
        <div style={{ position: "absolute", top: "55px", right: "72px", ...orbStyle("#20c8b0", 16) }} />
        {/* Red medium - right center */}
        <div style={{ position: "absolute", top: "50%", right: "30px", transform: "translateY(-50%)", ...orbStyle("#e84040", 20) }} />
        {/* Pink/magenta - bottom right */}
        <div style={{ position: "absolute", bottom: "80px", right: "60px", ...orbStyle("linear-gradient(135deg,#e060c0,#c030a0)", 28, true) }} />
        {/* Teal large - bottom right */}
        <div style={{ position: "absolute", bottom: "65px", right: "20px", ...orbStyle("#20b0d0", 30) }} />
        {/* White/pearl - bottom center */}
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", ...orbStyle("#e0e4f0", 18) }} />
        {/* White/pearl small - bottom left */}
        <div style={{ position: "absolute", bottom: "80px", left: "70px", ...orbStyle("#d0d8ee", 12) }} />
        {/* Teal - left */}
        <div style={{ position: "absolute", top: "50%", left: "28px", transform: "translateY(-50%)", ...orbStyle("#20c0c8", 22) }} />
        {/* Red dot - left upper */}
        <div style={{ position: "absolute", top: "100px", left: "60px", ...orbStyle("#e84040", 8) }} />

        {/* CSS animations */}
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spinReverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>
      </div>
    </section>
  );
}

// Helper for orb styles
function orbStyle(
  color: string,
  size: number,
  isGradient = false
): React.CSSProperties {
  return {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    background: isGradient ? color : color,
    boxShadow: `0 3px 12px rgba(0,0,0,0.15)`,
    flexShrink: 0,
  };
}