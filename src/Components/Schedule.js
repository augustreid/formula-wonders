import React from "react";
import "../SCSS/Schedule.scss";
import useFetch from "../hooks/useFetch";
import Race from "./Race"; 


const Schedule = () => {
    const {data, isLoading, error} = useFetch("http://ergast.com/api/f1/2022.json");
    const season = data.Racetable.Races;
    let races;
    if (!isLoading) {
        races = season.map((race) => {
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
            <h3>{`${data.RaceTable.season} Season`}</h3>
            {isLoading ? <Loading /> :
            <>
                {error ? <>{error}</> :
                <ol className="race-container">
                    {races}
                </ol>
          }
        </>
      }
        </section>
    )
}


export default Schedule;