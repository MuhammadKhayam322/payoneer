"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import FreelancersMenu from "./FreelancersMenu";
import BusinessMenu from "./BusinessMenu";
import MarketplaceMenu from "./MarketplaceMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showFreelancers, setShowFreelancers] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  return (
    <header className="w-full relative z-50">

      {/* ================= TOP BAR ================= */}
      <div className="hidden md:block w-full bg-[#2b2b2b] text-gray-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-6">
          <Link href="#">RESOURCES</Link>
          <Link href="#">DEVELOPERS API</Link>
          <Link href="#">ABOUT US</Link>
          <span>🇬🇧 ENGLISH</span>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"></div>
            <span className="text-xl sm:text-2xl font-semibold">Payoneer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

            {/* Hover Target */}
            <div
              onMouseEnter={() => setShowFreelancers(true)}
              onMouseLeave={() => setShowFreelancers(true)}
              className="flex items-center gap-1 cursor-pointer hover:text-black"
            >
              <Link href="/freelancers">Freelancers</Link> <ChevronDown size={16} />
            </div>

            <div
              onMouseEnter={() => setShowBusiness(true)}
              onMouseLeave={() => setShowBusiness(true)}
              className="flex items-center gap-1 cursor-pointer hover:text-black"
            >
              <Link href="/bussiness">Business</Link> <ChevronDown size={16} />
            </div>
            <div
              onMouseEnter={() => setShowBusiness(true)}
              onMouseLeave={() => setShowBusiness(true)}
              className="flex items-center gap-1 cursor-pointer hover:text-black"
            >
              <Link href="/bussiness">Marketplace</Link> <ChevronDown size={16} />
            </div>
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#">Sign In</Link>
            <Link
              href="#"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2.5 rounded-full"
            >
              Register →
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ================= FULL WIDTH HOVER MENU ================= */}
      {showFreelancers && (
        <div
          className="absolute left-0 top-full w-screen bg-white shadow-xl border-t"
          onMouseEnter={() => setShowFreelancers(true)}
          onMouseLeave={() => setShowFreelancers(false)}
        >
          <FreelancersMenu />
        </div>
      )}
     {showBusiness && (
        <div
          className="absolute left-0 top-full w-screen bg-white shadow-xl border-t"
          onMouseEnter={() => setShowBusiness(true)}
          onMouseLeave={() => setShowBusiness(false)}
        >
          <BusinessMenu/>
        </div>
      )}
      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-5 py-5 space-y-4 border-b">
          <p className="font-medium">Freelancers</p>
          <p>Business</p>
          <p>Marketplace</p>

          <div className="pt-4 border-t space-y-3">
            <Link href="#" className="block">Sign In</Link>
            <Link
              href="#"
              className="block text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-full"
            >
              Register →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
