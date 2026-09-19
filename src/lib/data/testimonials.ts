export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  projectSlug?: string;
  avatarInitials: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    author: "Hendra Gunawan",
    role: "Chief Technology Officer",
    company: "Bank Artha Nusantara",
    quote:
      "Kerja sama dengan Nusantara Tekno Solusi merupakan lompatan besar bagi kami. Mereka tidak sekadar membangun software, tapi mengerti regulasi ketat perbankan dan memberikan solusi arsitektur yang tahan banting.",
    rating: 5,
    projectSlug: "bank-digital-omnichannel",
    avatarInitials: "HG",
  },
  {
    id: "test-2",
    author: "Dewi Lestari",
    role: "VP of Operations",
    company: "Nusantara Express Cargo",
    quote:
      "Platform IoT fleet management yang dibangun NTS membantu kami menghemat biaya operasional bahan bakar secara signifikan. Respons tim mereka luar biasa cepat dan solutif.",
    rating: 5,
    projectSlug: "logistik-nusantara-tracking",
    avatarInitials: "DL",
  },
  {
    id: "test-3",
    author: "dr. Faisal Firmansyah, Sp.A",
    role: "Direktur Transformasi Medis",
    company: "Medika Sehat Bersama",
    quote:
      "Aplikasi telemedicine kami mendapat apresiasi luar biasa dari ribuan pasien. Desain UI/UX yang bersih membuat orang tua maupun staf medis mudah menggunakannya.",
    rating: 5,
    projectSlug: "telemedika-health-platform",
    avatarInitials: "FF",
  },
  {
    id: "test-4",
    author: "Rudi Hartono",
    role: "Managing Director",
    company: "Gaya Nusantara Retail Group",
    quote:
      "Sinkronisasi multi-toko yang dibangun NTS menghilangkan kendala selisih stok kami di seluruh gerai fisik dan online marketplace. Sangat kami rekomendasikan!",
    rating: 5,
    projectSlug: "retail-pos-smart-inventory",
    avatarInitials: "RH",
  },
];
