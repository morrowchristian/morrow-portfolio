// src/components/Footer/Footer.tsx — Editorial footer: the site
// menu lives here now (it moved out of the navbar). Paper, a
// hairline top rule, mono links, red active state. No socials,
// no email, no Connect button in the footer — those stay in the
// navbar.
import "./Footer.css";
import { NavLink } from "react-router-dom";

const FOOTER_ITEMS = [
  { label: "Bio", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Services", to: "/services" },
];

interface FooterProps {
  onConnectClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onConnectClick }) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__nav" aria-label="Site menu">
          {FOOTER_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "footer__link footer__link--active"
                  : "footer__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            className="footer__link footer__link--button"
            onClick={onConnectClick}
          >
            Contact
          </button>
        </nav>
        <p className="footer__credit">
          © 2026 Christian Morrow — Full-Stack Software Engineer
        </p>
      </div>
    </footer>
  );
};
