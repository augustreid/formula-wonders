import React from "react";
import "../SCSS/SideNav.scss";
import { NavLink } from "react-router-dom";
import helmet from "../assets/helmet.png";
import calendar from "../assets/calendar.svg";
import flag from "../assets/flag.png";

const SideNav = () => {
  return (
    <div className="side-nav">
      <nav className="right-nav">
        <NavLink to={"/schedule"}>
          <img src={calendar} alt="calendar icon" />
          <h2>Schedule</h2>
        </NavLink>
        <NavLink to={"/drivers"}>
          <img src={helmet} alt="helmet icon" />
          <h2>Drivers</h2>
        </NavLink>  
        <NavLink to={"/race-results"}>
          <img src={flag} alt="flag icon" />
          <h2>Race Results</h2>
        </NavLink>            
      </nav>
    </div>
  )
}



export default SideNav;