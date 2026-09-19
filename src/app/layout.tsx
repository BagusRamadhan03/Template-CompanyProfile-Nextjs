import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { companyData } from "@/lib/data/company";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nusantaratekno.co.id"),
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
    <html lang="id" className={`${jakartaSans.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
