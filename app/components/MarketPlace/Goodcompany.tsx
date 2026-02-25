"use client";

import { ReactElement, useEffect, useRef, useState } from "react";

// ── LOGO COMPONENTS ───────────────────────────────────────────────
function AirbnbLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="#FF5A5F">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c1.243 0 2.25 1.007 2.25 2.25S13.243 9 12 9 9.75 7.993 9.75 6.75 10.757 4.5 12 4.5zm5.25 13.5H6.75v-.75c0-2.9 2.35-5.25 5.25-5.25s5.25 2.35 5.25 5.25v.75z" />
      </svg>
      <span style={{ fontSize: "20px", fontWeight: "600", color: "#FF5A5F", letterSpacing: "-0.5px" }}>airbnb</span>
    </div>
  );
}

function WalmartLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <span style={{ fontSize: "20px", fontWeight: "700", color: "#0071CE" }}>Walmart</span>
      <svg width="18" height="18" viewBox="0 0 24 24">
        <g fill="#FFC220">
          <circle cx="12" cy="2"  r="2" /><circle cx="12" cy="22" r="2" />
          <circle cx="2"  cy="12" r="2" /><circle cx="22" cy="12" r="2" />
          <circle cx="5.5"  cy="5.5"  r="1.8" /><circle cx="18.5" cy="18.5" r="1.8" />
          <circle cx="18.5" cy="5.5"  r="1.8" /><circle cx="5.5"  cy="18.5" r="1.8" />
        </g>
      </svg>
    </div>
  );
}

function FiverrLogo() {
  return (
    <span style={{ fontSize: "22px", fontWeight: "900", color: "#1DBF73", letterSpacing: "-1px" }}>
      fiverr<span style={{ color: "#222" }}>.</span>
    </span>
  );
}

function VisaLogo() {
  return (
    <span style={{ fontSize: "22px", fontWeight: "900", color: "#1A1F71", letterSpacing: "1px", fontStyle: "italic" }}>
      VISA
    </span>
  );
}

function TaboolaLogo() {
  return (
    <span style={{ fontSize: "20px", fontWeight: "700", color: "#333" }}>
      Tab<span style={{ color: "#e8343a" }}>oo</span>la
    </span>
  );
}

function TuneCoreLogo() {
  return (
    <span style={{ fontSize: "20px", fontWeight: "600", color: "#222" }}>
      tune<span style={{ fontWeight: "900" }}>CORE</span>
    </span>
  );
}

function UpworkLogo() {
  return (
    <span style={{ fontSize: "20px", fontWeight: "800", color: "#14a800" }}>
      Up<span style={{ color: "#222" }}>work</span>
    </span>
  );
}

function EtsyLogo() {
  return (
    <span style={{ fontSize: "22px", fontWeight: "700", color: "#F56400" }}>etsy</span>
  );
}

function AmazonLogo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
      <span style={{ fontSize: "20px", fontWeight: "700", color: "#232F3E" }}>amazon</span>
      <div style={{ width: "58px", height: "3px", background: "linear-gradient(90deg,#FF9900 60%,transparent)", borderRadius: "2px", marginTop: "2px" }} />
    </div>
  );
}

function ShopifyLogo() {
  return (
    <span style={{ fontSize: "20px", fontWeight: "700", color: "#222" }}>shopify</span>
  );
}

// ── DATA ──────────────────────────────────────────────────────────
const LOGOS = [
  { id: "airbnb",   C: AirbnbLogo },
  { id: "walmart",  C: WalmartLogo },
  { id: "fiverr",   C: FiverrLogo },
  { id: "visa",     C: VisaLogo },
  { id: "taboola",  C: TaboolaLogo },
  { id: "tunecore", C: TuneCoreLogo },
  { id: "upwork",   C: UpworkLogo },
  { id: "etsy",     C: EtsyLogo },
  { id: "amazon",   C: AmazonLogo },
  { id: "shopify",  C: ShopifyLogo },
];

const CARD_W   = 180;   // width per logo slot
const GAP      = 40;    // gap between logos
const STEP     = CARD_W + GAP;
const PAUSE_MS = 2500;  // pause between slides
const SLIDE_MS = 600;   // slide animation duration

export default function GoodCompany(): ReactElement {
  const [offset, setOffset]   = useState(0);
  const [sliding, setSliding] = useState(false);
  const indexRef = useRef(0);
  const total    = LOGOS.length;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function next() {
      indexRef.current += 1;

      // Reset to start without animation once past all logos
      if (indexRef.current >= total) {
        indexRef.current = 0;
        setSliding(false);
        setOffset(0);
        timer = setTimeout(next, PAUSE_MS);
        return;
      }

      // Animate to next position
      setSliding(true);
      setOffset(-(indexRef.current * STEP));

      // After slide done, pause then move again
      timer = setTimeout(() => {
        setSliding(false);
        timer = setTimeout(next, PAUSE_MS);
      }, SLIDE_MS);
    }

    // First pause before starting
    timer = setTimeout(next, PAUSE_MS);
    return () => clearTimeout(timer);
  }, [total]);

  return (
    <section
      style={{
        background: "#fff",
        padding: "52px 0 56px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "36px", padding: "0 40px" }}>
        <p style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a1a", marginBottom: "8px" }}>
          You&apos;ll be in good company
        </p>
        <p style={{ fontSize: "14px", color: "#6b7280", maxWidth: "460px", margin: "0 auto", lineHeight: 1.6 }}>
          Here are just a few of the world&apos;s leading marketplaces that already work with us.
        </p>
      </div>

      {/* Clip container — hides overflow so logos slide in/out */}
      <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>

        {/* Left fade edge */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "100px",
          background: "linear-gradient(90deg, #fff 0%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* Right fade edge */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "100px",
          background: "linear-gradient(270deg, #fff 0%, transparent 100%)",
          zIndex: 2, pointerEvents: "none",
        }} />

        {/* Sliding logo track */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: `${GAP}px`,
            padding: "8px 60px",
            transform: `translateX(${offset}px)`,
            transition: sliding
              ? `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : "none",
            width: "max-content",
          }}
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              style={{
                minWidth: `${CARD_W}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                opacity: 0.8,
                transition: "opacity 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.opacity = "1")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.opacity = "0.8")
              }
            >
              <logo.C />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}