import React from "react";
import {
  Brain,
  Sparkles,
  Terminal,
  Server,
  Database,
  Cpu,
  Layers,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="w-5 h-5 text-[#8B5CF6]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#38BDF8]" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-[#22D3EE]" />;
      case "Server":
        return <Server className="w-5 h-5 text-[#34D399]" />;
      case "Database":
        return <Database className="w-5 h-5 text-[#C4B5FD]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Layers className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  const getCategoryColor = (index: number) => {
    const accents = [
      "border-t-[#8B5CF6]/50 hover:border-[#8B5CF6]/60",
      "border-t-[#38BDF8]/50 hover:border-[#38BDF8]/60",
      "border-t-[#22D3EE]/50 hover:border-[#22D3EE]/60",
      "border-t-[#34D399]/50 hover:border-[#34D399]/60",
      "border-t-[#C4B5FD]/50 hover:border-[#C4B5FD]/60",
      "border-t-[#F59E0B]/50 hover:border-[#F59E0B]/60",
    ];
    return accents[index % accents.length];
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Skills"
          title="My Technical Toolkit"
          subtitle="Tools and technologies I'm learning and applying to build practical solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-panel rounded-2xl p-6 border border-white/10 ${getCategoryColor(
                index
              )} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 flex flex-col justify-between`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base text-[#F8FAFC]">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] mb-5 font-normal">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#CBD5E1] hover:text-[#F8FAFC] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>{category.skills.length} Capabilities</span>
                <span className="text-[#38BDF8]">Practical focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
