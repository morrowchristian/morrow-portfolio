// src/App.tsx — multi-page portfolio (HashRouter: a static Vite site
// has no server rewrites, so hash routing keeps refreshes working).
import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./styles/globals.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Modal } from "./components/Modal/Modal";
import { ContactForm } from "./components/ContactForm/ContactForm";

import { Bio } from "./components/Bio/Bio";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";
import { Resume } from "./components/Resume/Resume";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onConnectClick={() => setIsModalOpen(true)} />

      <main className="page">
        <Routes>
          <Route path="/" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
