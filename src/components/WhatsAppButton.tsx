"use client";

import { MessageCircle } from "lucide-react";
import { companyData } from "@/lib/data/company";

export function WhatsAppButton() {
  const waUrl = `https://wa.me/${companyData.contact.whatsapp}?text=${encodeURIComponent(
    `Halo ${companyData.name}, saya ingin berkonsultasi mengenai kebutuhan solusi digital perusahaan kami.`
  )}`;

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-200">
        Chat Tim Kami via WhatsApp
      </span>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat via WhatsApp"
      >
        {/* Pulse indicator badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
}
