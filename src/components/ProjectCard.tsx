import React from "react";
import { Film, Landmark, GraduationCap, ArrowUpRight, Info } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  // Custom abstract visual preview tailored for each project
  const renderVisualPreview = () => {
    switch (project.id) {
      case "smartbank-ai":
        return (
          <div className="relative h-44 w-full rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#091726] via-[#0B1B2B] to-[#080E1A] p-5 flex flex-col justify-between border-b border-white/10 group-hover:border-cyan-500/30 transition-colors">
            {/* Top row */}
            <div className="flex items-center justify-between relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-[#38BDF8]">
                <Landmark className="w-3 h-3 text-[#22D3EE]" />
                Banking Assistant
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8]">NLP / Backend</span>
            </div>

            {/* Center: Abstract banking conversational card & metric */}
            <div className="relative z-10 my-auto space-y-2">
              <div className="glass-panel rounded-xl p-3 border border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                  <span className="text-[#F8FAFC]">AI Query Parser</span>
                </div>
                <span className="text-[#38BDF8]">Intent Routed</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#94A3B8]">
                <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-1.5 text-center">
                  Contextual NLP
                </div>
                <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-1.5 text-center">
                  Modular Architecture
                </div>
              </div>
            </div>

            {/* Bottom status badge */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8] relative z-10">
              <span>Interactive Banking Assistant</span>
              <span className="text-[#38BDF8]">Active Workflow</span>
            </div>
          </div>
        );

      case "lms":
        return (
          <div className="relative h-44 w-full rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#10142B] via-[#0E1528] to-[#0A0D18] p-5 flex flex-col justify-between border-b border-white/10 group-hover:border-indigo-500/30 transition-colors">
            {/* Top row */}
            <div className="flex items-center justify-between relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#6366F1]/20 border border-[#6366F1]/30 text-[#C4B5FD]">
                <GraduationCap className="w-3 h-3 text-[#818CF8]" />
                Digital Learning Platform
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8]">Web / DB</span>
            </div>

            {/* Center: Abstract Course & Resource Management visualization */}
            <div className="relative z-10 my-auto space-y-2">
              <div className="glass-panel rounded-xl p-3 border border-white/10">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-[#F8FAFC]">Curriculum Progress</span>
                  <span className="text-[#818CF8]">Structured</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] h-full w-3/4 rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8] px-1">
                <span>Courses &amp; Resources</span>
                <span>User Activity Tracking</span>
              </div>
            </div>

            {/* Bottom status badge */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8] relative z-10">
              <span>Resource Organization</span>
              <span className="text-[#34D399]">Modular</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-44 w-full bg-white/5 border-b border-white/10 p-4 flex items-center justify-center">
            <Film className="w-8 h-8 text-[#8B5CF6]" />
          </div>
        );
    }
  };

  return (
    <div className="glass-panel rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#8B5CF6]/10 flex flex-col justify-between group overflow-hidden">
      {/* Visual Header */}
      <div>
        {renderVisualPreview()}

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          <span className="text-xs font-mono font-medium text-[#38BDF8] uppercase tracking-wider block mb-1">
            {project.category}
          </span>
          <h3 className="font-heading text-xl font-bold text-[#F8FAFC] group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#94A3B8] mb-3">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.04] border border-white/10 text-[#CBD5E1]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between gap-3">
        {/* Detail Button */}
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] rounded p-1 min-h-[44px]"
        >
          <Info className="w-4 h-4" />
          <span>Details</span>
        </button>

        {/* Primary GitHub Action */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[44px]"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>Explore on GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
        </a>
      </div>
    </div>
  );
};
