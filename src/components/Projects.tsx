import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/projects";
import { Github, ExternalLink, Folder } from "lucide-react";

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">PROJECTS</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <p className="font-mono text-accent-teal text-sm mb-2">
                {"// "}003
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Technical{" "}
                <span className="italic text-accent-violet">Projects</span>
              </h2>
            </div>

            {/* Featured Projects Grid */}
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              {featured.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="terminal-block group hover:border-accent-teal/20 transition-all duration-300"
                >
                  {/* Terminal top bar */}
                  <div className="terminal-header">
                    <div className="terminal-dot bg-[#ff5f57]" />
                    <div className="terminal-dot bg-[#ffbd2e]" />
                    <div className="terminal-dot bg-[#28c840]" />
                    <span className="text-text-muted text-xs font-mono ml-2 truncate">
                      ~/projects/{project.title.toLowerCase().replace(/\s+/g, "-")}
                    </span>
                  </div>

                  <div className="p-5 md:p-6 space-y-4">
                    {/* Title + Links */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-text-primary font-semibold text-lg group-hover:text-accent-teal transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-accent-teal/10 text-text-muted hover:text-accent-teal transition-all"
                            aria-label="View repository"
                          >
                            <Github size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Terminal-style clone command */}
                    {project.repo && (
                      <div className="font-mono text-xs text-text-muted bg-white/[0.02] rounded-lg px-3 py-2 border border-white/[0.04]">
                        <span className="text-accent-teal">$</span> git clone{" "}
                        <span className="text-accent-blue">
                          {project.repo.replace("https://github.com/", "")}
                        </span>
                      </div>
                    )}

                    {/* Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-accent-teal/[0.08] text-accent-teal border border-accent-teal/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Projects */}
            {other.length > 0 && (
              <div>
                <p className="font-mono text-text-muted text-xs uppercase tracking-wider mb-4">
                  {"// "}Other Noteworthy Projects
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {other.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + i * 0.1,
                      }}
                      className="glass-card p-5 group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <Folder
                          size={20}
                          className="text-accent-teal opacity-60"
                        />
                        {project.repo && (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent-teal transition-colors"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <h4 className="text-text-primary font-semibold text-sm mb-2 group-hover:text-accent-teal transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-text-muted text-xs leading-relaxed mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
