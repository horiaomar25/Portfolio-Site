import Navigation from "./Components/Navigation";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/ProjectCard";

import "./App.css";
import MobileNav from "./Components/MobilenAV.JSX";




function App() {
  return (
    <>
      <Navigation />
  
      <HeroSection />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
