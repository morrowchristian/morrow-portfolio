// src/components/Navbar.tsx
import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import "../styles/components/Navbar.css";

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
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="hero" className={active === "hero" ? "active" : ""}>
            <FiHome size={20} />
          </a>
          <a href="#about" className={active === "about" ? "active" : ""}>
            About
          </a>
          <a href="#projects" className={active === "projects" ? "active" : ""}>
            Projects
          </a>
          <a href="#contact" className={active === "contact" ? "active" : ""}>
            Contact
          </a>
        </div>
        <a href="/resume.pdf" download className="button"> Download Resume </a> 
      </div>
    </nav>
  );
}
