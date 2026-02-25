"use client";

import { useRef, useState, ReactElement } from "react";

interface Card {
  icon: ReactElement;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Join the network",
    description:
      "When you join with Payoneer, you're with something big, as are millions of businesses and platforms around the globe.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 10h2" />
        <path d="M11 10h6" />
        <path d="M7 14h10" />
      </svg>
    ),
    title: "Integrate with marketplaces",
    description:
      "We're integrated with 2,000 marketplaces, networks, and platforms like Web, Etsy, Airbnb, Fiverr, and Upwork. With such connections, you're free to grow.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Work like a local",
    description:
      "There are no lengthy or costly international wire transfers to think about. With Payoneer you can get paid quickly and simply, as if you were a local.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "The funds you need",
    description:
      "There are only time the network, we can also give you access to up to 750,000 USD to grasp opportunities to communities with Payoneer's Capital Advance.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fdba74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "With you at every step",
    description:
      "Our global teams are ready to talk everything business payments in your language. We speak more than 20+ languages.",
  },
];

const CARD_WIDTH = 220;
const CARD_GAP = 16;
const SCROLL_AMOUNT = CARD_WIDTH + CARD_GAP;

export default function ExpandBusinessNetwork(): ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? SCROLL_AMOUNT : -SCROLL_AMOUNT, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  return (
    <section
      style={{
        background: "linear-gradient(160deg, #0a0f1e 0%, #0d1b2a 50%, #0f1923 100%)",
        padding: "60px 0 60px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Left text block */}
      <div style={{ padding: "0 60px", maxWidth: "420px", marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "clamp(22px, 2.8vw, 32px)",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "16px",
            letterSpacing: "-0.3px",
            lineHeight: 1.2,
          }}
        >
          Expand your business network
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.75,
          }}
        >
          Open up your business to any market and feel confident that Payoneer has
          the local currency and regulations covered. One account connects you to the
          many partners, markets, and customers who already trust us with their business
          payments.
        </p>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        style={{
          display: "flex",
          gap: `${CARD_GAP}px`,
          overflowX: "auto",
          scrollbarWidth: "none",
          padding: "0 60px",
          // hide scrollbar cross-browser
          msOverflowStyle: "none",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              minWidth: `${CARD_WIDTH}px`,
              maxWidth: `${CARD_WIDTH}px`,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "14px",
              padding: "24px 20px",
              flexShrink: 0,
              backdropFilter: "blur(6px)",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)")
            }
          >
            {/* Icon */}
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              {card.icon}
            </div>

            <h3
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "10px",
                lineHeight: 1.3,
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {card.description}
            </p>
          </div>
        ))}

        {/* Spacer so last card doesn't sit at edge */}
        <div style={{ minWidth: "40px", flexShrink: 0 }} />
      </div>

      {/* Scroll arrows */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          padding: "28px 60px 0",
        }}
      >
        {[
          { dir: "left" as const, enabled: canScrollLeft, label: "‹" },
          { dir: "right" as const, enabled: canScrollRight, label: "›" },
        ].map(({ dir, enabled, label }) => (
          <button
            key={dir}
            onClick={() => scroll(dir)}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: enabled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.03)",
              color: enabled ? "#ffffff" : "rgba(255,255,255,0.25)",
              fontSize: "18px",
              cursor: enabled ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
              transition: "background 0.2s, color 0.2s",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}