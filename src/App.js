import React from "react";
import './SCSS/App.scss';
import Home from "./Components/Home";
import RaceResults from "./Components/RaceResults";
import Schedule from "./Components/Schedule"
import Drivers from "./Components/Drivers"
import SingleDriver from "./Components/SingleDriver";
import NotFound from "./Components/NotFound";
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
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/race-results" element={<RaceResults />} />
        <Route path="/drivers" element={<Drivers />}>
          <Route path=":id" element={<SingleDriver />} />
        </Route>
      </Routes>
    </main>
   </div>
  )
}

export default App;
