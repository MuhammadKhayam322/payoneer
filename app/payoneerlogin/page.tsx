"use client";
import React, { useState } from "react";

export default function PayoneerLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* ── LEFT PANEL ── */}
      <div
        style={{
          width: "420px",
          minWidth: "320px",
          flexShrink: 0,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px 48px 28px",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        {/* Top: Logo + Form */}
        <div>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "80px" }}>
            {/* Payoneer rainbow ring icon */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="15" fill="none" stroke="url(#ring)" strokeWidth="4" />
              <defs>
                <linearGradient id="ring" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#e84040" />
                  <stop offset="25%" stopColor="#e040e8" />
                  <stop offset="50%" stopColor="#4060e8" />
                  <stop offset="75%" stopColor="#40c8c8" />
                  <stop offset="100%" stopColor="#40c840" />
                </linearGradient>
              </defs>
            </svg>
            <span style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a2e", letterSpacing: "-0.3px" }}>
              Payoneer
            </span>
          </div>

          {/* Email field */}
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1.5px solid #ccc",
                paddingBottom: "8px",
              }}
            >
              <input
                type="text"
                placeholder="Email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "15px",
                  color: "#333",
                  background: "transparent",
                }}
              />
              {/* Info icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="8" strokeLinecap="round" strokeWidth="2.5" />
                <line x1="12" y1="12" x2="12" y2="16" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Password field */}
          <div style={{ marginBottom: "12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1.5px solid #ccc",
                paddingBottom: "8px",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "15px",
                  color: "#333",
                  background: "transparent",
                }}
              />
              {/* Eye icon */}
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                aria-label="Toggle password visibility"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.8">
                  {showPassword ? (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  ) : (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <a
            href="#"
            style={{
              display: "inline-block",
              fontSize: "13px",
              color: "#1a6bcc",
              textDecoration: "none",
              marginBottom: "28px",
            }}
          >
            Forgot password?
          </a>

          {/* Sign in button */}
          <button
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#1565d8",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 700,
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginBottom: "20px",
              letterSpacing: "0.2px",
            }}
          >
            Sign in
          </button>

          {/* Sign up */}
          <p style={{ textAlign: "center", fontSize: "14px", color: "#333" }}>
            New to Payoneer?{" "}
            <a href="#" style={{ color: "#1565d8", fontWeight: 600, textDecoration: "none" }}>
              Sign up!
            </a>
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "12px",
            color: "#888",
            flexWrap: "wrap",
          }}
        >
          <span>© 2005-2026 Payoneer Inc.</span>
          <span style={{ color: "#ccc" }}>|</span>
          <a href="#" style={{ color: "#888", textDecoration: "none" }}>Contact Us</a>
          <span style={{ color: "#ccc" }}>|</span>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>English ▾</span>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #e8edf8 0%, #f0f4fa 30%, #dde8f5 60%, #c8d8f0 80%, #a0b8e8 100%)",
        }}
      >
        {/* Blue arc on far right */}
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-80px",
            width: "520px",
            height: "120%",
            background: "linear-gradient(180deg, #3b82f6 0%, #6366f1 50%, #a855f7 100%)",
            borderRadius: "50%",
            opacity: 0.9,
          }}
        />

        {/* Concentric arcs */}
        {[380, 300, 220, 150].map((r, i) => (
          <svg
            key={i}
            style={{ position: "absolute", top: "50%", left: "30%", transform: "translate(-50%, -50%)", pointerEvents: "none" }}
            width={r * 2}
            height={r * 2}
            viewBox={`0 0 ${r * 2} ${r * 2}`}
          >
            <circle
              cx={r}
              cy={r}
              r={r - 4}
              fill="none"
              stroke="rgba(180,190,220,0.35)"
              strokeWidth="1.2"
            />
          </svg>
        ))}

        {/* Curved lines */}
        <svg
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          viewBox="0 0 900 630"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Red arc */}
          <path
            d="M 200 -20 Q 500 200 600 630"
            fill="none"
            stroke="rgba(220,60,60,0.5)"
            strokeWidth="1.5"
          />
          {/* Teal arc */}
          <path
            d="M 300 -20 Q 620 200 720 630"
            fill="none"
            stroke="rgba(0,180,150,0.5)"
            strokeWidth="1.5"
          />
        </svg>

        {/* Floating orbs */}
        {/* Red-orange orb top-left area */}
        <div
          style={{
            position: "absolute",
            top: "11%",
            left: "28%",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #ff6060, #cc2020)",
            boxShadow: "0 8px 24px rgba(200,40,40,0.4)",
          }}
        />
        {/* Teal orb top-center */}
        <div
          style={{
            position: "absolute",
            top: "13%",
            left: "55%",
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #20e8c0, #10a090)",
            boxShadow: "0 6px 18px rgba(20,160,140,0.45)",
          }}
        />
        {/* Small red orb right */}
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "72%",
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #ff8080, #dd3030)",
            boxShadow: "0 4px 12px rgba(200,40,40,0.4)",
          }}
        />
        {/* Teal orb bottom-center */}
        <div
          style={{
            position: "absolute",
            top: "72%",
            left: "58%",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #20e8c0, #10a090)",
            boxShadow: "0 6px 18px rgba(20,160,140,0.45)",
          }}
        />
      </div>
    </div>
  );
}