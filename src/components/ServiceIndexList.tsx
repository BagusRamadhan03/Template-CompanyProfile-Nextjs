"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ServiceDetail } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "@/components/ServiceCard";

const previewGradients = [
  "from-[#141312] via-[#3b2417] to-[#ff4d1f]",
  "from-[#17131f] via-[#3d2a56] to-[#c084fc]",
  "from-[#0f1a22] via-[#1e3d55] to-[#67c3e8]",
  "from-[#241a10] via-[#5a3a1f] to-[#f2b04a]",
  "from-[#121f1a] via-[#1f4a37] to-[#5fd39a]",
  "from-[#26121a] via-[#5f2438] to-[#ff8a9b]",
];

interface ServiceIndexListProps {
  services: ServiceDetail[];
}

export function ServiceIndexList({ services }: ServiceIndexListProps) {
  const [active, setActive] = useState<number | null>(null);
  const [lastActive, setLastActive] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 0 });

  const moveCard = () => {
    frameRef.current = 0;
    const card = cardRef.current;
    if (!card) return;
    const { x, y } = pointerRef.current;
    card.style.transform = `translate3d(${x - 144}px, ${y - 168}px, 0)`;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(moveCard);
    }
  };

  const displayIndex = active ?? lastActive;
  const displayService = services[displayIndex];

  return (
    <div
      className="relative mt-14 border-t border-line"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActive(null)}
    >
      {services.map((service, index) => {
        const isActive = active === index;
        return (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            onMouseEnter={() => {
              setActive(index);
              setLastActive(index);
            }}
            onFocus={() => {
              setActive(index);
              setLastActive(index);
            }}
            className="group relative flex items-center gap-4 border-b border-line py-6 transition-colors duration-300 hover:bg-cream/70 sm:gap-8 sm:py-7"
          >
            <span
              className={cn(
                "font-mono text-[10px] transition-colors duration-300",
                isActive ? "text-ember-ink" : "text-muted"
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className={cn(
                    "text-xl font-semibold tracking-tight transition-all duration-300 sm:text-2xl",
                    isActive
                      ? "translate-x-1 text-ember-ink"
                      : "text-ink"
                  )}
                >
                  {service.title}
                </h3>
                {service.popular && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-ember/40 bg-ember-soft/60 px-2.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-ember-ink">
                    <Sparkles className="h-2.5 w-2.5" />
                    Populer
                  </span>
                )}
              </div>
              <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted">
                {service.shortDesc}
              </p>
            </div>

            <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.18em] text-muted lg:block">
              {service.estimatedDuration}
            </span>

            <span
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                isActive
                  ? "border-ember bg-ember text-ink"
                  : "border-line text-ink"
              )}
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        );
      })}

      <div
        ref={cardRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-20 hidden w-72 transition-opacity duration-300 lg:block",
          active === null ? "opacity-0" : "opacity-100"
        )}
      >
        <div
          className={cn(
            "grain grain-light relative -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-bone/10 bg-gradient-to-br p-6 text-bone shadow-[0_45px_90px_-45px_rgba(18,18,16,0.75)]",
            previewGradients[displayIndex % previewGradients.length]
          )}
        >
          <div className="absolute inset-0 bg-blueprint-dark opacity-40" />
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-bone/15" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-bone/20 bg-bone/10">
                <ServiceIcon name={displayService.icon} className="h-4 w-4" />
              </span>
              <span className="font-serif text-4xl italic leading-none text-bone/25">
                {String(displayIndex + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.22em] text-bone/50">
              {displayService.category}
            </p>
            <h4 className="mt-2 text-lg font-semibold leading-snug">
              {displayService.title}
            </h4>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {displayService.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-bone/20 bg-bone/5 px-2 py-0.5 text-[9px] text-bone/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-5 flex items-center gap-1.5 border-t border-bone/15 pt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-ember">
              Lihat detail
              <ArrowUpRight className="h-3 w-3" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
