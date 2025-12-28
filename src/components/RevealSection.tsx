// src/components/RevealSection.tsx
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({ children, id, className }) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default RevealSection;
