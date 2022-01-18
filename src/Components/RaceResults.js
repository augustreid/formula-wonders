import React from "react";
import "../SCSS/RaceResults.scss";
import useFetch from "../hooks/useFetch";
import Result from "./Result";
import Loading from "./Loading";
import SideNav from "./SideNav";

const RaceResults = () => {
    const {data, isLoading, error} = useFetch("http://ergast.com/api/f1/current/last/results.JSON")
    console.log(data)
    let results;
    
    if(!isLoading) {
        const raceResults = (data.RaceTable.Races[0].Results);
        results = raceResults.map((result) => {
            return (
                <li key={result.position}>
                <Result
                driver={result.Driver}
                driverNumber={result.number}
                points={result.points}
                constructor={result.Constructor.name}
                grid={result.grid}
                time={result?.Time?.time}
                /> 
                </li>
            )
        })
    }

    return (
        <div className="container">
            <section className="results">
                <h2>Latest Race Results</h2>
                {error && <p>{error}</p>}
                {isLoading ? <Loading /> :
                    <ol className="result-container">
                        {results}
                    </ol> 
                }
            </section>
            <SideNav />
        </div>
    )
}

export default RaceResults; 