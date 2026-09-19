export interface CompanyInfo {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  shortBio: string;
  fullBio: string;
  establishedYear: number;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  contact: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    email: string;
    phone: string;
    whatsapp: string;
    whatsappFormatted: string;
    workingHours: string;
    googleMapsEmbedUrl: string;
    googleMapsUrl: string;
  };
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  vision: string;
  mission: string[];
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "Nusantara Tekno Solusi",
  legalName: "PT Nusantara Tekno Solusi Indonesia",
  shortName: "NTS Digital",
  tagline: "Mitra Transformasi Digital & Solusi Teknologi Terdepan",
  shortBio:
    "Kami membantu enterprise, institusi, dan startup berkembang pesat melalui rekayasa perangkat lunak modern, integrasi cloud, dan arsitektur data mutakhir.",
  fullBio:
    "Berdiri sejak 2018 di Jakarta, PT Nusantara Tekno Solusi Indonesia berdedikasi menciptakan ekosistem digital yang tangguh, efisien, dan berdaya saing global. Didukung tim insinyur perangkat lunak, arsitek cloud, dan konsultan bisnis berpengalaman, kami telah menyelesaikan lebih dari 120+ implementasi teknologi bernilai tinggi di berbagai sektor industri.",
  establishedYear: 2018,
  stats: [
    { label: "Proyek Selesai", value: "120+", description: "Solusi enterprise & custom digital" },
    { label: "Klien Aktif", value: "45+", description: "Korporasi terkemuka & institusi publik" },
    { label: "Kepuasan Klien", value: "99.2%", description: "Berdasarkan ulasan berkala" },
    { label: "Expert Insinyur", value: "35+", description: "Talenta bersertifikasi internasional" },
  ],
  contact: {
    address: "Menara Batavia Lt. 18, Jl. K.H. Mas Mansyur Kav. 126, Karet Tengsin, Tanah Abang",
    city: "Jakarta Pusat",
    province: "DKI Jakarta",
    postalCode: "10220",
    country: "Indonesia",
    email: "contact@nusantaratekno.co.id",
    phone: "+62 21 5798 8800",
    whatsapp: "6281234567890",
    whatsappFormatted: "+62 812-3456-7890",
    workingHours: "Senin – Jumat: 08.30 – 17.30 WIB",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4526279679873!2d106.8159670758686!3d-6.20386766077552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f69747738c8f%3A0x8e8ebce89d2d48c8!2sBatavia%20Tower!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
    googleMapsUrl: "https://maps.google.com/?q=Menara+Batavia+Jakarta",
  },
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com/company/nusantara-tekno-solusi", icon: "Linkedin" },
    { platform: "Instagram", url: "https://instagram.com/nusantarateknosolusi", icon: "Instagram" },
    { platform: "YouTube", url: "https://youtube.com/@nusantaratekno", icon: "Youtube" },
    { platform: "GitHub", url: "https://github.com/nusantara-tekno", icon: "Github" },
  ],
  vision:
    "Menjadi perusahaan konsultansi dan rekayasa teknologi digital paling tepercaya di Asia Tenggara yang mendorong efisiensi, transparansi, dan kemajuan berkelanjutan.",
  mission: [
    "Menyediakan rekayasa perangkat lunak berstandar internasional dengan performa tinggi dan keamanan ketat.",
    "Membimbing transformasi digital menyeluruh bagi klien melalui pendekatan arsitektur yang modular dan scalable.",
    "Mengembangkan talenta teknologi lokal berkelas dunia melalui budaya inovasi dan kolaborasi terbuka.",
    "Memberikan dampak bisnis terukur dengan ROI nyata untuk setiap solusi teknologi yang diluncurkan.",
  ],
  coreValues: [
    {
      title: "Integrity & Excellence",
      description: "Kami menjunjung transparansi dan standar kualitas kode tanpa kompromi pada setiap baris solusi.",
      icon: "ShieldCheck",
    },
    {
      title: "Agile Innovation",
      description: "Beradaptasi cepat terhadap perubahan teknologi dan kebutuhan pasar tanpa mengorbankan stabilitas.",
      icon: "Sparkles",
    },
    {
      title: "Client-Centric Collaboration",
      description: "Kami bukan sekadar vendor, melainkan mitra strategis jangka panjang bagi kesuksesan bisnis Anda.",
      icon: "Users",
    },
    {
      title: "Scalable Reliability",
      description: "Merancang arsitektur sistem yang andal, berkecepatan tinggi, dan siap menangani pertumbuhan jutaan pengguna.",
      icon: "Cpu",
    },
  ],
};
