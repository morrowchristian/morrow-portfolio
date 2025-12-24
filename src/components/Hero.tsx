const Hero = () => {
  return (
    <section id="hero" className="hero">
      <h1>Christian Morrow</h1>
      <h2>Full‑Stack Software Engineer</h2>

      <p className="hero-tagline">
        I build full‑stack software with React, TypeScript, Django, and Swift —
        focusing on clean architecture, maintainable code, and interfaces that feel intentional.
      </p>

      <div className="hero-links">
        <a href="#projects" className="button">View Projects</a>
        <a
          href="https://github.com/morrowchristian"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          GitHub
        </a>
      </div>

      <div className="scroll-cue">Scroll ↓</div>
    </section>
  );
};

export default Hero;
