import { Asterisk } from "lucide-react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1}
          >
            {items.map((item) => (
              <span
                key={`${group}-${item}`}
                className="flex items-center gap-8 px-4 text-base font-medium tracking-tight text-ink/65 sm:text-lg"
              >
                <span className="whitespace-nowrap">{item}</span>
                <Asterisk className="h-4 w-4 shrink-0 text-ember" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
