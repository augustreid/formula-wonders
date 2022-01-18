import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Constructors from "./Constructors";
import Wins from "./Wins";

const SingleDriver = () => {
    const driverId = useParams().id;
    const {data: driverInfo, isLoading, error} = useFetch(`http://ergast.com/api/f1/drivers/${driverId}.json`)
    let driver;

    if (!isLoading) {
        driver = driverInfo.DriverTable.Drivers[0];
    }    

    return (
        <div>
        {error && <p>{error}</p>}
       {!isLoading && 
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
        <button>
            <a href={driver.url} target="_blank" rel="noreferrer noopener">Learn More</a>
        </button>
        <Constructors driverId={driverId}/>
        <Wins driverId={driverId}/>
        </section>}
        </div>
    )
}

export default SingleDriver;