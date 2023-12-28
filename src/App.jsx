import Navigation from "./Components/Navigation";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/ProjectCard";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css";



const HomePage = () => {
  return (
    <>
    <HeroSection />
    <AboutMe />
    <Skills />
    <Projects />
    </>
  
  );
};

function App() {
  return (
    <Router>
      <>
        <Navigation />
        
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
