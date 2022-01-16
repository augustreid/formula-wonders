import React, { Component, Fragment, useEffect } from "react";
import "../SCSS/Schedule.scss";
import useFetch from "../hooks/useFetch";
import Race from "./Race"; 
import Loading from "./Loading";


// class Schedule extends Component {
//     constructor() {
//         super();
//         this.state = {
//             races: []
//         }
//     }

//     componentDidMount() {
//         fetch("http://ergast.com/api/f1/2022.json")
//         .then(response => response.json()) 
//         .then(data => console.log(data))
//     }

//     render() {
//         return (
//             <p>Testing</p>
//         )
//     }
// }


const Schedule = () => {
    const {data, isLoading, error} = useFetch("http://ergast.com/api/f1/2022.json");
    const season = data.MRData.RaceTable.Races;

    let races;

    if (!isLoading) {
        console.log(data)
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