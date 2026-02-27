import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certs", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-accent-teal font-bold text-lg tracking-tight hover:text-glow-teal transition-all"
        >
          <span className="text-text-muted">~/</span>aonyendo
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`px-3 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${
                activeSection === href.slice(1)
                  ? "text-accent-teal bg-accent-teal/10"
                  : "text-text-secondary hover:text-text-primary hover:bg-white/[0.04]"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="/assets/AONYENDO_PAUL_NETEISH_CV_EVERYTHING.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 rounded-lg text-sm font-mono border border-accent-teal/40 text-accent-teal hover:bg-accent-teal/10 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-secondary/95 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-mono transition-all ${
                  activeSection === href.slice(1)
                    ? "text-accent-teal bg-accent-teal/10"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                <span className="text-text-muted mr-2">$</span>
                {label.toLowerCase()}
              </a>
            ))}
            <a
              href="/assets/AONYENDO_PAUL_NETEISH_CV_EVERYTHING.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 rounded-lg text-sm font-mono border border-accent-teal/40 text-accent-teal text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
