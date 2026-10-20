"use client";

import { companyData } from "@/lib/data/company";

export function WhatsAppButton() {
  const waUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    `Halo ${companyData.name}, saya ingin berkonsultasi mengenai kebutuhan solusi digital perusahaan kami.`
  )}`;

  return (
    <aside
      aria-label="Kontak cepat WhatsApp"
      className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="group relative inline-flex h-12 items-center gap-2.5 rounded-full border border-ink/10 bg-ink pl-4 pr-4 text-sm font-semibold text-bone shadow-[0_18px_45px_-20px_rgba(18,18,16,0.85)] transition-all duration-300 hover:bg-ember hover:text-ink sm:pr-5"
      >
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-ink/20 transition-colors group-hover:ring-ink/10" />
        </span>
        <span>WhatsApp</span>
      </a>
    </aside>
  );
}
