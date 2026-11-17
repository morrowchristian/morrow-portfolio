// src/components/Footer/Footer.tsx — the site footer is the Bio's
// numbered index, on every page: 01 About, 02 Portfolio, 03 Resume,
// 04 Services. Paper with a hairline top rule, mono links, the
// number always red, the current page red + underlined. No socials,
// no email, no Contact, no credit line — those live in the navbar
// or not at all.
import "./Footer.css";
import { NavLink } from "react-router-dom";

const FOOTER_ITEMS = [
  { number: "01", label: "About", to: "/" },
  { number: "02", label: "Portfolio", to: "/portfolio" },
  { number: "03", label: "Resume", to: "/resume" },
  { number: "04", label: "Services", to: "/services" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__index" aria-label="Index">
          {FOOTER_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "footer__index-item footer__index-item--active"
                  : "footer__index-item"
              }
            >
              <span>{item.number}</span> {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </footer>
  );
};
