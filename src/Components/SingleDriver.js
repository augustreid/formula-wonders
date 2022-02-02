import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import "../SCSS/Drivers.scss";
import useFetch from "../hooks/useFetch";
import Constructors from "./Constructors";
import Wins from "./Wins";
import Loading from "./Loading";

const SingleDriver = () => {
  const driverId = useParams().id;
  const {data: driverInfo, isLoading, error} = useFetch(`https://ergast.com/api/f1/drivers/${driverId}.json`)
  let driver;

  if (!isLoading) {
    driver = driverInfo.DriverTable.Drivers[0];
  }   
  
  return (
    <div className="driver-info">
    {error && <p>{error}</p>}
    {isLoading ? <Loading /> :
    <section>
      <h3>{`${driver.givenName} ${driver.familyName}`}
        {driver.permanentNumber && <p>{`#${driver.permanentNumber}`}</p>}
      </h3>
      <table>
        <tbody>
          <tr>
            <th>Nationality:</th>
            <td>{driver.nationality}</td>
          </tr>
          <tr>
            <th>Date of Birth:</th>
            <td>{driver.dateOfBirth}</td>
          </tr>
        </tbody>
      </table>
      <Constructors driverId={driverId}/>
      <Wins driverId={driverId}/>
      <div className="wiki">
          <a href={driver.url} target="_blank" rel="noreferrer noopener" className="wiki-button">
        <button>
            Learn More
        </button>
          </a>
      </div>
    </section>}

    </div>
  )
}

export default SingleDriver;

SingleDriver.propTypes = {
  driverId: PropTypes.string
}

