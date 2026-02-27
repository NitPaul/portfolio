export type CertificateCategory = "Research" | "Professional" | "Workshop";

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: number;
  category: CertificateCategory;
  description: string;
  image?: string;
  pdfLink?: string;
  color: string;
}

export const certificates: Certificate[] = [
  // ── Research ──────────────────────────────────────────────
  {
    id: 1,
    title: "23rd International Mathematics Conference",
    issuer: "Dept. of Mathematics, Jahangirnagar University",
    year: 2023,
    category: "Research",
    description:
      "Presented research on Sign Language Recognition for inclusive public services.",
    image: "/assets/certificates/imc_2023_sign_language.jpg",
    color: "#60a5fa",
  },
  {
    id: 2,
    title: "International Conference on Physics 2024",
    issuer: "Dept. of Physics, Jahangirnagar University",
    year: 2024,
    category: "Research",
    description:
      "Poster presentation on wind energy integration in Bangladesh's textile industry.",
    image: "/assets/certificates/icp_2024_poster.jpg",
    color: "#60a5fa",
  },
  {
    id: 3,
    title: "2nd South Asian Conference on Cyclones",
    issuer: "South Asian Meteorological Association",
    year: 2024,
    category: "Research",
    description:
      "Research on cyclone pattern analysis using statistical methods.",
    image: "/assets/certificates/sacc_2024_cyclones.jpg",
    color: "#60a5fa",
  },
  {
    id: 4,
    title: "IDAA 2025 — Medical BERTs for ADR Classification",
    issuer: "Int'l Conference on Data Analytics & AI",
    year: 2025,
    category: "Research",
    description:
      "Paper on fine-tuning Medical BERT models for Adverse Drug Reaction classification.",
    pdfLink: "/assets/certificates/idaa_2025_cert.pdf",
    color: "#60a5fa",
  },

  // ── Professional ─────────────────────────────────────────
  {
    id: 5,
    title: "Data Science & Machine Learning with Python",
    issuer: "Ostad — Data Science 38 Batch",
    year: 2024,
    category: "Professional",
    description:
      "Comprehensive training covering Python, ML algorithms, and data analysis pipelines.",
    color: "#64ffda",
  },
  {
    id: 6,
    title: "Python (Django) Web Development",
    issuer: "EDGE Project, Bangladesh Computer Council, ICT Division",
    year: 2023,
    category: "Professional",
    description:
      "Full-stack web development with Django framework under government EDGE initiative.",
    pdfLink: "/assets/certificates/django_edge_cert.pdf",
    color: "#64ffda",
  },
  {
    id: 7,
    title: "Microsoft Word — Complete Course",
    issuer: "10 Minute School",
    year: 2022,
    category: "Professional",
    description: "Professional document formatting and productivity skills.",
    image: "/assets/certificates/ms_word_10ms.jpg",
    color: "#64ffda",
  },
  {
    id: 8,
    title: "Microsoft Excel — Complete Course",
    issuer: "10 Minute School",
    year: 2022,
    category: "Professional",
    description:
      "Data management, formulas, pivot tables, and spreadsheet automation.",
    image: "/assets/certificates/ms_excel_10ms.jpg",
    color: "#64ffda",
  },
  {
    id: 9,
    title: "Basics of Artificial Intelligence",
    issuer: "10 Minute School",
    year: 2022,
    category: "Professional",
    description:
      "Foundational concepts of AI, neural networks, and machine learning.",
    image: "/assets/certificates/basics_ai_10ms.jpg",
    color: "#64ffda",
  },
  {
    id: 10,
    title: "Introduction to Programming",
    issuer: "10 Minute School",
    year: 2022,
    category: "Professional",
    description:
      "Programming fundamentals, logic building, and problem-solving techniques.",
    image: "/assets/certificates/intro_programming_10ms.jpg",
    color: "#64ffda",
  },
  {
    id: 11,
    title: "Data Entry Project Certification",
    issuer: "BMIT Solutions LTD",
    year: 2023,
    category: "Professional",
    description:
      "Certified completion of professional data entry and management project.",
    image: "/assets/certificates/bmit_data_entry.png",
    color: "#64ffda",
  },

  // ── Workshop ─────────────────────────────────────────────
  {
    id: 12,
    title: "Dementia & Caregiving Workshop",
    issuer: "NTU — Nanyang Technological University (Singapore)",
    year: 2024,
    category: "Workshop",
    description:
      "International workshop on dementia care, awareness, and assistive technologies.",
    image: "/assets/certificates/ntu_dementia_workshop.jpg",
    color: "#fbbf24",
  },
  {
    id: 13,
    title: "AIUB Poster Presentation Contest",
    issuer: "American International University-Bangladesh",
    year: 2022,
    category: "Workshop",
    description:
      "Participated in university-wide poster contest showcasing research methodology.",
    image: "/assets/certificates/aiub_poster_contest_2022.jpg",
    color: "#fbbf24",
  },
  {
    id: 14,
    title: "The IDEAS Challenge 2K23",
    issuer: "AIUB Community of Engineering Students",
    year: 2023,
    category: "Workshop",
    description:
      "Social innovation competition involving ideation, design, and prototype development.",
    image: "/assets/certificates/ideas_challenge_2023.jpg",
    color: "#fbbf24",
  },
  {
    id: 15,
    title: "CS Fest 2024 — Appreciation Certificate",
    issuer: "AIUB Computer Club",
    year: 2024,
    category: "Workshop",
    description:
      "Recognized for outstanding contribution and room leadership at CS Fest 2024.",
    image: "/assets/certificates/cs_fest_2024_appreciation.jpg",
    color: "#fbbf24",
  },
];
