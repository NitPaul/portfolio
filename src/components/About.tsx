import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import YouTubeFacade from "./YouTubeFacade";
import { MapPin, GraduationCap, BookOpen, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "CGPA",
    value: "3.97 / 4.00",
    sub: "AIUB — Dean's List 3x",
  },
  {
    icon: BookOpen,
    label: "Publications",
    value: "6 Papers",
    sub: "International Conferences",
  },
  {
    icon: Briefcase,
    label: "Current Role",
    value: "LLM Engineer",
    sub: "Intern @ Unies",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Dhaka",
    sub: "Bangladesh",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">ABOUT</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="mb-12">
              <p className="font-mono text-accent-teal text-sm mb-2">
                {"// "}001
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                About <span className="italic text-accent-violet">Me</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Bio Text */}
              <div className="lg:col-span-3 space-y-6">
                <p className="text-text-secondary leading-relaxed text-lg">
                  Hi, I'm{" "}
                  <span className="text-text-primary font-semibold">
                    Aonyendo Paul Neteish
                  </span>{" "}
                  — a Computer Science researcher, LLM Application Engineer
                  Intern, and passionate problem-solver exploring the frontiers
                  of{" "}
                  <span className="text-accent-teal">NLP</span>,{" "}
                  <span className="text-accent-violet">
                    Large Language Models
                  </span>
                  , and{" "}
                  <span className="text-accent-blue">
                    AI-driven healthcare
                  </span>
                  .
                </p>
                <p className="text-text-secondary leading-relaxed">
                  With{" "}
                  <span className="text-accent-amber font-mono">
                    6 international conference publications
                  </span>
                  , a near-perfect CGPA at AIUB, and a knack for leading
                  large-scale events, I bridge the gap between cutting-edge
                  research and real-world impact. My work spans from
                  benchmarking Medical BERTs for adverse drug reaction detection
                  to statistical modeling of climate data.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  When I'm not training models or analyzing data, you'll find me
                  observing my surroundings on long walks — a habit that fuels
                  my curiosity and creativity. I believe the best research comes
                  from paying attention to the world around you.
                </p>

                {/* Research Focus Tags */}
                <div className="pt-4">
                  <p className="font-mono text-text-muted text-xs uppercase tracking-wider mb-3">
                    Research Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Natural Language Processing",
                      "Large Language Models",
                      "Medical AI",
                      "Statistical Modeling",
                      "Computer Vision",
                      "Banglish Translation",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.06] text-text-secondary hover:border-accent-teal/30 hover:text-accent-teal transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights + YouTube */}
              <div className="lg:col-span-2 space-y-6">
                {/* Highlight Cards */}
                <div className="grid grid-cols-2 gap-3">
                  {highlights.map(({ icon: Icon, label, value, sub }, i) => (
                    <motion.div
                      key={label}
                      className="glass-card p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      <Icon
                        size={18}
                        className="text-accent-teal mb-2 opacity-70"
                      />
                      <p className="text-text-primary font-bold text-sm">
                        {value}
                      </p>
                      <p className="text-text-muted text-xs font-mono">
                        {sub}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* YouTube Embed */}
                <div className="terminal-block overflow-hidden">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-[#ff5f57]" />
                    <div className="terminal-dot bg-[#ffbd2e]" />
                    <div className="terminal-dot bg-[#28c840]" />
                    <span className="text-text-muted text-xs font-mono ml-2">
                      intro.mp4
                    </span>
                  </div>
                  <div className="aspect-video">
                    <YouTubeFacade
                      videoId="Ht5XHB50C0M"
                      title="Aonyendo Paul Neteish — Introduction"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
