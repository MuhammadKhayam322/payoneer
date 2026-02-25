"use client";
import React, { useState } from "react";

export default function PayoneerRegister() {
  const [selected, setSelected] = useState(true);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0f2f7",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* ── NAVBAR ── */}
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e8e8ee",
          padding: "14px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" fill="none" stroke="url(#navRing)" strokeWidth="4" />
            <defs>
              <linearGradient id="navRing" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#e84040" />
                <stop offset="25%" stopColor="#e040e8" />
                <stop offset="50%" stopColor="#4060e8" />
                <stop offset="75%" stopColor="#40c8c8" />
                <stop offset="100%" stopColor="#40c840" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a2e", letterSpacing: "-0.2px" }}>
            Payoneer
          </span>
        </div>

        {/* Sign In link */}
        <a
          href="#"
          style={{ fontSize: "15px", color: "#1a1a2e", textDecoration: "none", fontWeight: 500 }}
        >
          Sign In
        </a>
      </header>

      {/* ── HERO ── */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "72px 24px 80px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 800,
            color: "#1a1a2e",
            textAlign: "center",
            marginBottom: "14px",
            letterSpacing: "-0.5px",
          }}
        >
          Let&apos;s get you registered
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#555",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          Start by telling us what your business will use Payoneer for
        </p>

        {/* Selection card */}
        <a
          href="/register/business"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setSelected(true)}
          style={{
            width: "100%",
            maxWidth: "680px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            border: selected ? "2px solid #1565d8" : "2px solid #e0e0ea",
            cursor: "pointer",
            overflow: "hidden",
            boxShadow: selected
              ? "0 4px 24px rgba(21,101,216,0.10)"
              : "0 2px 12px rgba(0,0,0,0.06)",
            transition: "border-color 0.2s, box-shadow 0.2s",
            textDecoration: "none",
            display: "block",
          }}
        >
          {/* Card content */}
          <div style={{ padding: "28px 32px", textAlign: "center" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: "6px",
              }}
            >
              To get paid, send payments, and more
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Get our full range of global payment services
            </p>
          </div>

          {/* Multicolor bottom bar */}
          <div
            style={{
              height: "4px",
              background:
                "linear-gradient(to right, #e84040, #e040e8, #4060e8, #40a0e8, #40c8c8, #40c840)",
            }}
          />
        </a>

        {/* Disclaimer */}
        <p
          style={{
            marginTop: "32px",
            fontSize: "14px",
            color: "#555",
            textAlign: "center",
            maxWidth: "560px",
            lineHeight: 1.6,
          }}
        >
          Looking to get funds from or send payments to friends and family?{" "}
          <strong style={{ color: "#1a1a2e" }}>Payoneer is for businesses only.</strong>
        </p>
      </main>

      {/* ── BOTTOM MULTICOLOR BAR ── */}
      <div
        style={{
          height: "4px",
          background:
            "linear-gradient(to right, #e84040, #e040e8, #4060e8, #40a0e8, #40c8c8, #40c840)",
        }}
      />
    </div>
  );
}