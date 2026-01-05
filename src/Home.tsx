// src/Home.tsx
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import useReveal from "./hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <section id="hero" className="reveal"><Hero /></section>
      <section id="about" className="reveal"><About /></section>
      <section id="projects" className="reveal"><Projects /></section>
      <section id="experience" className="reveal"><Experience /></section>
      <section id="contact" className="reveal"><Contact /></section>
    </>
  );
}
