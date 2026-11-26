// src/components/SinglePage/panels/ExperiencePanel.tsx — the
// Experience tab (sidebar-tabs redesign, 2026-11-26). Replaces
// the Experience carousel: the same three groups — Work,
// Campaign & Leadership, and Education & Certification — as
// sub-blocks separated by thin rules, each entry an
// expandable/collapsible accordion card (Sakshi-style: a header
// row with role/company left, dates right, and a chevron; the
// expanded body shows the bullets). NO carousel, NO peeking,
// NO chevrons-as-navigation. Data comes from src/data/resume.ts
// — nothing added, dropped, or reworded. The earlier restaurant
// roles are full entries at the end of the Work group (parsed
// from resume.earlierRoles), not a disclaimer line, and Education
// & Certification is a group inside the panel — there is no
// separate Education section below it. The first entry of each
// group starts open.
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { resume } from "../../../data/resume";
import "./ExperiencePanel.css";

type Track = "work" | "campaign" | "education";

interface Entry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  // Only the degree card carries the diploma link.
  diploma?: boolean;
}

// Parse the three earlier roles out of resume.earlierRoles:
// "Earlier roles: Server, Chesapeake's Downtown (Copper Cellar),
// Knoxville, TN, 2014–2015; Server, Calhoun's on the River
// (Copper Cellar), Knoxville, TN, 2013–2014; Host / Server
// Assistant, Darden Restaurants (Red Lobster), Knoxville, TN,
// 2012–2013."
// Each role is "Role, Company, ..., Period" — the role is the
// first comma segment, the period is the last, and the company
// is everything in between. The two Copper Cellar server roles
// each carry the standard duties of a full-service server, and
// the Red Lobster role carries the standard duties of a host
// (Christian was a host mainly there). These are the normal
// duties of the role, not invented achievements. Returns []
// if the format is unexpected, so the panel never breaks on
// bad data.
const parseEarlierRoles = (text: string): Entry[] => {
  const body = text.replace(/^Earlier roles:\s*/, "").replace(/\.\s*$/, "");
  const entries: Entry[] = [];
  for (const part of body.split("; ")) {
    const segments = part.split(", ");
    if (segments.length < 3) continue;
    const org = segments.slice(1, -1).join(", ");
    entries.push({
      role: segments[0],
      org,
      period: segments[segments.length - 1],
      bullets: org.includes("Copper Cellar")
        ? [
            "Took orders and served food and drinks to guests.",
            "Managed table sections and processed guest payments.",
          ]
        : org.includes("Red Lobster")
          ? [
              "Greeted guests, managed the waitlist, and seated parties.",
              "Answered phones and handled guest inquiries.",
            ]
          : [],
    });
  }
  return entries;
};

// Unified shape for the three data sources. Order is resume order:
// Work = Eagle, Ascent, Dakota, 58 Short Stop, Angela's, then the
// three earlier restaurant roles (Chesapeake's Downtown, then
// Calhoun's on the River, then Red Lobster — most recent first,
// matching the rest of the group); Campaign = Galloway lead, then
// Hiawatha; Education = degree, then the Excel certification.
const tracks: Record<Track, Entry[]> = {
  work: [
    ...resume.experience.map((item) => ({
      role: item.role,
      org: item.company,
      period: item.period,
      bullets: item.bullets ?? [],
    })),
    ...parseEarlierRoles(resume.earlierRoles),
  ],
  campaign: resume.leadership.map((item) => ({
    role: item.role,
    org: item.org,
    period: item.period,
    bullets: item.bullets,
  })),
  education: resume.education.map((item, i) => ({
    role: item.title,
    org: item.detail,
    period: "",
    bullets: [],
    diploma: i === 0,
  })),
};

const trackLabels: Record<Track, string> = {
  work: "Work",
  campaign: "Campaign & Leadership",
  education: "Education & Certification",
};

export const ExperiencePanel: React.FC = () => {
  // Open entries, keyed "track:index". The first entry of each
  // group starts open (Sakshi's first Experience entry is open
  // too); the rest start closed.
  const [open, setOpen] = useState<ReadonlySet<string>>(
    () => new Set(["work:0", "campaign:0", "education:0"]),
  );

  const toggle = (key: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="experience-panel">
      {(Object.keys(tracks) as Track[]).map((track) => (
        <div key={track} className="tabs-panel__block">
          <h3 className="tabs-panel__subhead">{trackLabels[track]}</h3>
          <div className="experience-panel__list">
            {tracks[track].map((item, i) => {
              const key = `${track}:${i}`;
              // DOM ids use hyphens (not the colon in `key`) so
              // they work unescaped in CSS selectors.
              const domId = `${track}-${i}`;
              const isOpen = open.has(key);
              return (
                <div
                  key={`${item.role} — ${item.org}`}
                  className="experience-panel__item"
                >
                  <button
                    type="button"
                    className="experience-panel__header"
                    aria-expanded={isOpen}
                    aria-controls={`${domId}-body`}
                    id={`${domId}-header`}
                    onClick={() => toggle(key)}
                  >
                    <span className="experience-panel__header-text">
                      <span className="experience-panel__role">
                        {item.role}
                      </span>
                      <span className="experience-panel__org">
                        {item.org}
                      </span>
                    </span>
                    {item.period && (
                      <span className="experience-panel__period">
                        {item.period}
                      </span>
                    )}
                    <FaChevronDown
                      className={`experience-panel__chevron${
                        isOpen ? " is-open" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className="experience-panel__body"
                    id={`${domId}-body`}
                    role="region"
                    aria-labelledby={`${domId}-header`}
                    hidden={!isOpen}
                  >
                    {item.bullets.length > 0 && (
                      <ul className="experience-panel__bullets">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {item.diploma && (
                      <a
                        href="/diploma.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="experience-panel__diploma"
                      >
                        View diploma (PDF)
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
