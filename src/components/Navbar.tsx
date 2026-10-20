"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { companyData } from "@/lib/data/company";
import { mainNavItems } from "@/lib/data/navigation";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isItemActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={cn(
          "relative z-50 mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-3 py-2.5 transition-all duration-500 sm:px-4",
          scrolled
            ? "border-line bg-cream/90 shadow-[0_20px_60px_-40px_rgba(18,18,16,0.6)] backdrop-blur-xl"
            : "border-transparent bg-bone/45 backdrop-blur-md"
        )}
      >
        <Logo />

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-0.5 md:flex"
        >
          {mainNavItems.map((item) => {
            const isActive = isItemActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {item.title}
                <span
                  className={cn(
                    "absolute inset-x-4 bottom-0.5 h-px origin-left scale-x-0 bg-ember transition-transform duration-300 group-hover:scale-x-100",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/contact" arrow className="hidden sm:inline-flex">
            Mulai proyek
          </Button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone md:hidden"
            aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-bone/95 backdrop-blur-2xl"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative flex h-full flex-col justify-between overflow-y-auto px-6 pb-10 pt-28">
            <nav aria-label="Navigasi mobile" className="flex flex-col">
              {mainNavItems.map((item, index) => {
                const isActive = isItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "group flex animate-rise items-center justify-between border-b border-line py-5 text-2xl font-semibold tracking-tight",
                      isActive ? "text-ember-ink" : "text-ink"
                    )}
                    style={{ animationDelay: `${index * 55}ms` }}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] font-medium text-muted">
                        0{index + 1}
                      </span>
                      {item.title}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-ink" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-10 animate-rise space-y-5 [animation-delay:280ms]">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                Hubungi kami
              </p>
              <div className="space-y-1.5">
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="block text-lg font-medium text-ink transition-colors hover:text-ember-ink"
                >
                  {companyData.contact.email}
                </a>
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="block text-sm text-muted transition-colors hover:text-ink"
                >
                  {companyData.contact.phone}
                </a>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                arrow
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Jadwalkan konsultasi
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
