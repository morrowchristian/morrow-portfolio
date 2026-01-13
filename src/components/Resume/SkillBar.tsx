// src/components/Resume/SkillBar.tsx
import "./SkillBar.css";
import type { ResumeSkill } from "../../data/resume";

interface SkillBarProps {
  skill: ResumeSkill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div className="skillbar">
      <div className="skillbar__header">
        <span className="skillbar__name">{skill.name}</span>
        <span className="skillbar__value">{skill.level}%</span>
      </div>

      <div className="skillbar__track">
        <div
          className="skillbar__fill"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
};
