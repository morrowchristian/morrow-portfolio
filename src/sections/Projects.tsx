// src/sections/Projects.tsx
import MotionSection from "../components/MotionSection";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { fadeUpStagger, itemFadeUp } from "../utils/motionVariants";

const Projects = () => (
  <MotionSection id="projects" className="section projects">
    <div className="section-content">
      <h2 className="section-title">Projects</h2>

      <motion.div
        className="projects-grid"
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((p) => (
          <motion.div key={p.title} variants={itemFadeUp}>
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </MotionSection>
);

export default Projects;
