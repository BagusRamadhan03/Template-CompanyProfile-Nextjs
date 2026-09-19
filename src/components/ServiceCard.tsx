import Link from "next/link";
import { ServiceDetail } from "@/lib/data/services";
import {
  Globe,
  Smartphone,
  Cloud,
  BarChart3,
  Palette,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceDetail;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-blue-600" };
    switch (iconName) {
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
  };

  return (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300/80 transition-all duration-300 flex flex-col justify-between">
      {service.popular && (
        <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          <span>Populer</span>
        </div>
      )}

      <div>
        {/* Icon & Category */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 [&>svg]:group-hover:text-white">
            {renderIcon(service.icon)}
          </div>
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
            {service.category}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {service.shortDesc}
        </p>

        {/* Highlight points */}
        <ul className="mt-5 space-y-2 text-xs text-slate-600">
          {service.highlightPoints.slice(0, 3).map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Link */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          Estimasi: {service.estimatedDuration}
        </span>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
        >
          <span>Detail Layanan</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
