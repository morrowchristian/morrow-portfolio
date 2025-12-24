// The Hero panel introduces the site with a clean, centered layout.
// It also includes a scroll cue to guide users into the snap‑scroll flow.

const Hero = () => {
  return (
    <section id="hero" className="hero reveal">
      {/* Primary identity */}
      <h1>Christian Morrow</h1>
      <h2>Full‑Stack Software Engineer</h2>

      {/* High‑level summary of focus areas and engineering philosophy */}
      <p className="hero-tagline">
        I build full‑stack software with React, TypeScript, Django, and Swift —
        focusing on clean architecture, maintainable code, and interfaces that feel intentional.
      </p>

      {/* Key actions: navigate to projects or view GitHub profile */}
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

      {/* Subtle animated cue encouraging users to scroll into the next panel */}
      <div className="scroll-cue">Scroll ↓</div>
    </section>
  );
};

export default Hero;
