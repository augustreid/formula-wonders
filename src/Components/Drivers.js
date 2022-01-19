import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
import "../SCSS/Drivers.scss";
import DriverSelect from "./DriverSelect";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import SideNav from "./SideNav";


const Drivers = () => {
  const {data: allSeasons, isLoading, error} = useFetch("http://ergast.com/api/f1/seasons.json?limit=100")
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
    <div className="container">
      <SideNav />
      <section className="drivers">
        {error && <p>{error}</p>}
        {isLoading && <Loading /> }
        <form>
          <label>
            Pick a Formula 1 Season
          <select name="selectSeason" value={raceSeason} onChange={(e) => setRaceSeason(e.target.value)}>
            <option>--Please Select a Year--</option>
            {seasons}
          </select>
          </label>
       </form>
        {raceSeason && <DriverSelect year={raceSeason}/>}
        <Outlet />
      </section>
    </div>
  )
}

export default Drivers;
 
Drivers.propTypes = {
    value: PropTypes.string,
    key: PropTypes.string,
    year: PropTypes.string
}