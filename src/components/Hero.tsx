"use client";

import React from "react";
import { ArrowRight, Mail, Sparkles, Terminal, Cpu, Network, Layers, Film } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-24 pb-14 sm:pt-28 sm:pb-18 lg:pt-32 lg:pb-24 overflow-hidden w-full"
    >
      {/* Restrained Ambient Gradient */}
      <div className="absolute top-16 left-1/4 -translate-x-1/2 w-80 h-80 bg-[#8B5CF6]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-32 right-1/4 translate-x-1/4 w-80 h-80 bg-[#38BDF8]/6 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full min-w-0">
          
          {/* Left Column: Visual Hierarchy & Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full min-w-0">
            
            {/* Unified Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 shadow-sm mb-5 max-w-full">
              <span className="inline-flex items-center gap-1.5 text-[#C4B5FD] font-medium shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
                </span>
                {PORTFOLIO_DATA.personal.statusBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.18] sm:leading-[1.12] mb-5 break-words w-full">
              Building{" "}
              <span className="text-gradient">
                Intelligent Systems
              </span>{" "}
              for Real-World Problems.
            </h1>

            {/* Concise Professional Bio */}
            <p className="text-sm sm:text-base md:text-lg text-[#CBD5E1] max-w-2xl font-normal leading-relaxed mb-5">
              {PORTFOLIO_DATA.personal.summary}
            </p>

            {/* Technical Sub-line Badges */}
            <div className="w-full sm:w-auto flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs font-mono text-[#38BDF8] bg-white/[0.03] border border-white/10 px-3 py-2 rounded-xl mb-7 shadow-sm">
              <Terminal className="w-4 h-4 text-[#8B5CF6] shrink-0" />
              <span>Machine Learning</span>
              <span className="text-white/30">•</span>
              <span>Generative AI</span>
              <span className="text-white/30">•</span>
              <span>Agentic Systems</span>
            </div>

            {/* CTA Group with Strict Hierarchy */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-xs sm:text-sm text-white bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#38BDF8] hover:opacity-95 shadow-lg shadow-[#8B5CF6]/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] min-h-[44px]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-[#F8FAFC] glass-panel hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[44px]"
              >
                <span>Let&apos;s Connect</span>
              </button>

              {/* Tertiary Link */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-xl font-mono text-xs text-[#94A3B8] hover:text-[#38BDF8] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[44px]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub</span>
              </a>
            </div>

            {/* Location & Quick Meta Row */}
            <div className="mt-8 pt-5 border-t border-white/10 w-full flex flex-wrap items-center justify-between gap-4 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span>Parul University, Vadodara, Gujarat</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:text-[#38BDF8] hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:text-[#8B5CF6] hover:bg-white/10 transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech AI System Architecture Dashboard */}
          <div className="lg:col-span-5 flex items-center justify-center w-full min-w-0">
            <div className="glass-panel rounded-3xl p-4 sm:p-6 w-full max-w-md border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Header Telemetry */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  <span className="text-[11px] font-mono text-[#CBD5E1] uppercase tracking-wider font-semibold">
                    AI System Matrix
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">
                  v2.0 · Live Focus
                </span>
              </div>

              {/* Central Neural Node & Orbit System */}
              <div className="relative aspect-square max-w-[260px] sm:max-w-[300px] mx-auto flex items-center justify-center my-1">
                
                {/* SVG Connecting Beam Network */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 300 300">
                  <line x1="150" y1="150" x2="60" y2="60" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="150" y1="150" x2="240" y2="60" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="150" y1="150" x2="60" y2="240" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 3" />
                  <line x1="150" y1="150" x2="240" y2="240" stroke="#C4B5FD" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="150" cy="150" r="110" stroke="rgba(255,255,255,0.06)" fill="none" strokeWidth="1" />
                </svg>

                {/* Central GS AI Core */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0D1220] to-[#080B14] border border-white/20 shadow-2xl flex flex-col items-center justify-center p-2 group hover:border-[#8B5CF6]/50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#38BDF8]/20 border border-white/15 flex items-center justify-center mb-1">
                    <span className="font-heading font-black text-base text-gradient">
                      GS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-[#F8FAFC]">
                    AI Engine
                  </span>
                </div>

                {/* Node 1: Top-Left (GenAI & Agentic) */}
                <div className="absolute top-2 left-2 glass-interactive rounded-xl p-2 border border-white/10 flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono font-bold text-[#F8FAFC]">Agentic AI</span>
                    <span className="text-[8px] font-mono text-[#94A3B8]">LangGraph · MCP</span>
                  </div>
                </div>

                {/* Node 2: Top-Right (Machine Learning) */}
                <div className="absolute top-2 right-2 glass-interactive rounded-xl p-2 border border-white/10 flex items-center gap-1.5 shadow-md">
                  <Network className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono font-bold text-[#F8FAFC]">Predictive ML</span>
                    <span className="text-[8px] font-mono text-[#94A3B8]">EDA · Scikit</span>
                  </div>
                </div>

                {/* Node 3: Bottom-Left (CineMatch RecSys) */}
                <div className="absolute bottom-2 left-2 glass-interactive rounded-xl p-2 border border-white/10 flex items-center gap-1.5 shadow-md">
                  <Film className="w-3.5 h-3.5 text-[#22D3EE]" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono font-bold text-[#F8FAFC]">Hybrid RecSys</span>
                    <span className="text-[8px] font-mono text-[#94A3B8]">Cosine · TF-IDF</span>
                  </div>
                </div>

                {/* Node 4: Bottom-Right (Backend & APIs) */}
                <div className="absolute bottom-2 right-2 glass-interactive rounded-xl p-2 border border-white/10 flex items-center gap-1.5 shadow-md">
                  <Cpu className="w-3.5 h-3.5 text-[#34D399]" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-mono font-bold text-[#F8FAFC]">FastAPI / Flask</span>
                    <span className="text-[8px] font-mono text-[#94A3B8]">Modular APIs</span>
                  </div>
                </div>

              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-[#8B5CF6]" />
                  Parul University M.Sc.
                </span>
                <span className="text-[#38BDF8]">Practical Execution</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
