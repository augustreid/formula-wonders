import React, { Component, Fragment, useEffect } from "react";
import "../SCSS/Schedule.scss";
import useFetch from "../hooks/useFetch";
import Race from "./Race"; 
import Loading from "./Loading";
import SideNav from "./SideNav";


const Schedule = () => {
    const {data, isLoading, error} = useFetch("http://ergast.com/api/f1/2022.json");
    let races;
 
    if (!isLoading) {
        const allRaces = (data.RaceTable.Races);
        races = allRaces.map((race) => {
            return (
                <li key={race.round}>
                <Race
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
        <div className="container">
            <section className="schedule">
                <h2>{`${data?.RaceTable?.season} World Championship Schedule`}</h2>
                {error && <p>{error}</p>}
                {isLoading ? <Loading /> :
                    <ol className="race-container">
                        {races}
                    </ol>
                }
            </section>
            <SideNav />
        </div>
    )
}


export default Schedule;