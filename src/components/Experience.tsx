import React from "react";
import { Briefcase, CheckCircle2, Building2, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-18 lg:py-22 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Simulations"
          title="Practical Learning & Industry Simulations"
          subtitle="Applied problem-solving and industry scenarios completed through structured corporate job simulations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PORTFOLIO_DATA.practicalLearning.map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-[#38BDF8]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#F8FAFC]">
                        {item.company}
                      </h3>
                      <span className="text-xs font-mono text-[#94A3B8]">
                        Virtual Job Simulation · Platform: {item.platform}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4B5FD]">
                    <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                    Simulation
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-base font-semibold text-[#CBD5E1] mb-1.5">
                    {item.simulationTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Simulation Key Deliverables */}
                <div className="space-y-2 mt-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#CBD5E1] block mb-2 font-medium">
                    Key Practical Deliverables:
                  </span>
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] bg-white/[0.02] p-2.5 rounded-xl border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note about practical simulated experience */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  Verified Curriculum
                </span>
                <span className="text-[#38BDF8]">Forage Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
