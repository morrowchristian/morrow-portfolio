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
      <motion.h1
        className="hero-title"
        variants={motionTextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Christian Morrow
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        variants={motionTextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Front-End Engineer <span className="accent-text">•</span> UI-Focused Full-Stack Developer
      </motion.p>

      <motion.p
        className="hero-tagline"
        variants={motionTextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        I build scalable, accessible web applications using React, TypeScript, and modern backend frameworks —
        with a strong focus on clean architecture and thoughtful user experience.
      </motion.p>

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
        Scroll to explore ↓
      </motion.a>
    </RevealSection>
  );
};

export default Hero;
