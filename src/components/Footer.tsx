"use client";

import React, { useSyncExternalStore } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const subscribe = () => () => {};

export const Footer: React.FC = () => {
  const currentYear = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#080B14]/80 backdrop-blur-xl relative z-10 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              <p className="font-heading font-semibold text-sm sm:text-base text-[#F8FAFC]">
                Designed &amp; built by {PORTFOLIO_DATA.personal.name}.
              </p>
            </div>
            <p className="text-xs text-[#94A3B8] font-mono">
              Exploring AI. Building useful things.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              aria-label="Email Ganesh Singh"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#8B5CF6] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Scroll back to top"
              className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#CBD5E1] hover:text-white transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#64748B] gap-2">
          <span>&copy; {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.</span>
          <span>Vadodara, Gujarat, India</span>
        </div>
      </div>
    </footer>
  );
};
