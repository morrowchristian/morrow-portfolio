// src/App.tsx — multi-page portfolio (HashRouter: a static Vite site
// has no server rewrites, so hash routing keeps refreshes working).
// Contact is its own page now; the old contact modal is gone.
import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./styles/globals.css";

import { Navbar } from "./components/Navbar/Navbar";

import { Bio } from "./components/Bio/Bio";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Resume } from "./components/Resume/Resume";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

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
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="page">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
