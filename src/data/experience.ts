export interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  type: "work" | "volunteer";
  active?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "LLM Application Engineer Intern",
    organization: "Unies",
    period: "Feb 2026 - Present",
    location: "Dhaka, Bangladesh",
    description: [
      "Architected and deployed LLM-powered applications leveraging advanced prompt engineering and fine-tuning techniques",
      "Engineered data pipelines for text extraction, classification, and NLP model evaluation",
      "Contributed to RAG exploration and domain-specific model adaptation",
    ],
    type: "work",
    active: true,
  },
  {
    id: 2,
    title: "Data Entry Specialist",
    organization: "BMIT Solutions LTD",
    period: "2022 (3 Months)",
    location: "Government Project",
    description: [
      "Executed high-volume data entry and management tasks as part of a government initiative",
      "Gained foundational experience in data accuracy, quality assurance, and project delivery",
    ],
    type: "work",
  },
  {
    id: 3,
    title: "Publicity Team Leader - Cyber Gaming Fest 2025",
    organization: "AIUB Computer Club",
    period: "Dec 2025",
    location: "AIUB",
    description: [
      "Spearheaded outreach campaign attracting 799 student gamers from 118 institutes",
      "Drove participation of ~440 players from school and college segments",
    ],
    type: "volunteer",
  },
  {
    id: 4,
    title: "Room Leader - AIUB CS Fest 2024",
    organization: "AIUB Computer Club",
    period: "2024",
    location: "AIUB",
    description: [
      "Managed App Showcasing Contest: supervised 5 groups with 30 participants",
      "Served as Room Lead for ICT Olympiad, Math Olympiad, and content writing contests",
    ],
    type: "volunteer",
  },
  {
    id: 5,
    title: "Volunteer - Intra AIUB Programming Contest",
    organization: "AIUB Competitive Programmers' Community",
    period: "2024",
    location: "AIUB",
    description: [
      "Managed 35+ competitive coders, ensuring smooth contest operations",
      "Performed guitar at the Closing Ceremony",
    ],
    type: "volunteer",
  },
  {
    id: 6,
    title: "Flood Relief Aid Distribution",
    organization: "AIUB Social Welfare Club - SHOMOY",
    period: "Aug 2024",
    location: "Feni, Bangladesh",
    description: [
      "Contributed to fundraising campaign raising over 5 lakhs BDT for Feni flood relief",
      "Coordinated preparation and delivery of essential aid to affected regions",
    ],
    type: "volunteer",
  },
  {
    id: 7,
    title: "Volunteer - The IDEAS Challenge 2K23",
    organization: "AIUB Social Welfare Club - SHOMOY",
    period: "2023",
    location: "AIUB",
    description: [
      "Guided teams from 100+ participating groups representing 30+ colleges",
      "Managed diverse groups of teenagers in a national social innovation event",
    ],
    type: "volunteer",
  },
];
