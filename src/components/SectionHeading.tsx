import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientText?: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  gradientText,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-14 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-white/[0.04] border border-white/10 text-[#38BDF8] mb-3.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC] leading-[1.18]">
        {title}{" "}
        {gradientText && <span className="text-gradient">{gradientText}</span>}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
