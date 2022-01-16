import React from "react";
import "../SCSS/RaceResults.scss";
import useFetch from "../hooks/useFetch";

const RaceResults = () => {
    const {data, isLoading, error} = useFetch("https://www.dnd5eapi.co/api/spells/acid-arrow/")
    console.log(data)
    const higherLevel = data["higher_level"][0];
    // // const wizard = data.classes[0];

    return (
        <div>
            <h3>Race Results</h3>
            <p>{higherLevel}</p>
        </div>
        
    )
}

export default RaceResults; 