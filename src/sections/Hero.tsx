// src/sections/Hero.tsx
import "../styles/sections/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <h1>Christian Morrow</h1>
      <p>Full‑Stack Software Engineer</p>
      
      <button
        className="hero-button button"
        onClick={() =>
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        View Projects
      </button>
    </div>
  );
}
