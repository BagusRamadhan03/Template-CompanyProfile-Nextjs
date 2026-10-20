"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  label: string;
  value: string;
  description: string;
}

interface StatsStripProps {
  stats: Stat[];
  dark?: boolean;
  className?: string;
}

function CountUpValue({ value, start }: { value: string; start: boolean }) {
  const [display, setDisplay] = useState(value);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!start || doneRef.current) return;

    const match = /^(\d+(?:[.,]\d+)?)(.*)$/.exec(value);
    if (!match) return;

    const target = Number.parseFloat(match[1].replace(",", "."));
    const suffix = match[2] ?? "";
    const decimals = /[.,]\d/.test(match[1]) ? 1 : 0;
    const duration = 1500;
    const startedAt = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        doneRef.current = true;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return <>{display}</>;
}

export function StatsStrip({ stats, dark = false, className }: StatsStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("grid grid-cols-2 lg:grid-cols-4", className)}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "group relative p-6 transition-colors duration-300 sm:p-8",
            dark ? "border-bone/10" : "border-line",
            index % 2 === 1 && "border-l",
            index > 0 && "lg:border-l",
            index < 2 && "border-b lg:border-b-0",
            dark ? "hover:bg-bone/[0.03]" : "hover:bg-cream/70"
          )}
        >
          <p
            className={cn(
              "font-serif text-4xl italic leading-none tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5 sm:text-5xl",
              dark ? "text-bone" : "text-ink"
            )}
          >
            <CountUpValue value={stat.value} start={start} />
          </p>
          <p
            className={cn(
              "mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]",
              dark ? "text-bone/70" : "text-ink/70"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ember transition-transform duration-300 group-hover:scale-150" />
            {stat.label}
          </p>
          <p
            className={cn(
              "mt-2 text-xs leading-relaxed",
              dark ? "text-bone/40" : "text-muted"
            )}
          >
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
