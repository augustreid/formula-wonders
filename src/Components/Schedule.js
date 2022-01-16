import React from "react";
import "../SCSS/Schedule.scss";
import useFetch from "../hooks/useFetch";
import Race from "./Race"; 


const Schedule = () => {
    const {data, isLoading, error} = useFetch("http://ergast.com/api/f1/2022.json");
    const season = data.Racetable.Races;

    const races = season.map((race) => {
        return (
            <li>
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

    return (
        <h3>Schedule</h3>
    )
}


export default Schedule;