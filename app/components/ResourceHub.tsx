"use client";

import { useEffect, useRef, useState } from "react";

interface Article {
  id: number;
  image: string;
  title: string;
  excerpt: string;
}

interface ScrollingColumnProps {
  items: Article[];
  speed?: number;
  reverse?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop",
    title: "Join New Zealand's busy ecommerce market",
    excerpt: "More topics: Did you know that New Zealand's ecommerce market is projected to...",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=220&fit=crop",
    title: "Top challenges and solutions for international payments",
    excerpt: "When it comes to international payments, there are several things to consider whe...",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop",
    title: "The ins and outs of Receiving payments globally",
    excerpt: "In today's hyper-connected world, small and medium-sized businesses (SMBs)...",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=220&fit=crop",
    title: "How to keep your funds safe: Expert tips",
    excerpt: "Maxim Polyachenko, Payoneer's VP of Financial Crime Prevention — and one o...",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=220&fit=crop",
    title: "Scaling your freelance business across borders",
    excerpt: "Discover how top freelancers are expanding their client base internationally...",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop",
    title: "Currency exchange: What every SMB must know",
    excerpt: "Understanding exchange rates and fees can save your business thousands...",
  },
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
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      setTranslateY((prev) => {
        const cardHeight = 320;
        const totalHeight = items.length * cardHeight;
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
        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
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
  return (
    <div
      style={{
        background: "#111827",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s",
        width: "260px",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={article.image}
        alt={article.title}
        style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: "16px" }}>
        <h3 style={{ color: "#f9fafb", fontSize: "14px", fontWeight: 600, marginBottom: "8px", lineHeight: 1.4 }}>
          {article.title}
        </h3>
        <p style={{ color: "#9ca3af", fontSize: "12px", lineHeight: 1.6, marginBottom: "12px" }}>
          {article.excerpt}
        </p>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#818cf8",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          Read more →
        </button>
      </div>
    </div>
  );
}

export default function ResourceHub() {
  const col1 = articles.slice(0, 3);
  const col2 = articles.slice(3, 6);
  const col3 = [...articles].reverse().slice(0, 3);

  return (
    <section
      style={{
        background: "#030712",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          left: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "200px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          gap: "80px",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left: Text content */}
        <div>
          <p
            style={{
              color: "#6366f1",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Resource Hub
          </p>
          <h1
            style={{
              color: "#f9fafb",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Visit our resource hub
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "16px", lineHeight: 1.7, marginBottom: "40px" }}>
            Videos, articles, case studies, product guides, testimonials, and useful tools to help you find the answers
            you&apos;re looking for.
          </p>
          <button
            style={{
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: "100px",
              color: "#f9fafb",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 28px",
              cursor: "pointer",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6366f1";
              e.currentTarget.style.background = "rgba(99,102,241,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Start exploring
          </button>
        </div>

        {/* Right: Scrolling card columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 260px)",
            gap: "16px",
            height: "520px",
            overflow: "hidden",
          }}
        >
          <ScrollingColumn items={col1} speed={25} reverse={false} />
          <ScrollingColumn items={col2} speed={20} reverse={false} />
          <ScrollingColumn items={col3} speed={30} reverse={false} />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
       
      `}</style>
    </section>
  );
}