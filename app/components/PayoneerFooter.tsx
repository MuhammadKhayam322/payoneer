'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

interface FooterLink {
  label: string;
  href: string;
  highlight?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const footerSections: FooterSection[] = [
  {
    title: "Solutions",
    links: [
      { label: "Freelancers", href: "/freelancers" },
      { label: "Business", href: "/business" },
      { label: "Marketplace", href: "/marketplace" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Partner affiliate program", href: "/partners/affiliate" },
      { label: "Integration partnerships", href: "/partners/integration" },
      { label: "Bank partnerships", href: "/partners/bank" },
      { label: "Accounting software integration", href: "/partners/accounting" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Payoneer", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Investors", href: "/investors", highlight: true },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/newsroom" },
      { label: "Media assets", href: "/media" },
      { label: "Impact", href: "/impact" },
      { label: "Multi-jurisdictional licenses", href: "/licenses" },
      { label: "Mobile app", href: "/mobile" },
      { label: "SMB Network", href: "/smb-network" },
      { label: "Latest Product Innovations", href: "/innovations" },
      { label: "Open source software", href: "/open-source" },
      { label: "Service information", href: "/service-information" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Customer Care", href: "/help/customer-care" },
      { label: "Security Center", href: "/help/security" },
      {
        label: "Customer assistance, complaints and disclosures policies",
        href: "/help/complaints",
      },
      { label: "Accessibility", href: "/help/accessibility" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    name: "X",
    href: "https://x.com/payoneer",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com/payoneer",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/payoneer",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/payoneer",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const legalLinks: { label: string; href: string }[] = [
  { label: "Legal", href: "/legal" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/cookies-policy" },
  { label: "Cookies Settings", href: "/cookies-settings" },
];

function useBreakpoint() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return { isMobile: width < 640, isTablet: width >= 640 && width < 1024, isDesktop: width >= 1024 };
}

function CollapsibleSection({ title, links }: FooterSection) {
  const [open, setOpen] = useState(false);
  const { isMobile } = useBreakpoint();

  return (
    <div style={{ borderBottom: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
      <button
        onClick={() => isMobile && setOpen((o) => !o)}
        style={{
          background: "none",
          border: "none",
          cursor: isMobile ? "pointer" : "default",
          padding: isMobile ? "16px 0" : "0",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#ffffff",
        }}
      >
        <h3 style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.02em", margin: 0 }}>
          {title}
        </h3>
        {isMobile && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            width={16}
            height={16}
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", color: "rgba(255,255,255,0.5)", flexShrink: 0 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          overflow: "hidden",
          maxHeight: isMobile ? (open ? "1000px" : "0") : "none",
          transition: "max-height 0.3s ease",
          paddingBottom: isMobile && open ? "16px" : "0",
        }}
      >
        {(!isMobile || open) &&
          links.map((link) => (
            <li key={link.label} style={{ marginBottom: "12px" }}>
              <Link
                href={link.href}
                style={{
                  color: link.highlight ? "#4a9eff" : "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  fontSize: "13px",
                  lineHeight: "1.4",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = link.highlight ? "#4a9eff" : "rgba(255,255,255,0.65)"; }}
              >
                {link.label}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

function PayoneerFooter(): React.ReactElement {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();

  const gridColumns = isDesktop
    ? "1fr 1.2fr 1.5fr 1.2fr 0.8fr"
    : isTablet
    ? "1fr 1fr 1fr"
    : "1fr";

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d1a2a 50%, #0a1a1a 100%)",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile ? "40px 20px 32px" : isTablet ? "50px 32px 36px" : "60px 40px 40px",
        }}
      >
        {/* Nav Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: gridColumns,
            gap: isMobile ? "0" : "40px",
            marginBottom: isMobile ? "32px" : "60px",
          }}
        >
          {footerSections.map((section) =>
            isMobile ? (
              <CollapsibleSection key={section.title} {...section} />
            ) : (
              <div key={section.title} style={{ paddingTop: isTablet ? "0" : undefined }}>
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "20px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {section.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.links.map((link) => (
                    <li key={link.label} style={{ marginBottom: "12px" }}>
                      <Link
                        href={link.href}
                        style={{
                          color: link.highlight ? "#4a9eff" : "rgba(255,255,255,0.65)",
                          textDecoration: "none",
                          fontSize: "13px",
                          lineHeight: "1.4",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = link.highlight ? "#4a9eff" : "rgba(255,255,255,0.65)"; }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          {/* Follow Us */}
          <div style={{ paddingTop: isMobile ? "20px" : "0" }}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "20px",
                letterSpacing: "0.02em",
              }}
            >
              Follow us
            </h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    transition: "background-color 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.25)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.12)"; }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="14" fill="url(#payoneer-grad)" />
              <defs>
                <linearGradient id="payoneer-grad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#ff4f00" />
                  <stop offset="1" stopColor="#ff8c00" />
                </linearGradient>
              </defs>
              <path d="M8 9h7a3 3 0 010 6H11v4H8V9z" fill="#fff" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: "16px", color: "#fff" }}>Payoneer</span>
          </div>

          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0 }}>
            © 2005-2026 Payoneer Inc., All Rights Reserved
          </p>

          {/* PCI + Legal Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: isMobile ? "12px" : "20px",
            }}
          >
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "4px",
                padding: "4px 8px",
                fontSize: "10px",
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.05em",
              }}
            >
              PCI DSS
            </div>
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: "12px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PayoneerFooter;