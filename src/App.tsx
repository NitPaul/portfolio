import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy-load below-the-fold sections — each becomes its own chunk
const About = lazy(() => import("./components/About"));
const Publications = lazy(() => import("./components/Publications"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Certificates = lazy(() => import("./components/Certificates"));
const Activities = lazy(() => import("./components/Activities"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-6 h-6 border-2 border-accent-teal/30 border-t-accent-teal rounded-full animate-spin" />
    </div>
  );
}

function LazySection({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="cv-auto" id={id}>
      <Suspense fallback={<SectionFallback />}>{children}</Suspense>
    </div>
  );
}

function App() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <LazySection>
          <About />
        </LazySection>
        <LazySection>
          <Publications />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Experience />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Education />
        </LazySection>
        <LazySection>
          <Certificates />
        </LazySection>
        <LazySection>
          <Activities />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
