import HeroSection from "../Components/HeroSection";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
import Skills from "./SkillsSection";
import AboutMe from "../Components/AboutMe";

const Home = () => {
  return (
    <>
      
      <main className="container mx-auto px-6">
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default Home;
