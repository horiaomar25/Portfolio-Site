import HeroSection from "../Components/HeroSection"
import NewProjects from "../Components/NewProjects"
import Footer from "../Components/Footer"
import Skills from "./SkillsSection"

const Home = () => {
  return (

    <div>
      <HeroSection/>
      <Skills/>
        <NewProjects/>
        <Footer/>
        </div>
  )
}

export default Home