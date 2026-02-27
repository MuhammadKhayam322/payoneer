"use client";

import { useEffect, useRef, useState } from "react";

interface Article {
  id: number;
  IconComp: React.FC;
  iconBg: string;
  title: string;
  excerpt: string;
}

interface ScrollingColumnProps {
  items: Article[];
  speed?: number;
  reverse?: boolean;
}

const ChipIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <rect x="12" y="12" width="24" height="24" rx="4" stroke="#3b82f6" strokeWidth="2.5"/>
    <rect x="18" y="18" width="12" height="12" rx="2" stroke="#3b82f6" strokeWidth="2"/>
    <line x1="8" y1="18" x2="12" y2="18" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="8" y1="24" x2="12" y2="24" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="8" y1="30" x2="12" y2="30" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="36" y1="18" x2="40" y2="18" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="36" y1="24" x2="40" y2="24" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="36" y1="30" x2="40" y2="30" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="18" y1="8" x2="18" y2="12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="8" x2="24" y2="12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="30" y1="8" x2="30" y2="12" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="18" y1="36" x2="18" y2="40" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="36" x2="24" y2="40" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="30" y1="36" x2="30" y2="40" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const DatabaseIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <ellipse cx="24" cy="13" rx="13" ry="5" stroke="#3b82f6" strokeWidth="2.5"/>
    <path d="M11 13v10c0 2.76 5.82 5 13 5s13-2.24 13-5V13" stroke="#3b82f6" strokeWidth="2.5"/>
    <path d="M11 23v9c0 2.76 5.82 5 13 5s13-2.24 13-5v-9" stroke="#3b82f6" strokeWidth="2.5"/>
  </svg>
);

const GlobeIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <circle cx="24" cy="24" r="14" stroke="#3b82f6" strokeWidth="2.5"/>
    <ellipse cx="24" cy="24" rx="6" ry="14" stroke="#3b82f6" strokeWidth="2"/>
    <line x1="10" y1="24" x2="38" y2="24" stroke="#3b82f6" strokeWidth="2"/>
    <path d="M12 17h24M12 31h24" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BarChartIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <rect x="10" y="28" width="7" height="10" rx="2" stroke="#3b82f6" strokeWidth="2.5"/>
    <rect x="20" y="20" width="7" height="18" rx="2" stroke="#3b82f6" strokeWidth="2.5"/>
    <rect x="30" y="14" width="7" height="24" rx="2" stroke="#3b82f6" strokeWidth="2.5"/>
  </svg>
);

const CloudIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <path d="M34 34H16a8 8 0 01-2-15.74A10 10 0 0134 20a6 6 0 010 14z" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
    <path d="M24 8l12 4v10c0 8-5 14-12 18C17 36 12 30 12 22V12l12-4z" stroke="#3b82f6" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M19 24l3 3 7-7" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const articles: Article[] = [
  { id: 1, IconComp: ChipIcon, iconBg: "rgba(59,130,246,0.12)", title: "Creative & Strategic", excerpt: "Our work combines design innovation with data-driven strategies to maximize impact." },
  { id: 2, IconComp: DatabaseIcon, iconBg: "rgba(99,102,241,0.12)", title: "Multi-Industry Expertise", excerpt: "We have proven experience across technology, real estate, retail, healthcare, and more." },
  { id: 3, IconComp: GlobeIcon, iconBg: "rgba(16,185,129,0.12)", title: "Bilingual & Global Reach", excerpt: "We craft solutions in both English and Arabic, enabling global accessibility." },
  { id: 4, IconComp: BarChartIcon, iconBg: "rgba(245,158,11,0.12)", title: "Results-Driven", excerpt: "We craft solutions in both English and Arabic, enabling global accessibility." },
  
];

function ScrollingColumn({ items, speed = 30, reverse = false }: ScrollingColumnProps) {
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const directionRef = useRef<number>(reverse ? 1 : -1);
  const [translateY, setTranslateY] = useState<number>(0);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }
      const delta = timestamp - (lastTimeRef.current as number);
      lastTimeRef.current = timestamp;

      setTranslateY((prev) => {
        const cardHeight = 270;
        const gap = 16;
        const totalHeight = items.length * (cardHeight + gap);
        let next = prev + directionRef.current * (speed / 1000) * delta;
        if (next <= -totalHeight) next += totalHeight;
        if (next >= totalHeight) next -= totalHeight;
        return next;
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [items.length, speed]);

  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: "hidden",
        height: "100%",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          willChange: "transform",
        }}
      >
        {doubled.map((article, i) => (
          <ArticleCard key={`${article.id}-${i}`} article={article} />
        ))}
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);
  const { IconComp, iconBg } = article;

  return (
    <div
      style={{
        background: hovered ? "#0f172a" : 
          "linear-gradient(135deg, #0a0a14 0%, #0d0f1a 50%, #080c18 100%)",
        borderRadius: "14px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(59,130,246,0.45)" : "rgba(255,255,255,0.07)"}`,
        cursor: "pointer",
        transition: "all 0.25s ease",
        width: "100%",
        flexShrink: 0,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 32px rgba(59,130,246,0.12)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: "100%",
          height: "120px",
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <IconComp />
        </div>
      </div>

      <div style={{ padding: "14px 16px 16px" }}>
        <h3
          style={{
            color: "#f1f5f9",
            fontSize: "13px",
            fontWeight: 600,
            lineHeight: 1.45,
            marginTop: 0,
            marginRight: 0,
            marginBottom: "6px",
            marginLeft: 0,
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            color: "#64748b",
            fontSize: "11.5px",
            lineHeight: 1.6,
            marginTop: 0,
            marginRight: 0,
            marginBottom: "12px",
            marginLeft: 0,
          }}
        >
          {article.excerpt}
        </p>
       
      </div>
    </div>
  );
}

export default function WhyChoiceBrandraize() {
  const col1 = articles.slice(0, 3);
  const col2 = articles.slice(3, 6);
  const col3 = [...articles].reverse().slice(0, 3);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');
       
        body { background: #020c1b; }

        .resource-hub {
          background: #020c1b;
          min-height: 100vh;
          display: flex;
          align-items: center;
          font-family: 'Sora', sans-serif;
          overflow: hidden;
          position: relative;
          padding: 60px 20px;
        }

        .inner-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        .columns-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          height: 520px;
          overflow: hidden;
          min-width: 0;
        }

        .col-wrapper {
          min-width: 0;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .inner-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .columns-wrapper {
            grid-template-columns: repeat(3, 1fr);
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .columns-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
          .col-hide {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .columns-wrapper {
            grid-template-columns: 1fr;
          }
          .col-hide-sm {
            display: none;
          }
        }

        .pill-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.25);
          border-radius: 100px;
          padding: 4px 12px;
          color: #60a5fa;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .cta-btn {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 100px;
          color: #f1f5f9;
          font-size: 14px;
          font-family: 'Sora', sans-serif;
          font-weight: 500;
          padding: 13px 30px;
          cursor: pointer;
          transition: all 0.25s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cta-btn:hover {
          border-color: #3b82f6;
          background: rgba(59,130,246,0.1);
          color: #60a5fa;
        }
      `}</style>

      <section className="resource-hub">
        <div
          style={{
            position: "absolute", top: "-150px", left: "-150px",
            width: "500px", height: "500px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: "-100px", right: "10%",
            width: "400px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="inner-grid">
          {/* Left */}
          <div>
           
            <h1
              style={{
                color: "#f1f5f9",
                fontSize: "clamp(32px, 5vw, 50px)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: "18px",
              }}
            >
             Why Choose BrandRaize?
            </h1>
            <p style={{ color: "#64748b", fontSize: "15px", lineHeight: 1.75, marginBottom: "36px" }}>
              Videos, articles, case studies, product guides, testimonials, and useful tools to help you find the
              answers you&apos;re looking for.
            </p>
           
          </div>

          {/* Right: columns */}
          <div className="columns-wrapper">
            <div className="col-wrapper">
              <ScrollingColumn items={col1} speed={22} reverse={false} />
            </div>
            <div className="col-wrapper col-hide-sm">
              <ScrollingColumn items={col2} speed={18} reverse={false} />
            </div>
            <div className="col-wrapper col-hide">
              <ScrollingColumn items={col3} speed={28} reverse={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}