import Link from "next/link";
import { companyData } from "@/lib/data/company";
import { servicesData } from "@/lib/data/services";
import { quickLinks } from "@/lib/data/navigation";
import {
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";
import {
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  GitHubIcon,
} from "@/components/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {companyData.name}
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyData.shortBio}
            </p>
            <div className="pt-2">
              <p className="text-xs text-slate-500 font-medium">
                Badan Hukum Resmi:
              </p>
              <p className="text-xs text-slate-300 font-semibold mt-0.5">
                {companyData.legalName}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-3">
              {companyData.socialLinks.map((item) => {
                let IconComponent = LinkedInIcon;
                if (item.icon === "Instagram") IconComponent = InstagramIcon;
                if (item.icon === "Youtube") IconComponent = YouTubeIcon;
                if (item.icon === "Github") IconComponent = GitHubIcon;

                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                    aria-label={`Kunjungi akun ${item.platform} kami`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 3: Layanan Kami */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Layanan Utama
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      {srv.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Tautan Cepat */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Tautan Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Kontak & Kantor */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Kantor Pusat
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-slate-400">
                  {companyData.contact.address}, {companyData.contact.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="text-xs hover:text-white transition-colors"
                >
                  {companyData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-400">
                  {companyData.contact.workingHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {companyData.legalName}. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-400 transition-colors">
              Tentang Kami
            </Link>
            <Link href="/services" className="hover:text-slate-400 transition-colors">
              Layanan
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
