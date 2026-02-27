import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { publications } from "../data/publications";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function Publications() {
  const { ref, isVisible } = useScrollReveal();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="publications" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">RESEARCH</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <p className="font-mono text-accent-teal text-sm mb-2">
                {"// "}002
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Research &{" "}
                <span className="italic text-accent-violet">Publications</span>
              </h2>
              <p className="mt-4 text-text-secondary font-mono text-sm">
                <span className="text-accent-teal">6</span> Conference Papers
                Published{" "}
                <span className="text-text-muted mx-2">{"·"}</span>
                <span className="text-accent-amber">3</span> Papers Presented{" "}
                <span className="text-text-muted mx-2">{"·"}</span>
                Focus: NLP, LLMs, Medical AI, Statistical Modeling
              </p>
            </div>

            {/* Publication Cards */}
            <div className="space-y-4">
              {publications.map((pub, i) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="terminal-block group"
                >
                  {/* Code editor top bar */}
                  <div className="terminal-header">
                    <div className="terminal-dot bg-[#ff5f57]" />
                    <div className="terminal-dot bg-[#ffbd2e]" />
                    <div className="terminal-dot bg-[#28c840]" />
                    <span className="text-text-muted text-xs font-mono ml-2">
                      paper_{String(pub.id).padStart(2, "0")}.bib
                    </span>
                    <span className="ml-auto text-xs font-mono text-text-muted">
                      {pub.year}
                    </span>
                  </div>

                  <div className="p-5 md:p-6">
                    {/* Left border accent */}
                    <div className="flex gap-4">
                      <div
                        className="w-1 rounded-full flex-shrink-0 hidden sm:block"
                        style={{ backgroundColor: pub.color }}
                      />

                      <div className="flex-1 space-y-3">
                        {/* Title */}
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-text-primary font-semibold text-base md:text-lg leading-snug group-hover:text-accent-teal transition-colors">
                            {pub.title}
                          </h3>
                          {pub.link && (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 p-2 rounded-lg hover:bg-accent-teal/10 text-text-muted hover:text-accent-teal transition-all"
                              aria-label="View publication"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>

                        {/* Metadata — styled like code comments */}
                        <div className="font-mono text-xs space-y-1">
                          <p>
                            <span className="text-text-muted">
                              {"// venue: "}
                            </span>
                            <span className="text-accent-blue">
                              {pub.venueShort}
                            </span>
                            <span className="text-text-muted"> — </span>
                            <span className="text-text-secondary">
                              {pub.venue.split("—")[1]?.trim() || pub.venue}
                            </span>
                          </p>
                          <p>
                            <span className="text-text-muted">
                              {"// role:  "}
                            </span>
                            <span style={{ color: pub.color }}>
                              {pub.role}
                            </span>
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {pub.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] text-text-muted border border-white/[0.06]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Expandable Abstract */}
                        <button
                          onClick={() =>
                            setExpandedId(
                              expandedId === pub.id ? null : pub.id
                            )
                          }
                          className="flex items-center gap-1 text-xs font-mono text-text-muted hover:text-accent-teal transition-colors"
                        >
                          {expandedId === pub.id ? (
                            <ChevronUp size={14} />
                          ) : (
                            <ChevronDown size={14} />
                          )}
                          {expandedId === pub.id
                            ? "collapse abstract"
                            : "view abstract"}
                        </button>

                        <AnimatePresence>
                          {expandedId === pub.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04] mt-2">
                                <p className="text-text-secondary text-sm leading-relaxed">
                                  {pub.abstract}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
