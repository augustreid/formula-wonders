
import '../SCSS/App.scss';
import Home from "./Home"
import RaceResults from "./RaceResults";
import Schedule from "./Schedule"
import Drivers from "./Drivers"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/schedule" element={<Schedule />} />
     <Route path="/race-results" element={<RaceResults />} />
     <Route path="/drivers" element={<Drivers />} />
   </Routes>
  )
}

export default App;
