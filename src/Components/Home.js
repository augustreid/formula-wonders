import React from "react";
import { Link } from "react-router-dom";
import helmet from "../assets/helmet.svg";
import calendar from "../assets/calendar.svg";
import flag from "../assets/flag.svg";
import useFetch from "../hooks/useFetch";
import "../SCSS/Home.scss";


const Home = () => {
  const {data, isLoading, error} = useFetch("http://ergast.com/api/f1/2022.json")
  console.log("home", data)

  return (
    <section>
        <Link to={"/schedule"}>
            <img src={calendar} alt="calendar icon" />
            <h2>Schedule</h2>
        </Link>
        <Link to={"/race-results"}>
            <img src={flag} alt="flag icon" />
            <h2>Race Results</h2>
        </Link>
        <Link to={"/drivers"}>
            <img src={helmet} alt="helmet icon" />
            <h2>Drivers</h2>
        </Link>   
    </section>
  )
}

export default Home;