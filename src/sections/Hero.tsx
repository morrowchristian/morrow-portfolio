// src/sections/Hero.tsx
import { motion } from "framer-motion";
import type { Section } from "../App";
import { itemFadeUp } from "../utils/motionVariants";

interface HeroProps {
  setActiveSection: (section: Section) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => (
  <section className="hero-section">
    <div className="section-content hero-content">
      <motion.span
        className="hero-eyebrow"
        variants={itemFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Christian Morrow
      </motion.span>

      <motion.h1
        variants={itemFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Full-Stack Software Engineer
      </motion.h1>

      <motion.p
        variants={itemFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        B.S. in Software Systems (Cum Laude), University of Tennessee at Chattanooga — May 2025
      </motion.p>

      <motion.p
        variants={itemFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Building modern, full-stack applications with JavaScript and Python stacks.
      </motion.p>

      <motion.div
        className="hero-actions"
        variants={itemFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <button className="btn btn-primary" onClick={() => setActiveSection("projects")}>
          View Projects
        </button>
        <a href="/Christian_Morrow_Resume.pdf" className="btn btn-secondary">
          Download Resume
        </a>
      </motion.div>

      <motion.button
        className="scroll-prompt"
        onClick={() => setActiveSection("about")}
        variants={itemFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ↓ Scroll to explore ↓
      </motion.button>
    </div>
  </section>
);

export default Hero;

