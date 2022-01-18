import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../SCSS/Drivers.scss"
import DriverSelect from "./DriverSelect";
import useFetch from "../hooks/useFetch";

const Drivers = () => {
    const {data: allSeasons, isLoading, error} = useFetch("http://ergast.com/api/f1/seasons.json?limit=72")
    const [raceSeason, setRaceSeason] = useState("")
    let seasons;

    if (!isLoading) {
        const years = allSeasons?.SeasonTable?.Seasons;
        seasons = years.map((year) => {
            return (
                <option value={year.season} key={year.season}> 
                    {year.season}
                </option>
            )
        })
    }

    return (
        <section>
        <form>
            <select name="selectSeason" value={raceSeason} onChange={(e) => setRaceSeason(e.target.value)}>
                <option>--Please Select a Year--</option>
                {seasons}
            </select>
        </form>
            {raceSeason && <DriverSelect year={raceSeason}/>}
            <Outlet />
        </section>
        
    )
}

export default Drivers;


//option 3: first show just input / dropdown menus to filter by year and driver at one time, 
//or by team / driver. 

//first fetch to get all seasons
//render Form, type=select, map over seasons to make them options. 
//add on onChange to select, changeHandler useFetch to get all drivers for season. 
//pass drivers to DriverSelect
//DriverSelect map over drivers to render options with firstName lastName
//onChange, changeHandler update state to pass driver name or object as props to SingleDriver
//submit button that is link to /drivers/:id 
//SingleDriver will useParams to useFetch and get number of races, number of wins, constructors. 