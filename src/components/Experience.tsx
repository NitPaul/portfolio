import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experiences } from "../data/experience";
import { Briefcase, Heart } from "lucide-react";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState<"all" | "work" | "volunteer">("all");

  const filtered =
    filter === "all" ? experiences : experiences.filter((e) => e.type === filter);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">EXPERIENCE</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <p className="font-mono text-accent-teal text-sm mb-2">
                {"// "}004
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Experience &{" "}
                <span className="italic text-accent-violet">Leadership</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-10 font-mono text-sm">
              {(["all", "work", "volunteer"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    filter === f
                      ? "bg-accent-teal/10 text-accent-teal border border-accent-teal/30"
                      : "text-text-muted hover:text-text-secondary border border-white/[0.06] hover:border-white/10"
                  }`}
                >
                  {f === "all" ? "$ ls -a" : f === "work" ? "$ cat work" : "$ cat volunteer"}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative pl-10 md:pl-12">
              {/* Vertical line */}
              <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-teal/40 via-accent-teal/20 to-transparent" />

              <div className="space-y-8">
                {filtered.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute -left-10 md:-left-12 top-1 w-[14px] h-[14px] rounded-full border-2 z-10 ${
                        exp.active
                          ? "bg-accent-teal border-accent-teal shadow-[0_0_12px_rgba(100,255,218,0.5)]"
                          : "bg-bg-primary border-accent-teal/60"
                      }`}
                    />

                    {/* Card */}
                    <div className="glass-card p-5 md:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-text-primary font-semibold">
                              {exp.title}
                            </h3>
                            {exp.active && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-accent-teal/15 text-accent-teal border border-accent-teal/30 animate-pulse">
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <p className="text-accent-blue text-sm font-mono">
                            {exp.organization}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {exp.type === "work" ? (
                            <Briefcase size={14} className="text-accent-amber" />
                          ) : (
                            <Heart size={14} className="text-accent-rose" />
                          )}
                          <span className="font-mono text-xs text-text-muted">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description as terminal log */}
                      <div className="space-y-1.5 font-mono text-xs">
                        {exp.description.map((desc, j) => (
                          <p key={j} className="text-text-secondary">
                            <span className="text-accent-teal/60 select-none">
                              {"> "}
                            </span>
                            {desc}
                          </p>
                        ))}
                      </div>

                      <p className="mt-3 text-[10px] font-mono text-text-muted">
                        @ {exp.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
