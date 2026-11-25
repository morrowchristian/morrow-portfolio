// src/components/News/News.tsx — changelog-style timeline on the
// home page, below the hero (Services). Inspired by the dated
// milestone list on javadibrahimli.github.io, adapted to the
// Editorial system — Newsreader serif, IBM Plex Mono dates,
// warm paper / espresso / shirt red. Most recent first; entries
// are plain text, no links. Add new entries at the TOP of
// NEWS_ITEMS so the newest milestone stays first.
import "./News.css";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

interface NewsItem {
  date: string;
  text: string;
}

// Add new milestones at the TOP (most recent first).
const NEWS_ITEMS: NewsItem[] = [
  {
    date: "Nov 2026",
    text: "Baseline live on Vercel — construction job costing & crew scheduling, with roles & auth and a single-page dashboard.",
  },
  {
    date: "Nov 2026",
    text: "RealSync estimates & follow-ups shipped — estimates move sent → followed up → won/lost, with a 'who to contact today' view.",
  },
  {
    date: "Nov 2026",
    text: "Portfolio rebuilt — full-height home, resume fixes, and Baseline added as the eighth project.",
  },
  {
    date: "May 2026",
    text: "Joined Eagle Tele-Services as Emergency Roadside Service Dispatcher.",
  },
  {
    date: "2026",
    text: "Lead, Bradley County Division, Anna Galloway for U.S. Congress (TN-3).",
  },
  {
    date: "2026",
    text: "Campaign Manager & Digital Strategist, Hiawatha Brown for City Council — the campaign defeated the incumbent.",
  },
  {
    date: "May 2025",
    text: "B.S. Computer Science: Software Systems, Cum Laude, University of Tennessee at Chattanooga.",
  },
];

export const News: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section className="news" aria-label="News">
      <div className="news__inner">
        <header className="news__header">
          <p className="news__kick">Updates</p>
          <h2 className="news__title">News</h2>
          <span className="news__rule" aria-hidden="true" />
        </header>

        <div
          ref={ref}
          className={`news__list animate ${isVisible ? "animate--visible" : ""}`}
        >
          <ul>
            {NEWS_ITEMS.map((item) => (
              <li
                key={`${item.date} — ${item.text.slice(0, 24)}`}
                className="news__item"
              >
                <span className="news__date">{item.date}</span>
                <p className="news__text">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
