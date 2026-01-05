// src/components/Navbar.tsx
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Scroll‑spy behavior
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar fade-in">
      <div className="navbar-container">
        <div className="navbar-brand">Christian Morrow</div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#hero" className={active === "hero" ? "active" : ""}>
            Home
          </a>
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Projects
          </a>
          <a
            href="#experience"
            className={active === "experience" ? "active" : ""}
          >
            Experience
          </a>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
