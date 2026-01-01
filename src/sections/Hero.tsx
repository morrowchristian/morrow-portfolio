// src/sections/Hero.tsx
import React from "react";
import { motion, type Variants } from "framer-motion";

const motionTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.span
          className="hero-eyebrow"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Christian Morrow
        </motion.span>

        <motion.h1
          className="hero-title"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Full-Stack Software Engineer
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          B.S. in Software Systems (Cum Laude), University of Tennessee at Chattanooga — May 2025
        </motion.p>

        <motion.p
          className="hero-tagline"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Building modern, full-stack applications with JavaScript and Python stacks.
        </motion.p>

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
        </motion.div>

        <motion.a
          href="#projects"
          className="scroll-prompt"
          variants={motionTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ↓ Scroll to explore ↓
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
