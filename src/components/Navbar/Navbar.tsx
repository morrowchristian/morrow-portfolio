// src/components/Navbar/Navbar.tsx
import "./Navbar.css";
import { useScrollOffset } from "../../hooks/useScrollOffset";

const NAV_ITEMS = [
  { label: "Bio", href: "#bio" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
];

interface NavbarProps {
  onConnectClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick }) => {
  const isScrolled = useScrollOffset(24);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#bio" className="navbar__brand">
          Christian Morrow
        </a>

        <nav className="navbar__nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="navbar__connect-button"
          onClick={onConnectClick}
        >
          Connect
        </button>
      </div>
    </header>
  );
};
