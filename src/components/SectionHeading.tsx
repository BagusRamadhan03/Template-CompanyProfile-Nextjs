import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  index?: string;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  index,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {(badge || index) && (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            centered && "justify-center"
          )}
        >
          {index && (
            <span
              className={cn(
                "font-mono text-[10px] font-semibold tracking-[0.2em]",
                dark ? "text-ember" : "text-ember-ink"
              )}
            >
              {index}
            </span>
          )}
          {badge && (
            <span
              className={cn(
                "font-mono text-[10px] font-semibold uppercase tracking-[0.24em]",
                dark ? "text-bone/40" : "text-muted"
              )}
            >
              {badge}
            </span>
          )}
          <span
            className={cn("h-px w-8", dark ? "bg-bone/20" : "bg-line")}
            aria-hidden="true"
          />
        </div>
      )}

      <h2
        className={cn(
          "text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-[2.85rem]",
          dark ? "text-bone" : "text-ink"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-pretty text-sm leading-relaxed sm:text-base",
            centered && "mx-auto",
            dark ? "text-bone/45" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
