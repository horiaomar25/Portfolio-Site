import HeroSection from "../Components/HeroSection"
import Projects from "../Components/Projects"
import Footer from "../Components/Footer"
import Skills from "./SkillsSection"
import AboutMe from "../Components/AboutMe"

const Home = () => {
  return (

    <>
      <HeroSection />
      <AboutMe/>
      <Skills />
      <Projects />
      <Footer />
    </>

  )
}

export default Home