const Projects = () => {
  return (
    <section id="projects" className="section">
      <h3>Projects</h3>

      <div className="projects-grid">
        <div className="project-card">
          <h4>Marketing Site</h4>
          <p className="project-tagline">
            A clean, responsive marketing site built for a client, focused on clarity and conversion.
          </p>
          <p className="tech-list">React · TypeScript · CSS</p>
        </div>

        <div className="project-card">
          <h4>Event Dashboard</h4>
          <p className="project-tagline">
            A dashboard for managing events, attendees, and scheduling with a clean, minimal UI.
          </p>
          <p className="tech-list">React · Django REST Framework · PostgreSQL</p>
        </div>

        <div className="project-card">
          <h4>iOS Note‑Taking App</h4>
          <p className="project-tagline">
            A SwiftUI app for fast, minimal note‑taking with a focus on simplicity and speed.
          </p>
          <p className="tech-list">Swift · SwiftUI</p>
        </div>

        <div className="project-card">
          <h4>Time Calculation Extension</h4>
          <p className="project-tagline">
            A Chrome extension for quick time calculations, published on the Chrome Web Store.
          </p>
          <p className="tech-list">JavaScript · Chrome APIs</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
