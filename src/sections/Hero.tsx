// src/sections/Hero.tsx
import React from "react";
import RevealSection from "../components/RevealSection";
import { motion, type Variants } from "framer-motion";

const motionTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } }
};

const Hero: React.FC = () => {
  return (
    <RevealSection id="hero" className="hero-section">
      <div className="hero-content">
        {/* Name / Eyebrow */}
        <motion.span
          className="hero-eyebrow"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Christian Morrow
        </motion.span>

        {/* Headline */}
        <motion.h1
          className="hero-title"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Full-Stack Software Engineer
        </motion.h1>

        {/* Tagline / Value Proposition */}
        <motion.p
          className="hero-tagline"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ready to turn complex ideas into polished, functional software from day one.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="hero-actions"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="/Christian_Morrow_Resume.pdf" className="btn btn-secondary">
            Download Resume
          </a>
          <a href="https://github.com/morrowchristian" className="btn btn-secondary">
            GitHub
          </a>
        </motion.div>

        {/* Scroll Prompt */}
        <motion.a
          href="#projects"
          className="scroll-prompt"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ↓ Scroll to explore ↓
        </motion.a>
      </div>
    </RevealSection>
  );
};

export default Hero;
