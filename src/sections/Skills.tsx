// src/sections/Skills.tsx
import MotionSection from "../components/MotionSection";
import { motion } from "framer-motion";
import {
  languages,
  webFundamentals,
  frameworksAndTools,
  databases,
  engineeringPrinciples,
} from "../data/skills";
import { fadeUpStagger, itemFadeUp } from "../utils/motionVariants";

const Skills = () => (
  <MotionSection id="skills" className="section skills">
    <div className="section-content">
      <h2 className="section-title">Skills</h2>
      <p>I focus on building dependable, well-structured software using modern tools and proven engineering practices.</p>

      <motion.div
        className="skills-containers"
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {[
          { title: "Languages", list: languages },
          { title: "Web Fundamentals", list: webFundamentals },
          { title: "Frameworks & Tools", list: frameworksAndTools },
          { title: "Databases", list: databases },
        ].map((section) => (
          <motion.div key={section.title} className="skills-container" variants={itemFadeUp}>
            <h3>{section.title}</h3>
            <div className="skills-list">
              {section.list.map((item) => (
                <div key={item.name} className="skill-item">
                  <div className="skill-icon">{item.icon}</div>
                  <span className="skill-name">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div className="skills-container skills-container--wide" variants={itemFadeUp}>
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
    </div>
  </MotionSection>
);

export default Skills;
