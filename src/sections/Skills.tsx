import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import RevealSection from "../components/RevealSection";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiSwift,
  SiHtml5,
  SiCss3,
  SiAstro,
  SiDjango,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiDocker,
  SiGithub,
  SiAmazon,
  SiVercel
} from "react-icons/si";

/* =========================
   Motion Variants
========================= */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

/* =========================
   Skill Data
========================= */

const languages = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Swift", icon: <SiSwift /> }
];

const webFundamentals = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> }
];

const frameworksAndTools = [
  { name: "React", icon: <SiReact /> },
  { name: "Astro", icon: <SiAstro /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Django REST Framework", icon: <SiDjango /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "GitHub", icon: <SiGithub /> }
];

const databases = [
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQLite", icon: <SiSqlite /> }
];

const engineeringPrinciples = [
  {
    title: "Clean, Understandable Code",
    description:
      "I prioritize clarity and structure so systems are easy to maintain, extend, and reason about."
  },
  {
    title: "Thoughtful UI & UX",
    description:
      "Interfaces are built with intention—focused on usability, accessibility, and real user needs."
  },
  {
    title: "Practical Architecture",
    description:
      "I design systems that balance scalability with simplicity, avoiding unnecessary complexity."
  },
  {
    title: "Ownership & Reliability",
    description:
      "Comfortable taking features from idea to deployment, with attention to long-term stability."
  }
];

/* =========================
   Component
========================= */

const Skills = () => {
  return (
    <RevealSection id="skills" className="section skills">
      <h2>Skills</h2>
      <p>
        I focus on building dependable, well-structured software using modern tools
        and proven engineering practices. These are the technologies and principles
        I work with most.
      </p>

      <motion.div
        className="skills-containers"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Languages */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Languages</h3>
          <div className="skills-list">
            {languages.map((item) => (
              <div key={item.name} className="skill-item">
                <div className="skill-icon">{item.icon}</div>
                <span className="skill-name">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Web Fundamentals */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Web Fundamentals</h3>
          <div className="skills-list">
            {webFundamentals.map((item) => (
              <div key={item.name} className="skill-item">
                <div className="skill-icon">{item.icon}</div>
                <span className="skill-name">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Tools */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Frameworks & Tools</h3>
          <div className="skills-list">
            {frameworksAndTools.map((item) => (
              <div key={item.name} className="skill-item">
                <div className="skill-icon">{item.icon}</div>
                <span className="skill-name">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Databases */}
        <motion.div className="skills-container" variants={itemVariants}>
          <h3>Databases</h3>
          <div className="skills-list">
            {databases.map((item) => (
              <div key={item.name} className="skill-item">
                <div className="skill-icon">{item.icon}</div>
                <span className="skill-name">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engineering Principles */}
        <motion.div
          className="skills-container skills-container--wide"
          variants={itemVariants}
        >
          <h3>Engineering Principles</h3>
          <div className="traits-list">
            {engineeringPrinciples.map((trait) => (
              <div key={trait.title} className="trait-item">
                <h4>{trait.title}</h4>
                <p>{trait.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </RevealSection>
  );
};

export default Skills;
