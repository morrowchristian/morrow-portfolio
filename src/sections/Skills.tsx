// src/sections/Skills.tsx
import RevealSection from "../components/RevealSection";
import { motion, type Variants } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiDjango, SiSwift, SiPostgresql, SiMysql } from "react-icons/si";

const skillBlocks = [
  {
    title: "Engineering Traits",
    items: [
      "Clean Architecture",
      "Intentional UI/UX",
      "Git Discipline",
      "Maintainable Codebases",
      "API Design",
      "Iterative Development"
    ]
  }
];

const techStack = [
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Swift", icon: <SiSwift /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> }
];

// Corrected Variants typing
const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" } // ✅ use string, not number[]
  }
};

const Skills = () => {
  return (
    <RevealSection id="skills" className="section skills">
      <h2>Skills</h2>

      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {skillBlocks.map((block) => (
          <motion.div key={block.title} className="skills-block" variants={blockVariants}>
            <h3>{block.title}</h3>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Stack Subsection */}
      <motion.div className="skills-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={blockVariants}>
        <h3>Tech Stack</h3>
        <ul className="tech-icons">
          {techStack.map((tech) => (
            <li key={tech.name}>
              <span className="icon">{tech.icon}</span> {tech.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </RevealSection>
  );
};

export default Skills;
