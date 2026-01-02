// src/components/Navbar.tsx
import { useEffect } from "react";
import type { Section } from "../App";

interface NavbarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const navSections: Section[] = ["hero", "about", "skills", "projects", "contact"];

  // Sticky background on scroll
  useEffect(() => {
    const nav = document.querySelector("nav.top-header");
    if (!nav) return;

    const handleScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="top-header">
      {/* LEFT: Logo / Home */}
      <div className="header-left">
        <button
          className={activeSection === "hero" ? "active-link" : ""}
          aria-label="Jump to Home section"
          aria-current={activeSection === "hero" ? "page" : undefined}
          onClick={() => setActiveSection("hero")}
        >
          CM
        </button>
      </div>

      {/* RIGHT: Navigation Links */}
      <div className="header-right">
        <ul>
          {navSections.slice(1).map((section) => (
            <li key={section}>
              <button
                className={activeSection === section ? "active-link" : ""}
                aria-current={activeSection === section ? "page" : undefined}
                aria-label={`Jump to ${section.charAt(0).toUpperCase() + section.slice(1)} section`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
