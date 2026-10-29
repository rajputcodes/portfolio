import React from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-14 sm:py-18 lg:py-22 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Foundations in analytical problem solving and specialized postgraduate AI education."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 md:ml-8 pl-5 sm:pl-8 space-y-6 sm:space-y-8">
          {PORTFOLIO_DATA.education.map((edu, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node Point */}
              <div
                className={`absolute -left-[27px] sm:-left-[39px] md:-left-[41px] top-4 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  edu.isCurrent
                    ? "bg-[#8B5CF6] border-white shadow-[0_0_12px_#8B5CF6]"
                    : "bg-[#080B14] border-white/30 group-hover:border-[#38BDF8]"
                }`}
              >
                {edu.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Education Glass Card */}
              <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-white/10 group-hover:border-white/20 transition-all duration-200">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#38BDF8]" />
                    <span className="text-xs font-mono font-medium text-[#38BDF8]">
                      {edu.institution}
                    </span>
                    {edu.isCurrent && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C4B5FD]">
                        Current
                      </span>
                    )}
                  </div>

                  {edu.duration && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  )}
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-[#F8FAFC] mb-2">
                  {edu.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#94A3B8] font-mono mt-3">
                  {edu.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      <span>{edu.location}</span>
                    </div>
                  )}

                  {edu.score && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[#CBD5E1]">
                      <Award className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>{edu.score}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
