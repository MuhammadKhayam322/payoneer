import React from "react";

export default function TestimonialAndNextStep() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#fff",
        color: "#1a1a2e",
      }}
    >
      {/* ── TESTIMONIAL SECTION ── */}
      <section
        style={{
          textAlign: "center",
          padding: "64px 24px 72px",
          maxWidth: "680px",
          margin: "0 auto",
        }}
      >
        {/* eyebrow */}
        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "16px",
          }}
        >
          What they say
        </p>

        {/* heading */}
        <h2
          style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 700,
            lineHeight: 1.4,
            marginBottom: "36px",
            color: "#1a1a2e",
          }}
        >
          What do our current customers think of working with Payoneer?
          <br />
          Here&apos;s what they have to say.
        </h2>

        {/* avatar */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 16px",
            border: "3px solid #e8e8f0",
          }}
        >
          {/* Replace src with actual image */}
          <img
            src="https://i.pravatar.cc/72?img=47"
            alt="Jenny Jounni"
            width={72}
            height={72}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        {/* name & title */}
        <p style={{ fontWeight: 700, fontSize: "15px", marginBottom: "2px" }}>
          Jenny Jounni
        </p>
        <p style={{ fontSize: "13px", color: "#888", marginBottom: "24px" }}>
          Founder and Owner, KaraStore
        </p>

        {/* quote */}
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "#444",
            maxWidth: "580px",
            margin: "0 auto",
          }}
        >
          Payoneer has helped me build my brand KaraStore on the global market
          and my sales have since been increasing steadily. Without Payoneer, I
          would never have been able to sell my products on one of the biggest
          global online selling platforms, Amazon — which has resulted in a 45%
          increase on business revenue.
        </p>
      </section>

      {/* ── NEXT STEP SECTION ── */}
      <section
        style={{
          backgroundColor: "#f7f8fc",
          padding: "64px 24px 80px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 700,
            marginBottom: "12px",
            color: "#1a1a2e",
          }}
        >
          Take the next step
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#666",
            maxWidth: "440px",
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          Here are two ways to find out more about Payoneer Mass Payment and
          how easy we make it to pay multiple payees at once.
        </p>

        {/* cards row */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e4e6f0",
              borderRadius: "12px",
              padding: "32px 28px",
              maxWidth: "300px",
              flex: "1 1 260px",
              textAlign: "left",
            }}
          >
            {/* icon */}
            <div style={{ marginBottom: "16px", color: "#555" }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#1a1a2e",
              }}
            >
              Book a live demo
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Get in touch and one of our experts will show you how our Mass
              Payment solution works.
            </p>
            <a
              href="#"
              style={{
                display: "inline-block",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Request a demo
            </a>
          </div>

          {/* Card 2 */}
          <div
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e4e6f0",
              borderRadius: "12px",
              padding: "32px 28px",
              maxWidth: "300px",
              flex: "1 1 260px",
              textAlign: "left",
            }}
          >
            {/* icon */}
            <div style={{ marginBottom: "16px", color: "#555" }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                marginBottom: "10px",
                color: "#1a1a2e",
              }}
            >
              Download an information pack
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Get a info pack to discover everything about our Mass Payment
              solution on your own time.
            </p>
            <a
              href="#"
              style={{
                display: "inline-block",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Download now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}