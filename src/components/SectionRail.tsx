"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const chapters = [
  { id: "beranda", label: "Beranda" },
  { id: "kapabilitas", label: "Kapabilitas" },
  { id: "karya", label: "Karya" },
  { id: "proses", label: "Proses" },
  { id: "testimoni", label: "Testimoni" },
  { id: "kolaborasi", label: "Kolaborasi" },
];

export function SectionRail() {
  const [active, setActive] = useState("beranda");

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navigasi bab halaman"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 min-[1440px]:block xl:left-6"
    >
      <ol className="flex flex-col gap-4">
        {chapters.map((chapter, index) => {
          const isActive = active === chapter.id;
          return (
            <li key={chapter.id}>
              <a
                href={`#${chapter.id}`}
                aria-label={`Ke bab ${chapter.label}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex items-center gap-3"
              >
                <span
                  className={cn(
                    "font-mono text-[9px] tracking-[0.18em] transition-colors duration-300",
                    isActive
                      ? "text-ember-ink"
                      : "text-muted/60 group-hover:text-muted"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "h-px transition-all duration-500",
                    isActive
                      ? "w-8 bg-ember"
                      : "w-3.5 bg-line group-hover:w-6 group-hover:bg-ink/40"
                  )}
                />
                <span
                  className={cn(
                    "pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-full border border-line bg-cream px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-ink shadow-[0_12px_30px_-18px_rgba(18,18,16,0.5)] transition-all duration-300",
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  )}
                >
                  {chapter.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
