// src/components/SectionJump.tsx
import type { Section } from "../App";
import { AnimatePresence, motion } from "framer-motion";

interface SectionJumpProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  sections?: Section[];
}

const SectionJump = ({
  activeSection,
  setActiveSection,
  sections = ["hero", "about", "projects", "skills", "contact"],
}: SectionJumpProps) => {
  const isFirstSection = activeSection === sections[0];

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {!isFirstSection && (
        <motion.button
          className="section-jump"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setActiveSection(sections[0])}
          aria-label="Jump to Hero section"
        >
          ↑ Home
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default SectionJump;
