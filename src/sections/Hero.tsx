import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="hero-section"
    >
      <h1 className="hero-title">Christian Morrow</h1>

      <p className="hero-subtitle">
        Front-End Engineer <span className="accent-text">•</span> UI-Focused Full-Stack Developer
      </p>

      <p className="hero-tagline">
        I build scalable, accessible web applications using React, TypeScript, and modern backend frameworks —
        with a strong focus on clean architecture and thoughtful user experience.
      </p>

      <motion.a
        href="#projects"
        className="scroll-prompt"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Scroll to explore ↓
      </motion.a>
    </motion.section>
  );
};

export default Hero;