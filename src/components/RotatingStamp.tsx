import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RotatingStampProps {
  className?: string;
}

export function RotatingStamp({ className }: RotatingStampProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative h-32 w-32 sm:h-36 sm:w-36", className)}
    >
      <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
        <defs>
          <path
            id="stamp-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text
          className="fill-bone/50 font-mono text-[8.2px] uppercase"
          letterSpacing="2.6"
        >
          <textPath
            href="#stamp-circle"
            textLength="238"
            lengthAdjust="spacing"
          >
            SOFTWARE HOUSE • EST 2018 • JAKARTA • SOFTWARE HOUSE • EST 2018 •
          </textPath>
        </text>
      </svg>

      <Link
        href="/contact"
        aria-label="Ajukan proposal proyek"
        className="group absolute inset-0 m-auto flex h-12 w-12 items-center justify-center rounded-full bg-ember text-ink transition-transform duration-500 hover:scale-110"
      >
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
      </Link>
    </div>
  );
}
