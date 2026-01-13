// src/components/Resume/SkillBarGroup.tsx
import type { ResumeSkillGroup } from "../../data/resume";
import { SkillBar } from "./SkillBar";

interface SkillBarGroupProps {
  group: ResumeSkillGroup;
}

export const SkillBarGroup: React.FC<SkillBarGroupProps> = ({ group }) => {
  return (
    <div className="skillbar-group">
      <h3 className="skillbar-group__title">{group.title}</h3>

      <div className="skillbar-group__items">
        {group.items.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};
