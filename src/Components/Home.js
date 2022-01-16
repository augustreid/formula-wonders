import React from "react";
import { Link } from "react-router-dom";
import "../SCSS/Home.scss";


const Home = () => {
  return (
    <section>
        <Link to={"/schedule"}>
            <h2>Schedule</h2>
        </Link>
        <Link to={"/race-results"}>
            <h2>Race Results</h2>
        </Link>
        <Link to={"/drivers"}>
            <h2>Drivers</h2>
        </Link>   
    </section>
  )
}

export default Home;