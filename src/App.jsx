import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    // <div>
    //   <h1>Hello, I'm Your Name</h1>
    //   <p>Aspiring Java Full Stack Developer</p>
    // </div>
    <>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />

  <footer>
    © 2026 Hanoona E. Built with React.
  </footer>
</>
  );
}

export default App;
