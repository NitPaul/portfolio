import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  BookOpen,
  Youtube,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "NitPaul",
    href: "https://github.com/NitPaul",
    color: "#e2e8f0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "nitpaul",
    href: "https://www.linkedin.com/in/nitpaul/",
    color: "#60a5fa",
  },
  {
    icon: BookOpen,
    label: "ResearchGate",
    handle: "Aonyendo-Neteish",
    href: "https://www.researchgate.net/profile/Aonyendo-Neteish",
    color: "#4ade80",
  },
  {
    icon: ExternalLink,
    label: "ORCID",
    handle: "0009-0008-8181-081X",
    href: "https://orcid.org/0009-0008-8181-081X",
    color: "#a3e635",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "Aonyendo Paul Neteish",
    href: "https://www.youtube.com/@aonyendopaulneteish1207",
    color: "#fb7185",
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">CONTACT</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12 text-center">
              <p className="font-mono text-accent-teal text-sm mb-2">
                {"// "}009
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Get In{" "}
                <span className="italic text-accent-violet">Touch</span>
              </h2>
              <p className="mt-4 text-text-secondary max-w-lg mx-auto">
                I'm always open to discussing research collaborations, AI
                projects, or opportunities in NLP and Machine Learning.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Terminal Contact Info */}
              <motion.div
                className="terminal-block"
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="terminal-header">
                  <div className="terminal-dot bg-[#ff5f57]" />
                  <div className="terminal-dot bg-[#ffbd2e]" />
                  <div className="terminal-dot bg-[#28c840]" />
                  <span className="text-text-muted text-xs font-mono ml-2">
                    contact.sh
                  </span>
                </div>
                <div className="p-6 font-mono text-sm space-y-5">
                  {/* Email */}
                  <div>
                    <p className="text-text-muted text-xs mb-1">
                      {"# "}Primary Email
                    </p>
                    <a
                      href="mailto:aonyendopaul@gmail.com"
                      className="flex items-center gap-3 text-text-primary hover:text-accent-teal transition-colors group"
                    >
                      <Mail
                        size={16}
                        className="text-accent-teal opacity-60 group-hover:opacity-100"
                      />
                      <span>
                        <span className="text-accent-teal">$ mail </span>
                        aonyendopaul@gmail.com
                      </span>
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-text-muted text-xs mb-1">
                      {"# "}Phone
                    </p>
                    <a
                      href="tel:+8801670919076"
                      className="flex items-center gap-3 text-text-primary hover:text-accent-teal transition-colors group"
                    >
                      <Phone
                        size={16}
                        className="text-accent-teal opacity-60 group-hover:opacity-100"
                      />
                      <span>
                        <span className="text-accent-teal">$ call </span>
                        +880 1670 919076
                      </span>
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="text-text-muted text-xs mb-1">
                      {"# "}Location
                    </p>
                    <div className="flex items-center gap-3 text-text-primary">
                      <MapPin
                        size={16}
                        className="text-accent-teal opacity-60"
                      />
                      <span>
                        <span className="text-accent-teal">$ locate </span>
                        West Rampura, Dhaka, Bangladesh
                      </span>
                    </div>
                  </div>

                  {/* Resume */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <a
                      href="/assets/AONYENDO_PAUL_NETEISH_CV_EVERYTHING.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-teal/10 border border-accent-teal/30 text-accent-teal text-sm hover:bg-accent-teal/20 transition-all"
                    >
                      <ExternalLink size={14} />
                      Download Full CV
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Links Grid */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="font-mono text-text-muted text-xs uppercase tracking-wider mb-3">
                  {"// "}Connect
                </p>
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-4 flex items-center gap-4 group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    >
                      <div
                        className="p-2.5 rounded-xl transition-colors"
                        style={{
                          backgroundColor: `${social.color}10`,
                        }}
                      >
                        <Icon size={18} style={{ color: social.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="text-text-primary text-sm font-semibold group-hover:text-accent-teal transition-colors">
                          {social.label}
                        </p>
                        <p className="text-text-muted text-xs font-mono">
                          {social.handle}
                        </p>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
