// src/sections/Hero.tsx
import type { ReactNode } from "react";
import RevealSection from "../components/RevealSection";
import { motion } from "framer-motion";

const MotionText: React.FC<{ children: ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

const Hero: React.FC = () => (
  <RevealSection id="hero" className="hero-section">
    <MotionText className="hero-title" delay={0}>
      Christian Morrow
    </MotionText>
    <MotionText className="hero-subtitle" delay={0.1}>
      Front-End Engineer <span className="accent-text">•</span> UI-Focused Full-Stack Developer
    </MotionText>
    <MotionText className="hero-tagline" delay={0.2}>
      I build scalable, accessible web applications using React, TypeScript, and modern backend frameworks —
      with a strong focus on clean architecture and thoughtful user experience.
    </MotionText>
    <MotionText className="scroll-prompt" delay={0.3}>
      <a href="#projects" style={{ display: "inline-block" }}>
        Scroll to explore ↓
      </a>
    </MotionText>
  </RevealSection>
);

export default Hero;
