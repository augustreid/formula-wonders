import React, { Component, Fragment, useEffect } from "react";
import "../SCSS/Schedule.scss";
import useFetch from "../hooks/useFetch";
import Race from "./Race"; 
import Loading from "./Loading";


// class Schedule extends Component {
//     constructor() {
//         super();
//         this.state = {
//             races: [],
//             loading: true
//         }
//     }

//     componentDidMount() {
//         fetch("http://ergast.com/api/f1/2022.JSON")
//         .then(response => response.json()) 
//         .then(data => this.setState({ races: data.MRData.RaceTable.Races, loading: false }))
//         .then(data => console.log(data))
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.loading ? <Loading />:
//                 <p>{this.races}</p>}
//             </div>
//         )
//     }
// }


const Schedule = () => {
    const {data, isLoading, error} = useFetch("http://ergast.com/api/f1/2022.json");
    // let races;
    // console.log(data.MRData.RaceTable.Races);
    const allRaces = (data.MRData.RaceTable.Races);
    console.log("all races", allRaces);
    // if (!isLoading) {
       const races = allRaces.map((race) => {
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
    // }
    

    return (
        <section className="schedule">
                <ol className="race-container">
                    {races}
                </ol>
        </section>
    )
}


export default Schedule;