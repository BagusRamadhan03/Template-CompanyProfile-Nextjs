import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Cloud,
  Globe,
  Palette,
  Shield,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { ServiceDetail } from "@/lib/data/services";

interface ServiceCardProps {
  service: ServiceDetail;
  index?: number;
}

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const props = { className };
  switch (name) {
    case "Smartphone":
      return <Smartphone {...props} />;
    case "Cloud":
      return <Cloud {...props} />;
    case "BarChart3":
      return <BarChart3 {...props} />;
    case "Palette":
      return <Palette {...props} />;
    case "Shield":
      return <Shield {...props} />;
    case "Globe":
    default:
      return <Globe {...props} />;
  }
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <Link
      id={service.slug}
      href={`/services/${service.slug}`}
      className="group relative flex h-full scroll-mt-32 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_30px_60px_-40px_rgba(18,18,16,0.45)] sm:p-8"
    >
      {service.popular && (
        <span className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-xl bg-ember px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-ink">
          <Sparkles className="h-3 w-3" />
          Populer
        </span>
      )}

      <div>
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-bone text-ink transition-colors duration-300 group-hover:border-ember group-hover:bg-ember">
            <ServiceIcon name={service.icon} className="h-5 w-5" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
          {service.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-ember-ink">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.shortDesc}
        </p>

        <ul className="mt-5 space-y-2.5">
          {service.highlightPoints.slice(0, 3).map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-xs leading-relaxed text-ink/65"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ember" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
        <span className="text-[11px] text-muted">
          Estimasi {service.estimatedDuration}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-bone">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
