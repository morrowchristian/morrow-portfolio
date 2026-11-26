// src/components/SinglePage/panels/NewsPanel.tsx — the News tab
// (sidebar-tabs redesign, 2026-11-26). The 7-entry timeline from
// the old News section, inside the shared panel frame. Most
// recent first; entries are plain text, no links. Add new entries
// at the TOP of NEWS_ITEMS so the newest milestone stays first.
// The title styling matches the other panel titles (the panel
// header is shared — see PanelHeader).
import "./NewsPanel.css";

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

export const NewsPanel: React.FC = () => (
  <ul className="news-panel__list">
    {NEWS_ITEMS.map((item) => (
      <li
        key={`${item.date} — ${item.text.slice(0, 24)}`}
        className="news-panel__item"
      >
        <span className="news-panel__date">{item.date}</span>
        <p className="news-panel__text">{item.text}</p>
      </li>
    ))}
  </ul>
);
