import React from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";


const Constructors = ({driverId}) => {
    const {data: constructors, isLoading, error} = useFetch(`https://ergast.com/api/f1/drivers/${driverId}/constructors.json`)
    let teams;

    if(!isLoading) {
        const allTeams = constructors?.ConstructorTable?.Constructors;
        teams = allTeams.map((team) => {
            return (
                <li key={team.constructorId}>
                    <a href={team.url} target="_blank" rel="noreferrer noopener">{team.name}</a>
                </li>
            )
        })
    }

    return (
        <div>
           {error && <p>{error}</p>} 
           {isLoading ? <Loading /> : 
           <ul>
               {teams}
            </ul>}
        </div>
    )
}

export default Constructors;