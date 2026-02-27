import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import OptimizedImage from "./OptimizedImage";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";

interface ActivityEvent {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const events: ActivityEvent[] = [
  {
    id: "cgf-2025",
    title: "AIUB Cyber Gaming Fest 2025",
    category: "Leadership",
    description:
      "Spearheaded outreach as Publicity Team Leader, attracting 799 gamers from 118 institutes across Bangladesh.",
    image: "/assets/events/cyber_gaming_fest_2025/cyber_gaming_fest_2025_1.jpg",
  },
  {
    id: "picnic-2025",
    title: "ACC Picnic 2025 — Football Champions",
    category: "Sports",
    description:
      "Led team to victory as Champions of the football tournament across 6 teams and 117 participants.",
    image: "/assets/events/acc_picnic_2025/acc_picnic_2025_1.jpg",
  },
  {
    id: "csfest-2024",
    title: "AIUB CS Fest 2024",
    category: "Leadership",
    description:
      "Room Leader for App Showcasing Contest, ICT Olympiad, Math Olympiad, and Story/Content Writing contests.",
    image: "/assets/events/cs_fest_2024/cs_fest_2024_1.jpg",
  },
  {
    id: "prog-2024",
    title: "Intra AIUB Programming Contest 2024",
    category: "Volunteer",
    description:
      "Managed 35+ competitive coders. Performed guitar at the Closing Ceremony — repaired a broken string minutes before.",
    image:
      "/assets/events/programming_contest_2024/programming_contest_2024_1.jpg",
  },
  {
    id: "idaa-2025",
    title: "IDAA 2025 Conference",
    category: "Research",
    description:
      "Presented research on Medical BERTs for Adverse Drug Reaction Classification at the international conference.",
    image: "/assets/events/conferences/IDAA_2025.jpg",
  },
  {
    id: "icp-2024",
    title: "International Conference on Physics 2024",
    category: "Research",
    description:
      "Poster presentation on wind energy integration in Bangladesh's textile industry using statistical methods.",
    image:
      "/assets/events/conferences/International_Conference_on_Physics__2024.jpg",
  },
  {
    id: "imc-2023",
    title: "23rd International Mathematics Conference",
    category: "Research",
    description:
      "Presented research on Sign Language Recognition for inclusive public services.",
    image:
      "/assets/events/conferences/23rd_International_Mathematics_Conference-2023.jpg",
  },
  {
    id: "ideas-2023",
    title: "The IDEAS Challenge 2K23",
    category: "Volunteer",
    description:
      "Guided teams from 100+ participating groups representing 30+ colleges in a national social innovation event.",
    image: "/assets/events/ideas_challenge_2023/ideas_challenge_2023_1.jpg",
  },
  {
    id: "flood-2024",
    title: "Flood Relief Aid Distribution 2024",
    category: "Social Impact",
    description:
      "Contributed to raising over 5 lakhs BDT for Feni flood relief. Coordinated aid preparation and delivery.",
    image: "/assets/events/flood_relief/flood_relief_1.jpg",
  },
];

const categories = ["All", ...new Set(events.map((e) => e.category))];

export default function Activities() {
  const { ref, isVisible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? events
      : events.filter((e) => e.category === activeCategory);

  return (
    <section
      id="activities"
      className="relative py-24 md:py-32 bg-bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="relative">
          <span className="section-watermark">BEYOND</span>

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
                Beyond the{" "}
                <span className="italic text-accent-violet">Code</span>
              </h2>
              <p className="mt-3 text-text-secondary text-sm">
                Leadership, volunteering, research presentations, and community
                impact.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? "bg-accent-teal/10 text-accent-teal border border-accent-teal/30"
                      : "text-text-muted border border-white/[0.06] hover:border-white/10 hover:text-text-secondary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((event, i) => (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
                    onClick={() =>
                      setLightboxIndex(events.findIndex((e) => e.id === event.id))
                    }
                  >
                    {/* Image */}
                    <OptimizedImage
                      src={event.image}
                      alt={event.title}
                      width={640}
                      height={480}
                      className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent-teal/20 text-accent-teal">
                            {event.category}
                          </span>
                        </div>
                        <h3 className="text-text-primary font-semibold text-sm mb-1">
                          {event.title}
                        </h3>
                        <p className="text-text-secondary text-xs leading-relaxed line-clamp-2">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Camera icon */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-bg-primary/60 backdrop-blur-sm text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={14} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
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

            {/* Nav arrows */}
            <button
              className="absolute left-4 md:left-8 p-3 rounded-xl bg-white/[0.06] text-text-primary hover:bg-white/10 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (lightboxIndex - 1 + events.length) % events.length
                );
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="absolute right-4 md:right-8 p-3 rounded-xl bg-white/[0.06] text-text-primary hover:bg-white/10 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % events.length);
              }}
            >
              <ChevronRight size={20} />
            </button>

            <div
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={events[lightboxIndex].id}
                src={events[lightboxIndex].image}
                alt={events[lightboxIndex].title}
                loading="eager"
                decoding="async"
                className="w-full max-h-[70vh] object-contain rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="mt-4 text-center">
                <h3 className="text-text-primary font-semibold">
                  {events[lightboxIndex].title}
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  {events[lightboxIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
