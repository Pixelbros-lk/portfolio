"use client";

import React, { useState, useEffect } from "react";
import {
  Code,
  ArrowRight,
  Search,
  Menu,
  X,
  User,
  Home,
  Layers,
  MessageSquare,
} from "lucide-react";

interface NavbarProps {
  onOpenContact: (prefillScope?: string) => void;
  onOpenSearch: () => void;
}

export default function Navbar({ onOpenContact, onOpenSearch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300 ${mobileMenuOpen ? "rounded-3xl" : "rounded-full"
          } border ${scrolled || mobileMenuOpen
            ? "py-3 bg-white/90 backdrop-blur-xl border-zinc-200 shadow-md"
            : "py-4 bg-transparent border-transparent"
          }`}
      >
        <div className="px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-9 h-9 overflow-hidden rounded-xl border border-zinc-200 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img src="/icon.png" className="w-full h-full object-cover" alt="PixelBros Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-zinc-900 flex items-center gap-1.5 font-mono">
                PixelBros
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${scrolled ? "bg-transparent border-transparent shadow-none" : "bg-zinc-50 border border-zinc-200/80 shadow-sm"
            }`}>
            <a
              href="#"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
            >
              Home
            </a>

            <a
              href="#about"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
            >
              About
            </a>

            <a
              href="#services"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
            >
              Services
            </a>

            <a
              href="#work"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
            >
              Work
            </a>

            <a
              href="#footer"
              className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#FE4845] rounded-full hover:bg-zinc-100 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Start Project CTA */}
            <button
              onClick={() => onOpenContact()}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-full group cursor-pointer"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#FE4845] via-[#FF7573] to-[#D02927] rounded-full group-hover:opacity-100 transition-opacity duration-300 blur-sm opacity-70" />
              <span className="relative flex items-center gap-1.5 px-4 py-2 bg-[#FE4845] rounded-full text-white group-hover:bg-[#D02927] transition-colors duration-200">
                <span>Let's Build</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-zinc-600 hover:text-[#FE4845] bg-zinc-50 border border-zinc-200 rounded-full transition-colors shadow-sm"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-full border transition-all duration-300 shadow-sm ${mobileMenuOpen
                ? "bg-[#FE4845] text-white border-[#FE4845] rotate-90"
                : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:text-[#FE4845]"
                }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Floating Mobile Navigation Drawer */}
          <div
            className={`absolute top-[calc(100%+1rem)] left-4 right-4 md:hidden transition-all duration-300 origin-top z-50 ${mobileMenuOpen
              ? "opacity-100 scale-y-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-y-95 pointer-events-none -translate-y-4"
              }`}
          >
            <div className="bg-white backdrop-blur-xl border border-zinc-200/60 shadow-2xl rounded-4xl p-3 flex flex-col overflow-hidden">

              {/* Nav Links */}
              <div className="flex flex-col gap-1 mb-2">
                {[
                  { name: "Home", href: "#", icon: Home },
                  { name: "About", href: "#about", icon: User },
                  { name: "Services", href: "#services", icon: Layers },
                  { name: "Work", href: "#work", icon: Code },
                  { name: "Contact", href: "#footer", icon: MessageSquare },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 group-hover:bg-[#FE4845]/10 group-hover:text-[#FE4845] group-hover:border-[#FE4845]/20 transition-colors shadow-inner">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-base font-bold text-zinc-900">{item.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#FE4845] group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
              {/* Mobile Specific CTA */}
              <div className="p-5 bg-white rounded-3xl flex flex-col gap-3 border border-white">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (typeof onOpenContact === 'function') onOpenContact("General Inquiry");
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#FE4845] text-white hover:bg-white hover:text-black text-sm font-extrabold transition-colors shadow-lg"
                >
                  Start Building
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
