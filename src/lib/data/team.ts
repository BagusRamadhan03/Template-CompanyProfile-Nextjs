export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarGradient: string;
  initials: string;
  expertise: string[];
  linkedinUrl?: string;
  githubUrl?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "Arya Wicaksono, M.Sc.",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Mantan Principal Architect di korporasi multinasional dengan pengalaman 15+ tahun memimpin inisiatif transformasi digital di Asia Pasifik.",
    avatarGradient: "from-blue-600 to-indigo-700",
    initials: "AW",
    expertise: ["Enterprise Architecture", "Strategic Innovation", "Tech Leadership"],
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
  },
  {
    id: "team-2",
    name: "Dr. Nabila Putri Rahardjo",
    role: "Chief Technology Officer & Co-Founder",
    bio: "Doktor Ilmu Komputer dengan spesialisasi arsitektur cloud terdistribusi dan sistem data throughput tinggi. Pembicara aktif di konferensi tech global.",
    avatarGradient: "from-purple-600 to-pink-600",
    initials: "NP",
    expertise: ["Distributed Systems", "Cloud-Native", "Data Engineering"],
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
  },
  {
    id: "team-3",
    name: "Bambang Sudiro, S.Kom.",
    role: "VP of Engineering",
    bio: "Praktisi Agile dan arsitek software veteran. Berpengalaman mengelola tim rekayasa perangkat lunak multi-disiplin untuk produk berjutaan pengguna aktif.",
    avatarGradient: "from-cyan-600 to-blue-700",
    initials: "BS",
    expertise: ["DevOps & CI/CD", "Microservices", "Engineering Culture"],
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
  },
  {
    id: "team-4",
    name: "Siti Sarah Andini",
    role: "Head of Product & Design",
    bio: "Berpengalaman memimpin tim produk dan UX di berbagai startup unicorn Indonesia. Berfokus pada human-centered design dan konversi produk yang optimal.",
    avatarGradient: "from-emerald-500 to-teal-700",
    initials: "SA",
    expertise: ["Design Systems", "Product Strategy", "User Research"],
    linkedinUrl: "https://linkedin.com",
  },
];
