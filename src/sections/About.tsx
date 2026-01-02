// src/sections/About.tsx
import MotionSection from "../components/MotionSection";
import { motion } from "framer-motion";
import { aboutBlocks } from "../data/about";
import { fadeUpStagger, itemFadeUp } from "../utils/motionVariants";

const About = () => (
  <MotionSection id="about" className="section about">
    <div className="section-content">
      <header className="section-header">
        <span className="section-eyebrow">Introduction</span>
        <h2 className="section-title">About Me</h2>
      </header>

      <motion.div
        className="about-grid"
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {aboutBlocks.map((block) => (
          <motion.div key={block.title} className="about-block" variants={itemFadeUp}>
            <h3>{block.title}</h3>
            <p>{block.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </MotionSection>
);

export default About;
