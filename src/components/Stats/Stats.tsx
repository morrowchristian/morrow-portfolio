// src/components/Stats/Stats.tsx — honest stats strip on the
// home page, between the hero and the News timeline. Inspired by
// the stats row on kartavya-singh.com (Coding Hours / Projects /
// LeetCode), adapted to Christian's own verified facts only —
// nothing copied, nothing invented. EDITORIAL: Newsreader serif
// numbers, IBM Plex Mono uppercase labels, warm paper / espresso
// / shirt red / soft brown. The strip is a sibling of .bio-page
// (like News), so the hero's one-viewport sizing is untouched;
// the page scrolls to reveal it.
import "./Stats.css";

interface Stat {
  value: string;
  label: string;
}

// Verified facts only:
// - 9 projects on the Portfolio page.
// - 3 live demos: Business Website Template, RealSync CRM, Baseline.
// - 3.7 GPA: B.S. Computer Science: Software Systems, Cum Laude, UTC.
// - 7+ years in high-urgency support & operations (Operations
//   Manager 2019–2022, Dakota 2022–2024, Ascent 2024–2026,
//   Eagle 2026–present).
const STATS: Stat[] = [
  { value: "9", label: "Projects" },
  { value: "3", label: "Live demos" },
  { value: "3.7", label: "GPA" },
  { value: "7+", label: "Years in support & operations" },
];

export const Stats: React.FC = () => {
  return (
    <section className="stats" aria-label="At a glance">
      <div className="stats__inner">
        <ul className="stats__list">
          {STATS.map((stat) => (
            <li key={stat.label} className="stats__item">
              <span className="stats__number">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
