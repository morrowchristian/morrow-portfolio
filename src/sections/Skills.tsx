// src/sections/Skills.tsx
import RevealSection from "../components/RevealSection";
import { motion } from "framer-motion";

const skillBlocks = [
  {
    title: "Tech Stack",
    items: ["React", "TypeScript", "Django", "Swift", "Node.js", "PostgreSQL", "MySQL"]
  },
  {
    title: "Engineering Traits",
    items: ["Clean Architecture", "Intentional UI/UX", "Git Discipline", "Maintainable Codebases", "API Design", "Iterative Development"]
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => (
  <RevealSection id="skills" className="section skills">
    <h2>Skills</h2>
    <motion.div
      className="skills-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skillBlocks.map((block) => (
        <motion.div key={block.title} className="skills-block" variants={itemVariants}>
          <h3>{block.title}</h3>
          <ul>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  </RevealSection>
);

export default Skills;
