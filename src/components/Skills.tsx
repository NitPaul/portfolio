import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillCategories } from "../data/skills";
import { Terminal, Brain, BarChart3, Settings } from "lucide-react";

const iconMap: Record<string, typeof Terminal> = {
  terminal: Terminal,
  brain: Brain,
  "bar-chart": BarChart3,
  settings: Settings,
};

function SkillBar({
  name,
  level,
  color,
  delay,
  animate,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  animate: boolean;
}) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-sm text-text-secondary group-hover:text-text-primary transition-colors">
          <span className="text-accent-teal/50 select-none">{">"} </span>
          {name}
        </span>
        <span className="font-mono text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
        <motion.div
          className="h-full rounded-full skill-bar-fill"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={animate ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">SKILLS</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <p className="font-mono text-accent-teal text-sm mb-2">
                {"// "}005
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Skills{" "}
                <span className="italic text-accent-violet">Matrix</span>
              </h2>
            </div>

            {/* Terminal-style skills display */}
            <div className="terminal-block max-w-4xl">
              {/* Tab bar */}
              <div className="flex items-center border-b border-white/[0.06] overflow-x-auto">
                {skillCategories.map((cat, i) => {
                  const Icon = iconMap[cat.icon] || Terminal;
                  return (
                    <button
                      key={cat.category}
                      onClick={() => setActiveTab(i)}
                      className={`flex items-center gap-2 px-4 py-3 font-mono text-xs whitespace-nowrap transition-all border-b-2 ${
                        activeTab === i
                          ? "text-accent-teal border-accent-teal bg-accent-teal/[0.05]"
                          : "text-text-muted border-transparent hover:text-text-secondary hover:bg-white/[0.02]"
                      }`}
                    >
                      <Icon size={14} />
                      {cat.category}
                    </button>
                  );
                })}
              </div>

              {/* Skills Content */}
              <div className="p-6 md:p-8">
                {/* Terminal header */}
                <div className="font-mono text-xs text-text-muted mb-6">
                  <span className="text-accent-teal">$</span> cat{" "}
                  skills/{skillCategories[activeTab].category
                    .toLowerCase()
                    .replace(/\s+/g, "_")}
                    .config
                </div>

                <div className="space-y-4">
                  {skillCategories[activeTab].skills.map((skill, i) => (
                    <SkillBar
                      key={`${activeTab}-${skill.name}`}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      delay={i * 0.08}
                      animate={isVisible}
                    />
                  ))}
                </div>

                {/* ASCII art bottom */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] font-mono text-[10px] text-text-muted/40 hidden md:block">
                  <pre>{`  ┌─────────────────────────────────────┐
  │  Total Skills Loaded: ${skillCategories.reduce((a, c) => a + c.skills.length, 0).toString().padEnd(14)}   │
  │  Categories: ${skillCategories.length}                        │
  │  Status: always_learning             │
  └─────────────────────────────────────┘`}</pre>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  skill: "Leadership",
                  detail: "Team management for 100+ person events",
                },
                {
                  skill: "Public Speaking",
                  detail: "3 international conference presentations",
                },
                {
                  skill: "Research Writing",
                  detail: "6 published conference papers",
                },
                {
                  skill: "Adaptability",
                  detail: "Crisis management under pressure",
                },
              ].map((s, i) => (
                <motion.div
                  key={s.skill}
                  className="glass-card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <p className="text-text-primary font-semibold text-sm mb-1">
                    {s.skill}
                  </p>
                  <p className="text-text-muted text-xs font-mono">
                    {s.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
