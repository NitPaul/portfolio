import { Github, Linkedin, Mail, BookOpen, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="font-mono text-accent-teal font-bold text-sm tracking-tight"
            >
              <span className="text-text-muted">~/</span>aonyendo
            </a>
            <p className="text-text-muted text-xs font-mono mt-1">
              Transforming data into impact
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
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
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-text-muted hover:text-accent-teal hover:bg-accent-teal/[0.06] transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-muted text-xs font-mono flex items-center gap-1">
            Built with <Heart size={12} className="text-accent-rose" /> by
            Aonyendo Paul Neteish
          </p>
        </div>
      </div>
    </footer>
  );
}
