
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/ProjectCard";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation"
import SoftSkills from "./Components/SoftSkills";




import "./App.css";
import OngoingProjects from "./Components/OngoingProjects";


function App() {
  return (
    <>
  <Navigation/>
      <HeroSection />
      <AboutMe /> 

      <Skills />
     <SoftSkills/>
      <Projects/>
      <OngoingProjects/>
      <Footer />
    </>
  );
}

export default App;
