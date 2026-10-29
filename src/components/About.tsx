import React from "react";
import Image from "next/image";
import { GraduationCap, Brain, Code2, Compass, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#38BDF8]" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-[#8B5CF6]" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-[#22D3EE]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#34D399]" />;
      default:
        return <Brain className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="about" className="py-14 sm:py-18 lg:py-22 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Me"
          title={PORTFOLIO_DATA.about.heading}
          subtitle={PORTFOLIO_DATA.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative Summary with Verified Profile Badge */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            {/* Executive Profile Card */}
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 flex items-center gap-4 sm:gap-5 shadow-lg">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-md bg-white/5">
                <Image
                  src="/profile.jpeg"
                  alt="Ganesh Singh"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F8FAFC]">
                    Ganesh Singh
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4B5FD]">
                    M.Sc. AI
                  </span>
                </div>
                <span className="text-xs font-mono text-[#38BDF8] mt-0.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  Vadodara, Gujarat · Aspiring AI/ML Engineer
                </span>
                <p className="text-xs text-[#94A3B8] mt-1 line-clamp-1">
                  Parul University · Generative AI &amp; Software Engineering
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-4 border border-white/10 shadow-lg">
              {PORTFOLIO_DATA.about.paragraphs.map((p, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Core Strengths Quote / Philosophy */}
            <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-white/10 flex items-center gap-4 bg-gradient-to-r from-white/[0.04] to-transparent">
              <div className="w-1.5 h-10 bg-gradient-to-b from-[#8B5CF6] to-[#38BDF8] rounded-full shrink-0" />
              <div className="text-xs sm:text-sm text-[#94A3B8]">
                <span className="text-[#F8FAFC] font-medium block">
                  Continuous Practical Growth
                </span>
                Bridging data-driven AI capabilities with pragmatic, maintainable software design.
              </div>
            </div>
          </div>

          {/* Right Column: 4 Glassmorphism Information Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.about.cards.map((card, i) => (
              <div
                key={i}
                className="glass-interactive rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3.5">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8]">
                    {card.title}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-[#F8FAFC] mt-1 leading-snug">
                    {card.primary}
                  </h3>
                </div>
                <p className="text-xs text-[#94A3B8] mt-3 font-mono">
                  {card.secondary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
