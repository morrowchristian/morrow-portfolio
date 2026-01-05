// src/sections/Hero.tsx
import "../styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <h1>Christian Morrow</h1>
      <p>Full‑Stack Software Engineer</p>

      <div className="hero-buttons">
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </button>

        <a href="/resume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
}
