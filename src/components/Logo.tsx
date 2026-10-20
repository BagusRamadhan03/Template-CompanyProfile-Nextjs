import Link from "next/link";
import { companyData } from "@/lib/data/company";
import { cn } from "@/lib/utils";

interface LogoProps {
  inverted?: boolean;
  className?: string;
}

export function Logo({ inverted = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${companyData.name} — Beranda`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full focus-visible:outline-none",
        className
      )}
    >
      <span
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
          inverted
            ? "border-bone/25 bg-bone/5 text-bone group-hover:border-ember group-hover:bg-ember group-hover:text-ink"
            : "border-ink/15 bg-ink text-bone group-hover:border-ember group-hover:bg-ember group-hover:text-ink"
        )}
      >
        <span className="font-serif text-xl italic leading-none">n</span>
        <span
          className={cn(
            "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-ember ring-2 transition-colors duration-300 group-hover:bg-ink",
            inverted
              ? "ring-ink group-hover:ring-ember"
              : "ring-cream group-hover:ring-ember"
          )}
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[15px] font-bold tracking-tight transition-colors",
            inverted ? "text-bone" : "text-ink"
          )}
        >
          {companyData.shortName}
          <span className="ml-0.5 align-super text-[8px] font-medium text-ember">
            ®
          </span>
        </span>
        <span
          className={cn(
            "mt-1.5 font-mono text-[9px] uppercase tracking-[0.22em]",
            inverted ? "text-bone/40" : "text-muted"
          )}
        >
          Jakarta · ID
        </span>
      </span>
    </Link>
  );
}
