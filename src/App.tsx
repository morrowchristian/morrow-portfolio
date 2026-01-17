// src/App.tsx
import { useState } from "react";
import "./styles/globals.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Modal } from "./components/Modal/Modal";
import { ContactForm } from "./components/ContactForm/ContactForm";

import { Bio } from "./components/Bio/Bio";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";
import { Resume } from "./components/Resume/Resume";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onConnectClick={() => setIsModalOpen(true)} />

      <main>
        <Bio />
        <Portfolio />
        <Services />
        <Resume />
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
