export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NLP Sentiment & Depression Analysis",
    description:
      "Engineered Deep Learning models (BERT, BiLSTM) to detect depression signals and classify sentiment, outperforming traditional baselines with advanced NLP preprocessing pipelines.",
    stack: ["Python", "PyTorch", "BERT", "NLP", "Deep Learning"],
    repo: "https://github.com/NitPaul/NLP-Sentiment-and-Depression-Analysis",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Workplace Wellbeing in R",
    description:
      "Investigated mental health outcomes in the tech sector using EDA and clustering algorithms (K-Means, Hierarchical, DBSCAN) to uncover how remote work and workload impact employee wellness.",
    stack: ["R", "K-Means", "DBSCAN", "Hierarchical Clustering"],
    repo: "https://github.com/NitPaul/Tech-Workplace-Wellbeing-R",
    featured: true,
  },
  {
    id: 3,
    title: "Retail Sales Performance Dashboard",
    description:
      "Built a comprehensive sales performance dashboard analyzing 2023-2024 retail data with actionable business intelligence insights using Pivot Tables and advanced visualization.",
    stack: ["Excel", "Pivot Tables", "Data Visualization"],
    repo: "https://github.com/NitPaul/Retail-Sales-Performance-Analysis",
    featured: true,
  },
  {
    id: 4,
    title: "BDNewsPaperScraper",
    description:
      "Custom Scrapy spiders to scrape and classify articles from Bangla newspapers for NLP research and dataset construction.",
    stack: ["Python", "Scrapy", "Web Scraping", "NLP"],
    repo: "https://github.com/NitPaul/BDNewsPaperScraper",
    featured: true,
  },
  {
    id: 5,
    title: "Pharmacy Management System",
    description:
      "Full-stack pharmacy operation system supporting Admin, Pharmacist, and Customer roles with Gmail authentication and automatic PDF receipt generation.",
    stack: ["C#", "Visual Studio", "MS SQL", "GUNA2 GUI"],
    repo: "https://github.com/EhsanulHaqueSiam/PharmacyManagementSystem",
    featured: false,
  },
  {
    id: 6,
    title: "Hotel Management System",
    description:
      "Hotel reservation management application with Admin and Customer accounts for streamlined guest and billing operations.",
    stack: ["Java", "Java Swing", "File I/O"],
    featured: false,
  },
  {
    id: 7,
    title: "Student Database Management System",
    description:
      "Relational database system for managing student information, course registrations, and administrative tasks.",
    stack: ["MySQL", "SQL"],
    featured: false,
  },
];
