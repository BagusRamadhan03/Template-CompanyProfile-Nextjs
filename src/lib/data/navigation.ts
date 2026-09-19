export interface NavItem {
  title: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { title: "Beranda", href: "/" },
  { title: "Tentang Kami", href: "/about" },
  { title: "Layanan", href: "/services" },
  { title: "Portofolio", href: "/portfolio" },
  { title: "Kontak", href: "/contact" },
];

export const quickLinks: NavItem[] = [
  { title: "Beranda", href: "/" },
  { title: "Profil Perusahaan", href: "/about" },
  { title: "Katalog Layanan", href: "/services" },
  { title: "Studi Kasus & Proyek", href: "/portfolio" },
  { title: "Hubungi Kami", href: "/contact" },
];
