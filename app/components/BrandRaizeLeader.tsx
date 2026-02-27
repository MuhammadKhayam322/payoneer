"use client";
import Link from "next/link";
import { useState } from "react";

const CodeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

const MobileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);

const MarketingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </svg>
);

const tabs = [
  {
    id: 0,
    icon: <CodeIcon />,
    label: "Professional Developer Team",
    title: "Professional Developer Team",
    description:
      "Our team of expert developers delivers high-quality, scalable solutions tailored to your business needs.",
  },
  {
    id: 1,
    icon: <MobileIcon />,
    label: "Outstanding User Experience",
    title: "Outstanding User Experience",
    description:
      "We craft intuitive, beautiful interfaces that delight users and drive engagement across every platform.",
  },
  {
    id: 2,
    icon: <MarketingIcon />,
    label: "Effective Marketing Strategies",
    title: "Effective Marketing Strategies",
    description:
      "From SEO to paid campaigns, our data-driven marketing strategies help your brand grow and convert.",
  },
];

export default function FactsStats() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="facts-section">
      {/* Background network dots */}
      <div className="bg-overlay" />

      <div className="container">
        <h2 className="title">Why is BrandRaize a Market Leader?</h2>
        <p className="description">
          BrandRaize Company provides innovative solutions in programming
          websites, applications, and digital marketing, making us your first
          choice in the industry.
        </p>

        {/* Tabs */}
        <div className="tabs-wrapper">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${active === tab.id ? "tab-active" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content card */}
        <div className="content-card">
          <div className="card-icon-title">
            <span className="card-icon">{current.icon}</span>
            <h3 className="card-title">{current.title}</h3>
          </div>
          <p className="card-desc">{current.description}</p>
        </div>

        {/* CTA */}
        <div className="button-wrapper">
          <Link href="/about">
            <button className="cta-button">Find out more about BrandRaize</button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .facts-section {
           background:
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)";
          padding: 70px 20px 80px;
          font-family: "Segoe UI", sans-serif;
          position: relative;
          overflow: hidden;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(99,130,246,0.15) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .container {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .description {
          font-size: 1rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.75;
          max-width: 560px;
          margin: 0 auto 44px;
        }

        /* Tabs */
        .tabs-wrapper {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.15);
          border-radius: 6px;
          color: rgba(255,255,255,0.65);
          font-size: 0.85rem;
          font-weight: 500;
          padding: 10px 18px;
          cursor: pointer;
          font-family: "Segoe UI", sans-serif;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .tab-btn:hover {
          border-color: rgba(99,130,246,0.5);
          color: #fff;
        }

        .tab-active {
          border-color: #3b82f6 !important;
          color: #3b82f6 !important;
          background: rgba(59,130,246,0.08) !important;
        }

        .tab-icon {
          display: flex;
          align-items: center;
        }

        /* Content card */
        .content-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 32px 36px;
          text-align: left;
          margin-bottom: 36px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.3);
        }

        .card-icon-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          color: #3b82f6;
        }

        .card-icon {
          display: flex;
          align-items: center;
          color: #3b82f6;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #111;
          margin: 0;
        }

        .card-desc {
          font-size: 0.95rem;
          color: #444;
          line-height: 1.75;
          margin: 0;
        }

        /* CTA */
        .button-wrapper {
          display: flex;
          justify-content: center;
        }

        .cta-button {
          background-color: #2563eb;
          color: #fff;
          border: none;
          padding: 15px 36px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          font-family: "Segoe UI", sans-serif;
          transition: background 0.2s;
          letter-spacing: 0.01em;
        }

        .cta-button:hover {
          background-color: #1d4ed8;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .title {
            font-size: 1.6rem;
          }

          .tabs-wrapper {
            flex-direction: column;
            align-items: stretch;
          }

          .tab-btn {
            justify-content: center;
          }

          .content-card {
            padding: 24px 20px;
          }

          .card-title {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.4rem;
          }

          .description {
            font-size: 0.9rem;
          }

          .cta-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}