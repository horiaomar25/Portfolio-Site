import Navigation from "./Components/Navigation";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/ProjectCard";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";


import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects/>
      <Footer />
    </>
  );
}

export default App;
