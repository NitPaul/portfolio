export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "terminal",
    skills: [
      { name: "Python", level: 95, color: "#64ffda" },
      { name: "R", level: 85, color: "#60a5fa" },
      { name: "SQL", level: 82, color: "#c4b5fd" },
      { name: "C#", level: 80, color: "#fbbf24" },
      { name: "Java", level: 70, color: "#fb7185" },
      { name: "C / C++", level: 65, color: "#4ade80" },
    ],
  },
  {
    category: "ML / AI Frameworks",
    icon: "brain",
    skills: [
      { name: "PyTorch", level: 88, color: "#64ffda" },
      { name: "Hugging Face", level: 85, color: "#fbbf24" },
      { name: "scikit-learn", level: 85, color: "#60a5fa" },
      { name: "TensorFlow", level: 75, color: "#c4b5fd" },
      { name: "spaCy / NLTK", level: 80, color: "#4ade80" },
    ],
  },
  {
    category: "Data & Visualization",
    icon: "bar-chart",
    skills: [
      { name: "Pandas / NumPy", level: 92, color: "#64ffda" },
      { name: "Matplotlib", level: 85, color: "#60a5fa" },
      { name: "Seaborn", level: 82, color: "#c4b5fd" },
      { name: "SPSS", level: 78, color: "#fbbf24" },
      { name: "Excel / Pivot", level: 85, color: "#fb7185" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "settings",
    skills: [
      { name: "Git / GitHub", level: 88, color: "#64ffda" },
      { name: "LaTeX", level: 82, color: "#60a5fa" },
      { name: "Jupyter / Colab", level: 90, color: "#fbbf24" },
      { name: "VS Code", level: 92, color: "#c4b5fd" },
      { name: "MySQL", level: 80, color: "#4ade80" },
    ],
  },
];
