// src/sections/About.tsx
import RevealSection from "../components/RevealSection";
import { motion, type Variants } from "framer-motion";

const aboutBlocks = [
  {
    title: "What I Do",
    content:
      "I’m a full‑stack software engineer who takes projects from rough concept to production‑ready software. I focus on clear architecture, composable pieces, and maintainable code."
  },
  {
    title: "How I Build",
    content:
      "On the frontend, I work primarily with React and TypeScript to build clean, usable interfaces. On the backend, I’ve delivered APIs and internal tools using Django REST Framework, supported by relational databases such as PostgreSQL and MySQL."
  },
  {
    title: "Recent Work",
    content:
      "Recent projects include a marketing site, an event management dashboard, an iOS SwiftUI app, and a Chrome extension for time calculations."
  }
];

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } // cubic-bezier easing
  }
};

const About = () => {
  return (
    <RevealSection id="about" className="section about">
      <header className="section-header">
        <span className="section-eyebrow">Introduction</span>
        <h2 className="section-title">About Me</h2>
      </header>

      <motion.div
        className="about-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {aboutBlocks.map((block) => (
          <motion.div
            key={block.title}
            className="about-block"
            variants={blockVariants}
          >
            <h3>{block.title}</h3>
            <p>{block.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </RevealSection>
  );
};

export default About;
