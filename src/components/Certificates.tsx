import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import OptimizedImage from "./OptimizedImage";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileText,
  Download,
} from "lucide-react";
import {
  certificates,
  type CertificateCategory,
} from "../data/certificates";

const categoryFilters: ("All" | CertificateCategory)[] = [
  "All",
  "Research",
  "Professional",
  "Workshop",
];

const categoryCounts = {
  All: certificates.length,
  Research: certificates.filter((c) => c.category === "Research").length,
  Professional: certificates.filter((c) => c.category === "Professional")
    .length,
  Workshop: certificates.filter((c) => c.category === "Workshop").length,
};

export default function Certificates() {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState<
    "All" | CertificateCategory
  >("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  const openLightbox = (cert: (typeof certificates)[number]) => {
    if (!cert.image) return;
    setLightboxIndex(certificates.findIndex((c) => c.id === cert.id));
  };

  const navigateLightbox = (dir: -1 | 1) => {
    if (lightboxIndex === null) return;
    const withImages = certificates.filter((c) => c.image);
    const currentCert = certificates[lightboxIndex];
    const currentIdx = withImages.findIndex((c) => c.id === currentCert.id);
    const nextIdx = (currentIdx + dir + withImages.length) % withImages.length;
    const nextCert = withImages[nextIdx];
    setLightboxIndex(certificates.findIndex((c) => c.id === nextCert.id));
  };

  return (
    <section
      id="certificates"
      className="relative py-24 md:py-32 bg-bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">CREDENTIALS</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="mb-12">
              <p className="font-mono text-accent-teal text-sm mb-2">
                {"// "}007
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
                Certificates &{" "}
                <span className="italic text-accent-violet">Credentials</span>
              </h2>
              <p className="mt-3 text-text-secondary text-sm font-mono">
                {certificates.length} Earned · {categoryCounts.Research} Research
                Conferences · {categoryCounts.Professional} Professional ·{" "}
                {categoryCounts.Workshop} Workshops
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activeCategory === cat
                      ? "bg-accent-teal/10 text-accent-teal border border-accent-teal/30"
                      : "text-text-muted border border-white/[0.06] hover:border-white/10 hover:text-text-secondary"
                  }`}
                >
                  {cat}
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] ${
                      activeCategory === cat
                        ? "bg-accent-teal/20"
                        : "bg-white/[0.06]"
                    }`}
                  >
                    {categoryCounts[cat]}
                  </span>
                </button>
              ))}
            </div>

            {/* Terminal divider */}
            <p className="font-mono text-text-muted text-xs mb-8">
              <span className="text-accent-teal">$</span> ls certificates/
              --sort=date
            </p>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((cert, i) => (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="glass-card overflow-hidden"
                    style={{
                      borderTopWidth: "3px",
                      borderTopStyle: "solid",
                      borderImage: `linear-gradient(90deg, ${cert.color}, ${cert.color}80) 1`,
                    }}
                  >
                    {/* Image / Placeholder */}
                    {cert.image ? (
                      <div
                        className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                        onClick={() => openLightbox(cert)}
                      >
                        <OptimizedImage
                          src={cert.image}
                          alt={cert.title}
                          width={640}
                          height={480}
                          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                          <Eye
                            size={24}
                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[4/3] bg-white/[0.02] flex flex-col items-center justify-center gap-3">
                        <FileText
                          size={32}
                          className="text-text-muted opacity-40"
                        />
                        <span className="text-text-muted text-xs font-mono">
                          {cert.pdfLink ? "PDF Certificate" : "Certificate on file"}
                        </span>
                      </div>
                    )}

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-mono"
                          style={{
                            backgroundColor: `${cert.color}15`,
                            color: cert.color,
                          }}
                        >
                          {cert.category}
                        </span>
                        <span className="text-text-muted text-[10px] font-mono">
                          {cert.year}
                        </span>
                      </div>
                      <h3 className="text-text-primary font-semibold text-sm mb-1 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-accent-blue text-xs font-mono mb-2">
                        {cert.issuer}
                      </p>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        {cert.description}
                      </p>

                      {cert.pdfLink && (
                        <a
                          href={cert.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-lg bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-mono hover:bg-accent-teal/20 transition-all"
                        >
                          <Download size={12} />
                          View PDF
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ASCII Footer */}
            <div className="mt-12 font-mono text-text-muted text-xs leading-relaxed text-center">
              <pre className="inline-block text-left">
{`┌─────────────────────────────────────┐
│  Certificates Loaded: ${String(certificates.length).padEnd(14)}│
│  Categories: ${String(Object.keys(categoryCounts).length - 1).padEnd(23)}│
│  Status: continuously_earning       │
└─────────────────────────────────────┘`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && certificates[lightboxIndex]?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-xl bg-white/[0.06] text-text-primary hover:bg-white/10 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={20} />
            </button>

            <button
              className="absolute left-4 md:left-8 p-3 rounded-xl bg-white/[0.06] text-text-primary hover:bg-white/10 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-4 md:right-8 p-3 rounded-xl bg-white/[0.06] text-text-primary hover:bg-white/10 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
            >
              <ChevronRight size={20} />
            </button>

            <div
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={certificates[lightboxIndex].id}
                src={certificates[lightboxIndex].image}
                alt={certificates[lightboxIndex].title}
                loading="eager"
                decoding="async"
                className="w-full max-h-[70vh] object-contain rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mt-4 text-center">
                <h3 className="text-text-primary font-semibold">
                  {certificates[lightboxIndex].title}
                </h3>
                <p className="text-accent-blue text-xs font-mono mt-1">
                  {certificates[lightboxIndex].issuer}
                </p>
                <p className="text-text-secondary text-sm mt-1">
                  {certificates[lightboxIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
