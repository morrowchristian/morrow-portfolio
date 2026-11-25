// src/App.tsx — multi-page portfolio (HashRouter: a static Vite site
// has no server rewrites, so hash routing keeps refreshes working).
// (2026-11-25, Phase 1): "/" is now the single scrolling page
// (Hero → Skills → Projects → Experience → Contact). The old
// /portfolio, /resume, and /contact routes stay live alongside it
// until the single page is verified — they are removed only after.
// The theme (dark by default, light behind a toggle) is owned here
// and passed to the Navbar; an inline script in index.html sets the
// same data-theme attribute before React loads, so there is no flash.
import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./styles/globals.css";

import { Navbar } from "./components/Navbar/Navbar";
import { useTheme } from "./hooks/useTheme";

import { SinglePage } from "./components/SinglePage/SinglePage";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Resume } from "./components/Resume/Resume";
import { Contact } from "./components/Contact/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}

// Inside the router so it can read the current route.
function AppShell() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="page">
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
