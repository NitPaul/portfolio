export interface Publication {
  id: number;
  title: string;
  venue: string;
  venueShort: string;
  year: number;
  role: string;
  abstract: string;
  link?: string;
  tags: string[];
  color: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Beyond NER: A Comparative Benchmark of Medical BERTs for Multi-Label Adverse Drug Reaction Classification on the PsyTAR Dataset",
    venue:
      "IDAA 2025 — International Conference on Intelligent Data Analysis and Applications",
    venueShort: "IDAA 2025",
    year: 2025,
    role: "First Author & Researcher",
    abstract:
      "Benchmarked five transformer models (BERT, BioBERT, ClinicalBERT, PubMedBERT, SciBERT) for ADR identification from 6,009 annotated sentences. Engineered LLRD, SWA, and Weighted Random Sampling to combat class imbalance in a low-resource clinical NLP setting.",
    link: "https://dl.acm.org/doi/10.1145/3723178.3723277",
    tags: ["NLP", "Medical AI", "BERT", "Deep Learning"],
    color: "#60a5fa",
  },
  {
    id: 2,
    title:
      "Hearing the Unheard: Statistical Examination of Public Attitudes, Awareness, and Acceptance of Sign Language Recognition in Dhaka",
    venue: "ICCA 2024 — International Conference on Computing Advancements",
    venueShort: "ICCA 2024",
    year: 2024,
    role: "First Author & Presenter",
    abstract:
      "Surveyed 107 respondents and applied correlation analysis and logistic regression to uncover societal acceptance patterns for SLR technology.",
    tags: ["Statistics", "Computer Vision", "Survey Analysis"],
    color: "#c4b5fd",
  },
  {
    id: 3,
    title:
      "Cyclones and Calamity: A Historical and Statistical Unmasking of Losses in Bangladesh",
    venue: "2nd South Asian Climate Conference",
    venueShort: "SACC 2024",
    year: 2024,
    role: "First Author",
    abstract:
      "Leveraged time-series analysis to study the historical impact of cyclones and resulting damages across Bangladesh.",
    tags: ["Statistics", "Time-Series", "Climate"],
    color: "#fbbf24",
  },
  {
    id: 4,
    title:
      "Breaking Barriers: Integrating Sign Language Recognition for Inclusive Public Services",
    venue:
      "23rd International Mathematics Conference — Bangladesh Mathematical Society",
    venueShort: "IMC 2023",
    year: 2023,
    role: "First Author & Presenter",
    abstract:
      "Presented the role of SLR technology in promoting inclusive public services through deep learning-based recognition systems.",
    tags: ["Computer Vision", "Deep Learning", "Accessibility"],
    color: "#fb7185",
  },
  {
    id: 5,
    title:
      "Weibull Distribution-Based Assessment of Wind Energy Potential in Rajshahi, Bangladesh",
    venue:
      "23rd International Mathematics Conference — Bangladesh Mathematical Society",
    venueShort: "IMC 2023",
    year: 2023,
    role: "Co-Author",
    abstract:
      "Evaluated wind energy potential using Weibull statistical models for sustainable energy planning in Rajshahi division.",
    tags: ["Statistics", "Weibull Distribution", "Energy"],
    color: "#4ade80",
  },
  {
    id: 6,
    title:
      "Sustainable Spins: A Statistical Exploration of Wind Energy Integration in Bangladesh's Textile Industry",
    venue:
      "International Conference on Physics-2024 — Bangladesh Physical Society",
    venueShort: "ICP 2024",
    year: 2024,
    role: "First Author (Poster)",
    abstract:
      "Explored correlation and regression between environmental factors and textile industry sustainability through wind energy integration analysis.",
    tags: ["Statistics", "Regression", "Sustainability"],
    color: "#fbbf24",
  },
];
