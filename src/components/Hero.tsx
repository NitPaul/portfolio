import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  BookOpen,
  FileText,
  ChevronDown,
} from "lucide-react";

const typingLines = [
  { prompt: "$ whoami", response: "Aonyendo Paul Neteish", delay: 0 },
  {
    prompt: "$ cat role.txt",
    response: "AI & LLM Research Enthusiast",
    delay: 1800,
  },
  {
    prompt: "$ echo $UNIVERSITY",
    response: "AIUB — CGPA 3.97/4.00",
    delay: 3600,
  },
  {
    prompt: '$ wc -l publications/*',
    response: "6 international conference papers",
    delay: 5400,
  },
];

const roles = [
  "Computer Science Student",
  "AI & LLM Research Enthusiast",
  "Statistical Analyst",
  "Data Analyst",
  "NLP Engineer",
];

function TerminalTyping() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [showResponse, setShowResponse] = useState<boolean[]>([]);

  useEffect(() => {
    if (visibleLines >= typingLines.length) return;

    const line = typingLines[visibleLines];
    const promptLen = line.prompt.length;

    if (typedChars < promptLen) {
      const timer = setTimeout(
        () => setTypedChars((c) => c + 1),
        40 + Math.random() * 30
      );
      return () => clearTimeout(timer);
    } else if (!showResponse[visibleLines]) {
      const timer = setTimeout(() => {
        setShowResponse((prev) => {
          const next = [...prev];
          next[visibleLines] = true;
          return next;
        });
      }, 300);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setTypedChars(0);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, typedChars, showResponse]);

  return (
    <div className="terminal-block w-full max-w-xl">
      <div className="terminal-header">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#ffbd2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        <span className="text-text-muted text-xs font-mono ml-2">
          aonyendo@portfolio ~ zsh
        </span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[200px]">
        {typingLines.map((line, i) => {
          if (i > visibleLines) return null;
          const isCurrentLine = i === visibleLines;
          const promptText = isCurrentLine
            ? line.prompt.slice(0, typedChars)
            : line.prompt;

          return (
            <div key={i} className="mb-3">
              <div className="flex items-center gap-2">
                <span className="text-accent-teal select-none">
                  {promptText}
                </span>
                {isCurrentLine &&
                  typedChars < line.prompt.length && (
                    <span className="inline-block w-2 h-4 bg-accent-teal animate-blink" />
                  )}
              </div>
              {(showResponse[i] || i < visibleLines) && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-text-primary ml-2 mt-1"
                >
                  <span className="text-text-muted">{">"}</span>{" "}
                  {line.response}
                </motion.div>
              )}
            </div>
          );
        })}
        {visibleLines >= typingLines.length && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-accent-teal">$</span>
            <span className="inline-block w-2 h-4 bg-accent-teal animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}

function RoleRotator() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const role = roles[currentRole];

    if (!isDeleting) {
      if (displayed.length < role.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          50 + Math.random() * 30
        );
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          25
        );
      } else {
        setIsDeleting(false);
        setCurrentRole((c) => (c + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, currentRole]);

  return (
    <span className="text-accent-teal font-mono">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-teal/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-violet/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-3">
              <motion.p
                className="font-mono text-accent-teal text-sm tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {"// "}hello world
              </motion.p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1]">
                Aonyendo
                <br />
                Paul{" "}
                <span className="text-accent-teal text-glow-teal">
                  Neteish
                </span>
              </h1>
              <div className="text-lg md:text-xl text-text-secondary pt-2">
                <RoleRotator />
              </div>
            </div>

            <p className="text-text-secondary max-w-lg leading-relaxed text-base">
              Transforming data into impact — one model at a time. CS researcher
              specializing in NLP, LLMs, and AI-driven healthcare with 6
              international publications.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { value: "6", label: "Papers Published" },
                { value: "3.97", label: "CGPA / 4.00" },
                { value: "7+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-display font-bold text-accent-teal text-glow-teal">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/NitPaul",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/nitpaul/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:aonyendopaul@gmail.com",
                  label: "Email",
                },
                {
                  icon: BookOpen,
                  href: "https://www.researchgate.net/profile/Aonyendo-Neteish",
                  label: "ResearchGate",
                },
                {
                  icon: FileText,
                  href: "https://orcid.org/0009-0008-8181-081X",
                  label: "ORCID",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-text-secondary hover:text-accent-teal hover:border-accent-teal/30 hover:bg-accent-teal/[0.06] transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal + Photo */}
          <motion.div
            className="flex-1 flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Profile Photo */}
            <div className="gradient-border rounded-2xl">
              <div className="rounded-2xl overflow-hidden w-48 h-48 md:w-56 md:h-56">
                <img
                  src="/assets/profile/profile_photo.jpg"
                  alt="Aonyendo Paul Neteish"
                  width={224}
                  height={224}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Terminal */}
            <TerminalTyping />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-accent-teal transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
