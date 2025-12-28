// src/sections/Projects.tsx
import RevealSection from "../components/RevealSection";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    image: "/images/marketing-site.png",
    title: "Marketing Site",
    tagline: "A clean, responsive marketing site built for a client, focused on clarity and conversion.",
    tech: "React · TypeScript · CSS"
  },
  {
    image: "/images/event-dashboard.png",
    title: "Event Dashboard",
    tagline: "A dashboard for managing events, attendees, and scheduling with a clean, minimal UI.",
    tech: "React · Django REST Framework · PostgreSQL"
  },
  {
    image: "/images/ios-notes.png",
    title: "iOS Note‑Taking App",
    tagline: "A SwiftUI app for fast, minimal note‑taking with a focus on simplicity and speed.",
    tech: "Swift · SwiftUI"
  },
  {
    image: "/images/time-extension.png",
    title: "Time Calculation Extension",
    tagline: "A Chrome extension for quick time calculations, published on the Chrome Web Store.",
    tech: "JavaScript · Chrome APIs"
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Projects = () => (
  <RevealSection id="projects" className="section projects">
    <h2>Projects</h2>
    <motion.div
      className="projects-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {projects.map((p) => (
        <motion.div key={p.title} variants={itemVariants}>
          <ProjectCard {...p} />
        </motion.div>
      ))}
    </motion.div>
  </RevealSection>
);

export default Projects;
