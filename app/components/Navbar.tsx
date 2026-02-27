"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";

const servicesItems = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "IT Solutions", href: "/services/it-solutions" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Graphic Designing", href: "/services/graphic-designing" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header  style={{
        position: "sticky",   // 🔥 makes it sticky
        top: 0,
        zIndex: 9999,
        width: "100%",
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
     
      <div className=" w-full bg-white border-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={92} height={22} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className=" hidden md:flex items-center gap-8 text-gray-700 font-medium ">
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              <Link href="/">Home</Link>
            </div>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 cursor-pointer hover:text-black text-gray-700 font-medium bg-transparent border-none p-0"
              >
                <Link href="/services">Services</Link>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              <Link href="/about">About Us</Link>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              <Link href="/contact">Contact Us</Link>
            </div>
          </nav>

          {/* Right Buttons — Arabic, WhatsApp, Call */}
          <div className="hidden md:flex items-center gap-3">
            {/* Arabic Button */}
            <button className="bg-gray-800 hover:bg-gray-900 text-black text-sm font-medium px-4 py-2 rounded-md transition-colors">
              العربية
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* Call Button */}
            <a
              href="tel:YOUR_PHONE_NUMBER"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-black text-sm font-medium px-4 py-2 rounded-md transition-colors"
            >
              <Phone size={15} />
              Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-5 py-5 space-y-4 border-b">
          <Link href="/" className="block font-medium" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex items-center gap-2 font-medium text-gray-700 w-full text-left bg-transparent border-none p-0"
            >
             <Link href="/services">Services</Link>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-2 ml-3 space-y-1 border-l-2 border-indigo-100 pl-3">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-1.5 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="block font-medium" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" className="block font-medium" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>

          {/* Mobile Action Buttons */}
          <div className="pt-4 border-t space-y-3">
            <button className="w-full bg-gray-800 hover:bg-gray-900 text-black text-sm font-medium px-4 py-2.5 rounded-md transition-colors">
              العربية
            </button>
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:YOUR_PHONE_NUMBER"
              className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors"
            >
              <Phone size={15} />
              Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}