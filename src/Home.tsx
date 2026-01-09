// src/Home.tsx
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import useReveal from "./hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <section id="hero" className="reveal"><div className="layout-wrapper"><Hero /></div></section>
      <section id="about" className="reveal"><div className="layout-wrapper content-width"><About /></div></section>
      <section id="projects" className="reveal"><div className="layout-wrapper"><Projects /></div></section>
      <section id="contact" className="reveal"><div className="layout-wrapper content-width"><Contact /></div></section>
    </>
  );
}
