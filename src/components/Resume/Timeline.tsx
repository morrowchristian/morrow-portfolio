// src/components/Resume/Timeline.tsx
import "./Timeline.css";
import type { ResumeExperience } from "../../data/resume";

interface TimelineProps {
  items: ResumeExperience[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline">
      <div className="timeline__line" />

      <div className="timeline__items">
        {items.map((item, index) => (
          <div
            key={index}
            className="timeline__item stagger"
            style={{ "--delay": `${index * 120}ms` } as React.CSSProperties}
          >
          <div className="timeline__dot" />
          
          <div className="timeline__content">
            <div className="timeline__header">
               <h3 className="timeline__role">{item.role}</h3>
               <span className="timeline__period">{item.period}</span>
              </div>

              <p className="timeline__company">
                {item.company}
                {item.location ? ` — ${item.location}` : ""}
              </p>

              <ul className="timeline__bullets">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b.text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
