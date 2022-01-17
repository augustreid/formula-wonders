import { Fragment } from "react";
import './SCSS/App.scss';
import Home from "./components/Home"
import RaceResults from "./components/RaceResults";
import Schedule from "./components/Schedule"
import Drivers from "./components/Drivers"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <header className="header">
      <h1>Formula</h1>
      <h1>Wonders</h1>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/race-results" element={<RaceResults />} />
        <Route path="/drivers" element={<Drivers />} />
      </Routes>
    </main>
   </>
  )
}

export default App;
