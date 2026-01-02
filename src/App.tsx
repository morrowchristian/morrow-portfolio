// src/App.tsx
import { useState, useEffect } from "react";
import type { ReactElement } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SectionJump from "./components/SectionJump";

// ------------------------------
// Sections and Types
// ------------------------------
export const sections = ["hero", "about", "projects", "skills", "contact"] as const;
export type Section = (typeof sections)[number];

// Map section name -> component, pass setActiveSection where needed
const sectionComponents: Record<Section, ReactElement> = {
  hero: <Hero setActiveSection={() => {}} />, // placeholder, will override in render
  about: <About />,
  projects: <Projects />,
  skills: <Skills />,
  contact: <Contact />,
};

// ------------------------------
// App Component
// ------------------------------
const App = () => {
  const [activeSection, setActiveSection] = useState<Section>("hero");

  // Keyboard navigation: Left / Right arrows
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const currentIndex = sections.indexOf(activeSection);

      if (e.key === "ArrowRight") {
        setActiveSection(sections[(currentIndex + 1) % sections.length]);
      }
      if (e.key === "ArrowLeft") {
        setActiveSection(sections[(currentIndex - 1 + sections.length) % sections.length]);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeSection]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="progress-bar" aria-hidden="true" />

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {sections.map((sec) => {
          // Pass setActiveSection to Hero dynamically
          const Component =
            sec === "hero" ? <Hero setActiveSection={setActiveSection} /> : sectionComponents[sec];

          return (
            <div
              key={sec}
              id={sec}
              className={`section ${activeSection === sec ? "active" : ""}`}
              role="region"
              aria-label={`${sec.charAt(0).toUpperCase() + sec.slice(1)} section`}
            >
              {Component}
            </div>
          );
        })}
      </main>

      <Footer setActiveSection={setActiveSection} />

      <SectionJump activeSection={activeSection} setActiveSection={setActiveSection} />
    </>
  );
};

export default App;
