import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { GraduationCap, Award, Star, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    period: "2022 - 2026 (Pursuing)",
    gpa: "3.97",
    gpaMax: "4.00",
    highlights: ["Dean's List Honors — 3 Times", "Academic Scholarship since 2023"],
    featured: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Birshreshtha Munshi Abdur Rouf Public College",
    period: "2019 - 2021",
    gpa: "5.00",
    gpaMax: "5.00",
    highlights: [],
    featured: false,
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Feni Government Pilot High School",
    period: "2014 - 2018",
    gpa: "5.00",
    gpaMax: "5.00",
    highlights: [],
    featured: false,
  },
];

const awards = [
  {
    title: "AIUB Dean's List Honors",
    detail: "Faculty of Science & Technology — 3 Times",
    year: "2023-2025",
    icon: Star,
  },
  {
    title: "AIUB Academic Scholarship",
    detail: "Merit-based scholarship",
    year: "Since 2023",
    icon: Award,
  },
  {
    title: "6 Research Publications",
    detail: "International conferences across AI, statistics, and NLP",
    year: "2023-2025",
    icon: BookOpen,
  },
  {
    title: "Shapla Cub Award",
    detail: "Bangladesh Scouts",
    year: "2012",
    icon: Award,
  },
];


export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">EDUCATION</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <p className="font-mono text-accent-teal text-sm mb-2">
                {"// "}006
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Education &{" "}
                <span className="italic text-accent-violet">Honors</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Education Cards */}
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <motion.div
                    key={edu.degree}
                    className={`terminal-block p-5 md:p-6 ${
                      edu.featured ? "ring-1 ring-accent-teal/20" : ""
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl ${
                          edu.featured
                            ? "bg-accent-teal/10 text-accent-teal"
                            : "bg-white/[0.04] text-text-muted"
                        }`}
                      >
                        <GraduationCap size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-text-primary font-semibold text-sm mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-accent-blue text-xs font-mono mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-text-muted text-xs font-mono">
                          {edu.period}
                        </p>

                        {/* GPA Display */}
                        <div className="mt-3 flex items-baseline gap-2">
                          <span
                            className={`font-display text-3xl font-bold ${
                              edu.featured
                                ? "text-accent-teal text-glow-teal"
                                : "text-accent-amber"
                            }`}
                          >
                            {edu.gpa}
                          </span>
                          <span className="text-text-muted text-xs font-mono">
                            / {edu.gpaMax}
                          </span>
                        </div>

                        {/* Highlights */}
                        {edu.highlights.length > 0 && (
                          <div className="mt-3 space-y-1">
                            {edu.highlights.map((h) => (
                              <p
                                key={h}
                                className="text-xs font-mono text-text-secondary"
                              >
                                <span className="text-accent-amber mr-1">
                                  *
                                </span>
                                {h}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Test Prep */}
                <div className="glass-card p-4">
                  <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
                    {"// "}Test Preparation — In Progress
                  </p>
                  <div className="flex gap-4">
                    {["GRE", "IELTS"].map((test) => (
                      <div
                        key={test}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-amber/[0.08] border border-accent-amber/20"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
                        <span className="font-mono text-xs text-accent-amber">
                          {test}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Awards */}
              <div>
                <p className="font-mono text-text-muted text-xs uppercase tracking-wider mb-4">
                  {"// "}Awards & Honors
                </p>
                <div className="space-y-3">
                  {awards.map((award, i) => {
                    const Icon = award.icon;
                    return (
                      <motion.div
                        key={award.title}
                        className="glass-card p-4 flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                      >
                        <Icon
                          size={16}
                          className="text-accent-amber mt-0.5 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <p className="text-text-primary text-sm font-semibold">
                            {award.title}
                          </p>
                          <p className="text-text-muted text-xs font-mono">
                            {award.detail}
                          </p>
                        </div>
                        <span className="text-text-muted text-[10px] font-mono flex-shrink-0">
                          {award.year}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
