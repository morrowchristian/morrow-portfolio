import { useEffect, useRef, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const activeRef = useRef(active);

  /* Track active section for nav highlighting */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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

  /* Sticky nav scroll state */
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

  /* Keyboard navigation (Arrow Up / Down) */
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

      {/* LEFT: logo / initials only */}
      <div className="header-left">
        <a href="#top" className="header-logo" aria-label="Home">      
          CM
        </a>
      </div>

      {/* RIGHT: navigation */}
      <div className="header-right">
        <ul>
          <li>
            <a href="#about" className={active === "about" ? "active-link" : ""}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={active === "skills" ? "active-link" : ""}>
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active-link" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active-link" : ""}
            >
              Contact
            </a>
          </li>

          <li className="theme-toggle-item">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
