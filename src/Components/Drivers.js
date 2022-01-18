import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../SCSS/Drivers.scss";
import DriverSelect from "./DriverSelect";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";


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
        {error && <p>{error}</p>}
        {isLoading && <Loading /> }
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
 