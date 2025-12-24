import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
       <div id="progress-bar"></div>
      <Navbar />

      <About />
      <Skills />
      <Projects />
      <Contact />

      <ScrollToTop />
    </>
  );
};

export default App;