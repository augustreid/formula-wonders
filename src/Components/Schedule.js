import React, { Component, Fragment, useEffect } from "react";
import "../SCSS/Schedule.scss";
import useFetch from "../hooks/useFetch";
import Race from "./Race"; 
import Loading from "./Loading";


const Schedule = () => {
    const {data, isLoading, error} = useFetch("http://ergast.com/api/f1/2022.json");
    let races;
 
    if (!isLoading) {
        const allRaces = (data.RaceTable.Races);
        races = allRaces.map((race) => {
            return (
                <li key={race.round}>
                <Race
                round={race.round}
                name={race.raceName}
                circuit={race.Circuit}
                date={race.date}
                time={race.time}
                /> 
                </li>
            )
        })
    }
    

    return (
        <section className="schedule">
            {error && <p>{error}</p>}
            {isLoading ? <Loading /> :
                <ol className="race-container">
                    {races}
                </ol>
            }
        </section>
    )
}


export default Schedule;