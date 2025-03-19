import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./Components/Navigation";
import LendLogic from "./routes/LendLogic";
import NovaStore from "./routes/NovaStore";
import HistoricalFigures from "./routes/HistoricalFigures";
import EduTask from "./routes/EduTask"
import "./App.css";



import SkillsSection from "./routes/SkillsSection";



function App() {
  return (
    <Router>
      <Navigation />
      <main className="align-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lendlogic" element={<LendLogic />} />
      
          <Route path="/historicalfigures" element={<HistoricalFigures />} />
          <Route path="/novastore" element={<NovaStore />} />
          <Route path="/edutask" element={<EduTask />} />

    
      
          <Route path="/Skills" element={<SkillsSection />} />


        </Routes>


      </main>
    </Router>
  );
}

export default App;
