import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { companyData } from "@/lib/data/company";
import { servicesData } from "@/lib/data/services";
import { quickLinks } from "@/lib/data/navigation";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { LocalClock } from "@/components/LocalClock";
import { RotatingStamp } from "@/components/RotatingStamp";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="grain grain-light relative overflow-hidden bg-ink text-bone">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-bone/10 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="eyebrow text-bone/40">
              <span className="h-px w-8 bg-ember" />
              Punya proyek di pikiran?
            </p>
            <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl italic leading-[1.02] tracking-tight text-bone sm:text-5xl lg:text-6xl">
              Mari wujudkan sesuatu yang{" "}
              <span className="text-ember">hebat</span>.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <RotatingStamp className="hidden lg:block" />
            <Button
              href="/contact"
              variant="ember"
              size="lg"
              arrow
              className="hover:bg-bone hover:text-ink"
            >
              Mulai percakapan
            </Button>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="text-sm text-bone/50 underline-offset-4 transition-colors hover:text-bone hover:underline"
            >
              {companyData.contact.email}
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <Logo inverted />
            <p className="max-w-xs text-sm leading-relaxed text-bone/45">
              {companyData.shortBio}
            </p>
            <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-bone/30">
              {companyData.legalName}
            </p>

            <div className="flex items-center gap-2 pt-1">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/10 text-bone/50 transition-all duration-300 hover:border-ember hover:bg-ember hover:text-ink"
                    aria-label={`Kunjungi akun ${item.platform} kami`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/35">
              Layanan
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-bone/60 transition-colors hover:text-bone"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/35">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-bone/60 transition-colors hover:text-bone"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-bone/35">
              Kantor pusat
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                <span className="text-xs leading-relaxed text-bone/55">
                  {companyData.contact.address}
                  <br />
                  {companyData.contact.city}, {companyData.contact.province}{" "}
                  {companyData.contact.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-ember" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-xs text-bone/55 transition-colors hover:text-bone"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-ember" />
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="text-xs text-bone/55 transition-colors hover:text-bone"
                >
                  {companyData.contact.phone}
                </a>
              </li>
            </ul>
            <p className="mt-5 border-t border-bone/10 pt-4 text-[11px] text-bone/35">
              {companyData.contact.workingHours}
            </p>
          </div>
        </div>

        <div className="border-t border-bone/10 pt-8">
          <div aria-hidden="true" className="overflow-hidden">
            <p className="whitespace-nowrap font-serif text-[clamp(4.5rem,15vw,13rem)] italic leading-[0.78] tracking-[-0.06em] text-bone/10">
              NUSANTARA<span className="text-ember/40">.</span>
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 py-8 text-[11px] text-bone/35 sm:flex-row sm:items-center">
            <p>
              &copy; {currentYear} {companyData.legalName}. Hak cipta
              dilindungi undang-undang.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Tersedia untuk proyek baru
              </span>
              <span className="hidden items-center gap-2 font-mono sm:flex">
                Jakarta —
                <LocalClock className="tabular-nums" />
              </span>
              <a
                href="#top"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-bone"
              >
                Kembali ke atas
                <ArrowUp className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
