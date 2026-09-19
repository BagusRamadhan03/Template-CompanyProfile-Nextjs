import Link from "next/link";
import { PortfolioProject } from "@/lib/data/portfolio";
import { ArrowUpRight, TrendingUp, Layers } from "lucide-react";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const primaryResult = project.results[0];

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Visual Cover Banner */}
        <div
          className={`h-48 bg-gradient-to-tr ${project.coverGradient} p-6 flex flex-col justify-between relative overflow-hidden`}
        >
          {/* Subtle decorative shapes */}
          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
            <Layers className="w-24 h-24 text-white" />
          </div>

          <div className="flex items-center justify-between z-10">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
              {project.category}
            </span>
            <span className="text-xs text-white/80 font-medium">
              {project.year}
            </span>
          </div>

          <div className="z-10">
            <span className="text-xs uppercase tracking-wider text-white/75 font-semibold">
              Klien: {project.clientName}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1 line-clamp-2 drop-shadow-sm">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {project.shortSummary}
          </p>

          {/* Key Metric Highlight */}
          {primaryResult && (
            <div className="mt-4 p-3 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-blue-900 font-bold">
                  {primaryResult.value}{" "}
                  <span className="text-blue-700 font-medium">
                    ({primaryResult.label})
                  </span>
                </p>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {primaryResult.description}
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[11px] font-medium bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-6 pt-0">
        <Link
          href={`/portfolio/${project.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200 hover:border-transparent transition-all group-hover:shadow-md"
        >
          <span>Baca Studi Kasus</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
