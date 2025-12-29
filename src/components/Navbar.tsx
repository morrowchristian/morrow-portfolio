// src/components/Navbar.tsx
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const activeRef = useRef(active);

  /* ------------------------------
     Track active section for nav highlight
  ------------------------------ */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  /* ------------------------------
     Sticky nav background on scroll
  ------------------------------ */
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

  /* ------------------------------
     Keyboard navigation (Arrow Up/Down)
  ------------------------------ */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();

      const sections = Array.from(document.querySelectorAll("section"));
      const currentIndex = sections.findIndex(
        (s) => s.id === activeRef.current
      );

      if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "ArrowUp" && currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="top-header">
      {/* LEFT: Logo / initials */}
      <div className="header-left">
        <a href="#top" className="header-logo" aria-label="Home">
          CM
        </a>
      </div>

      {/* RIGHT: Navigation Links */}
      <div className="header-right">
        <ul>
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={active === section ? "active-link" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
