import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("about");
  const activeRef = useRef(active);
  const mouseX = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      document.documentElement.style.setProperty("--cursor-x", `${mouseX.current}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const updateItemPositions = () => {
      const items = document.querySelectorAll<HTMLElement>(".header-right a");
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        item.style.setProperty("--item-x", `${rect.left + rect.width / 2}px`);
      });
    };
    updateItemPositions();
    window.addEventListener("resize", updateItemPositions);
    return () => window.removeEventListener("resize", updateItemPositions);
  }, []);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      const bar = document.getElementById("progress-bar");
      if (bar) bar.style.width = `${progress}%`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      const sections = Array.from(document.querySelectorAll("section"));
      const currentIndex = sections.findIndex((s) => s.id === activeRef.current);
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
      <div className="header-left">
        <h1 className="header-name">Christian Morrow</h1>
        <h2 className="header-title">Full-Stack Software Engineer</h2>
        <p className="header-profile">
          I build full-stack software with React, TypeScript, Django, and Swift — focusing on clean architecture and intentional interfaces.
        </p>
      </div>
      <div className="header-right">
        <ul>
          <li><a href="#about" className={active === "about" ? "active-link" : ""}>About</a></li>
          <li><a href="#skills" className={active === "skills" ? "active-link" : ""}>Skills</a></li>
          <li><a href="#projects" className={active === "projects" ? "active-link" : ""}>Projects</a></li>
          <li><a href="#contact" className={active === "contact" ? "active-link" : ""}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
