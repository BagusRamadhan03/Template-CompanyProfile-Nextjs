import { Asterisk } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultItems = [
  "Web Platforms",
  "Mobile Apps",
  "Cloud & DevOps",
  "Data & AI",
  "UI/UX Design",
  "Cyber Security",
];

const accentItems = [
  "Berpikir sistemik",
  "Rekayasa presisi",
  "Kolaborasi terbuka",
  "Dampak terukur",
];

interface TickerStripProps {
  items?: string[];
  className?: string;
}

function TickerGroup({
  items,
  accent = false,
}: {
  items: string[];
  accent?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-14 sm:pr-14">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center gap-8 sm:gap-14">
          <span
            className={cn(
              "whitespace-nowrap",
              accent
                ? "font-mono text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm"
                : "font-serif text-3xl italic leading-none sm:text-4xl"
            )}
          >
            {item}
          </span>
          {accent ? (
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/50" />
          ) : (
            <Asterisk className="h-5 w-5 shrink-0 text-ember sm:h-6 sm:w-6" />
          )}
        </span>
      ))}
    </div>
  );
}

export function TickerStrip({ items = defaultItems, className }: TickerStripProps) {
  return (
    <section
      aria-hidden="true"
      className={cn("relative overflow-hidden py-16 sm:py-24", className)}
    >
      <div className="marquee relative -ml-[4%] w-[108%] -rotate-2 border-y border-ink bg-ink py-4 text-bone shadow-[0_30px_60px_-40px_rgba(18,18,16,0.8)] sm:py-5">
        <div className="marquee-track flex w-max items-center">
          <TickerGroup items={items} />
          <TickerGroup items={items} />
        </div>
      </div>

      <div className="marquee relative -mt-px -ml-[4%] w-[108%] rotate-[1.2deg] border-y border-ink/15 bg-ember py-3 text-ink sm:py-3.5">
        <div className="marquee-track marquee-reverse marquee-fast flex w-max items-center">
          <TickerGroup items={accentItems} accent />
          <TickerGroup items={accentItems} accent />
        </div>
      </div>
    </section>
  );
}
