// src/components/MotionSection.tsx
import type { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

const MotionSection: React.FC<MotionSectionProps> = ({ children, id, className }) => {
  return (
    <section id={id} className={className ?? ""}>
      {children}
    </section>
  );
};

export default MotionSection;

