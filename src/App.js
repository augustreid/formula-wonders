import { Fragment } from "react";
import './SCSS/App.scss';
import Home from "./components/Home"
import RaceResults from "./components/RaceResults";
import Schedule from "./components/Schedule"
import Drivers from "./components/Drivers"
import SingleDriver from "./components/SingleDriver";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
    <header>
      <Link to={"/"} className="header">
        <h1>Formula</h1>
        <h1>Wonders</h1>
      </Link>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/race-results" element={<RaceResults />} />
        <Route path="/drivers" element={<Drivers />}>
          <Route path=':id' element={<SingleDriver />} />
        </Route>
      </Routes>
    </main>
   </div>
  )
}

export default App;
