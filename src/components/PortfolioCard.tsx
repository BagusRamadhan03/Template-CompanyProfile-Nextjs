import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioProject } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  project: PortfolioProject;
  featured?: boolean;
}

export function PortfolioCard({
  project,
  featured = false,
}: PortfolioCardProps) {
  const primaryResult = project.results[0];
  const monogram = project.clientName
    .split(" ")
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-line bg-cream transition-all duration-500 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_35px_70px_-45px_rgba(18,18,16,0.5)]",
        featured && "md:col-span-2"
      )}
    >
      <div
        className={cn(
          "grain grain-light relative overflow-hidden bg-gradient-to-br p-6 text-bone sm:p-8",
          project.coverGradient,
          featured ? "min-h-[21rem] sm:min-h-[25rem]" : "min-h-[15rem]"
        )}
      >
        <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-bone/15" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-2 select-none font-serif text-[9rem] italic leading-none text-bone/10 transition-transform duration-700 group-hover:-translate-y-2"
        >
          {monogram}
        </span>

        <div className="relative z-10 flex h-full flex-col justify-between gap-14">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full border border-bone/25 bg-bone/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] backdrop-blur-sm">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-bone/60">
              {project.year}
            </span>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/55">
              {project.clientName}
            </p>
            <h3
              className={cn(
                "mt-2 max-w-2xl text-balance font-semibold tracking-tight text-bone",
                featured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
              )}
            >
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {project.shortSummary}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack
              .slice(0, featured ? 5 : 3)
              .map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-bone/60 px-2 py-1 text-[10px] font-medium text-ink/60"
                >
                  {tech}
                </span>
              ))}
            {project.techStack.length > (featured ? 5 : 3) && (
              <span className="rounded-md border border-line bg-bone/60 px-2 py-1 text-[10px] font-medium text-muted">
                +{project.techStack.length - (featured ? 5 : 3)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
          {primaryResult ? (
            <div>
              <p className="font-serif text-2xl italic leading-none text-ember-ink">
                {primaryResult.value}
              </p>
              <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                {primaryResult.label}
              </p>
            </div>
          ) : (
            <span />
          )}
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-bone">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
