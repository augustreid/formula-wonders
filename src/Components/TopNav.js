import React from "react";
import { NavLink } from "react-router-dom";

const TopNav = () => {
    return (
        <nav className="topNav">
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
    )
}



export default TopNav;