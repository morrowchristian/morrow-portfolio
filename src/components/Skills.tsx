const Skills = () => {
  return (
    <section id="skills" className="section">
      <h3>Skills</h3>

      <div className="skills-grid">
        <div>
          <h4>Frontend</h4>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div>
          <h4>Backend</h4>
          <ul>
            <li>Django & Django REST Framework</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div>
          <h4>Tools & Other</h4>
          <ul>
            <li>Git & GitHub</li>
            <li>Swift & SwiftUI</li>
            <li>Chrome Extension Development</li>
            <li>REST APIs</li>
            <li>UI/UX Principles</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
