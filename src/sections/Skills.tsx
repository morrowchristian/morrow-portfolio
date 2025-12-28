import type { Variants } from "framer-motion"; // type-only import
import { motion } from "framer-motion";
import RevealSection from "../components/RevealSection";
import {
  SiReact,
  SiTypescript,
  SiDjango,
  SiSwift,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiFigma,
  SiGithub
} from "react-icons/si";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const techStack = [
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Swift", icon: <SiSwift /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
];

const tools = [
  { name: "Docker", icon: <SiDocker /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> }
];

const engineeringTraits = [
  { title: "Clean Architecture", description: "Design modular, maintainable systems from the ground up." },
  { title: "Intentional UI/UX", description: "Every interface is designed for clarity and usability." },
  { title: "Git Discipline", description: "Structured commit history and collaborative workflows." },
  { title: "Test-Driven Development", description: "Ensure reliability and maintainability through automated tests." },
];

const Skills = () => {
  return (
    <RevealSection id="skills" className="section skills">
      <h2>Skills</h2>
      <p>
        I combine modern web technologies with solid engineering practices to build scalable, maintainable applications. Here's a closer look at my technical toolkit and engineering approach.
      </p>

      {/* Tech Stack */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {techStack.map((tech) => (
          <motion.div key={tech.name} className="skills-block tech" variants={itemVariants}>
            <div className="icon">{tech.icon}</div>
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Engineering Traits */}
      <motion.div
        className="skills-grid traits"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {engineeringTraits.map((trait) => (
          <motion.div key={trait.title} className="skills-block trait" variants={itemVariants}>
            <h3>{trait.title}</h3>
            <p>{trait.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tools & Productivity */}
      <motion.div
        className="skills-grid tools"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {tools.map((tool) => (
          <motion.div key={tool.name} className="skills-block tool" variants={itemVariants}>
            <div className="icon">{tool.icon}</div>
            <span>{tool.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </RevealSection>
  );
};

export default Skills;
