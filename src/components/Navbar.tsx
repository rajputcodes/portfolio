"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trap scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={`max-w-7xl mx-auto rounded-2xl px-3.5 sm:px-5 py-2.5 transition-all duration-300 flex items-center justify-between border ${
          scrolled
            ? "bg-[#080B14]/90 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/60"
            : "bg-[#080B14]/70 backdrop-blur-lg border-white/10 shadow-lg shadow-black/30"
        }`}
      >
        {/* Brand / Logo with Profile Photo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          aria-label="Ganesh Singh - Home"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-xl p-1"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/20 group-hover:border-[#8B5CF6]/60 group-hover:scale-105 transition-all shadow-md shrink-0 bg-white/5 relative">
            <Image
              src="/profile.jpeg"
              alt="Ganesh Singh"
              width={36}
              height={36}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-semibold text-sm sm:text-base text-[#F8FAFC] tracking-tight group-hover:text-[#38BDF8] transition-colors leading-tight">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-[10px] text-[#94A3B8] font-mono leading-none mt-0.5 hidden xs:block">
              AI / ML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                  isActive
                    ? "text-[#F8FAFC] bg-white/10 shadow-sm"
                    : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions & Social Icons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] hover:opacity-95 shadow-md shadow-[#8B5CF6]/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] min-h-[40px]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CBD5E1] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] active:scale-95"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#38BDF8]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Accessible Full-Width Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="sm:hidden fixed inset-x-3 top-[4.5rem] rounded-2xl bg-[#0D1220]/95 backdrop-blur-2xl border border-white/15 p-4 shadow-2xl transition-all z-50 max-h-[calc(100vh-6rem)] overflow-y-auto"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between min-h-[44px] ${
                    isActive
                      ? "bg-white/10 text-white font-semibold border border-white/10"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full py-2.5 rounded-xl text-xs font-medium text-white bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] flex items-center justify-center gap-1.5 shadow-md shadow-[#8B5CF6]/20 min-h-[44px]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center justify-between px-1 text-xs text-[#94A3B8]">
              <span>Follow / Repositories</span>
              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8]"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
