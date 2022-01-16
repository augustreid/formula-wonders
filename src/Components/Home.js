import React from "react";
import { Link } from "react-router-dom";
import "../SCSS/Home.scss";


const Home = () => {
  return (
    <section>
        {/* <Link to={"/schedule"}>
            <img src="../assets/calendar.png" alt="Icon of a calendar"/>
            <h2>Schedule</h2>
        </Link> */}
        <Link to={"/race-results"}>
            <img src="../assets/flag.svg" alt="Icon of a checkered flag"/>
            <h2>Race Results</h2>
        </Link>
        <Link>
            <img src="../assets/helmet.svg" alt="Icon of racing helment"/>
        </Link>
    </section>
  )
}

export default Home;