import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { companyData } from "@/lib/data/company";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f4f0e8",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nusantaratekno.co.id"),
  title: {
    default: `${companyData.name} — ${companyData.tagline}`,
    template: `%s | ${companyData.shortName}`,
  },
  description: companyData.shortBio,
  keywords: [
    "Software House Indonesia",
    "Konsultan IT Jakarta",
    "Jasa Pembuatan Web Enterprise",
    "Pengembangan Aplikasi Mobile",
    "Cloud Architecture AWS GCP",
    "Data Engineering & BI",
    "PT Nusantara Tekno Solusi Indonesia",
  ],
  authors: [{ name: companyData.name, url: "https://nusantaratekno.co.id" }],
  creator: companyData.name,
  publisher: companyData.legalName,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://nusantaratekno.co.id",
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.shortBio,
    siteName: companyData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.shortBio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for Organization Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.legalName,
    alternateName: companyData.name,
    url: "https://nusantaratekno.co.id",
    logo: "https://nusantaratekno.co.id/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyData.contact.phone,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.contact.address,
      addressLocality: companyData.contact.city,
      addressRegion: companyData.contact.province,
      postalCode: companyData.contact.postalCode,
      addressCountry: "ID",
    },
    sameAs: companyData.socialLinks.map((s) => s.url),
  };

  return (
    <html
      lang="id"
      id="top"
      className={`${jakartaSans.variable} ${instrumentSerif.variable} font-sans`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col bg-bone text-ink antialiased">
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-bone"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Cursor />
      </body>
    </html>
  );
}
