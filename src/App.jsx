import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./Components/Navigation";
import LendLogic from "./routes/LendLogic";
import "./App.css";
import EduTask from "./routes/EduTask";
import BootcampKitchen from "./routes/BootcampKitchen";
import About from "./routes/About";
import SkillsSection from "./routes/SkillsSection";

function App() {
  return (
    <Router>
      <Navigation />
      <main className="align-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lendlogic" element={<LendLogic />} />
          <Route path="/edutask" element={<EduTask />} />
          <Route path="/bootcampkitchen" element={<BootcampKitchen />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<SkillsSection />} />


        </Routes>


      </main>
    </Router>
  );
}

export default App;
