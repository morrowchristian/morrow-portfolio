import Navbar from "./components/Navbar";
import Hero from './sections/Hero';
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
       <div id="progress-bar"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <ScrollToTop />
    </>
  );
};

export default App;