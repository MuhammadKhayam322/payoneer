"use client";

import { ReactElement } from "react";

export default function BusinessPaymentsHero(): ReactElement {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #f0f4ff 0%, #fce4ec 40%, #e8eaf6 70%, #f8f9ff 100%)",
        minHeight: "420px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "48px 80px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* ── Background blobs ── */}

      {/* Top-left pink/red blob */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          left: "-60px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #f48fb1, #f06292)",
          filter: "blur(55px)",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      {/* Bottom-right purple/blue blob */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-40px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #9575cd, #5c6bc0)",
          filter: "blur(60px)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* ── Left content ── */}
      <div style={{ flex: 1, zIndex: 1, maxWidth: "520px" }}>
        <h1
          style={{
            fontSize: "clamp(48px, 3.5vw, 46px)",
            fontWeight: "400",
            lineHeight: 1.15,
            marginBottom: "20px",
            letterSpacing: "-0.5px",
          }}
        >
          {/* "Smart & Secure" — purple to pink gradient */}
          <span
            style={{
              background: "linear-gradient(90deg, #7c3aed, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Smart &amp; Secure{" "}
          </span>
          {/* "Business Payments" — teal to blue gradient */}
          <span
            style={{
              background: "linear-gradient(90deg, #0d9488, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              fontWeight: "700",
            }}
          >
            Business
          
            Payments
          </span>
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#4b5563",
            lineHeight: 1.75,
            maxWidth: "420px",
            marginBottom: "36px",
          }}
        >
          Send and receive cross-border payments wherever your business operates.
          Every Payoneer account features a variety of reliable services and tools
          that can simplify the way you work with your global clients, contractors,
          and suppliers.
        </p>

        <button
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "16px 36px",
            fontSize: "15px",
            fontWeight: "700",
            cursor: "pointer",
            letterSpacing: "0.3px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#333")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLButtonElement).style.background = "#111")
          }
        >
          Sign up now
        </button>
      </div>

      {/* ── Right image / illustration ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Outer large translucent circle */}
        <div
          style={{
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Inner circle with gradient bg */}
          <div
            style={{
              width: "275px",
              height: "275px",
              borderRadius: "50%",
              background: "linear-gradient(160deg, #b39ddb 0%, #ce93d8 50%, #9fa8da 100%)",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {/*
              Replace this placeholder with your actual image:
              <Image
                src="/business-woman.png"
                alt="Business woman"
                width={275}
                height={275}
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
                textAlign: "center",
                padding: "20px",
              }}
            >
              Place business woman image here
            </div>
          </div>

          {/* Teal dot — top right */}
          <div
            style={{
              position: "absolute",
              top: "36px",
              right: "48px",
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#0d9488",
            }}
          />

          {/* Red dot — bottom center-left */}
          <div
            style={{
              position: "absolute",
              bottom: "64px",
              left: "80px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#e53935",
            }}
          />

          {/* Globe icon badge — left middle */}
          <div
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}