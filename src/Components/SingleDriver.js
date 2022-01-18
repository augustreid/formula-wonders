import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SingleDriver = () => {
    const driverId = useParams().id;
    const {data: driverInfo, isLoading, error} = useFetch(`http://ergast.com/api/f1/drivers/${driverId}.json`)
    let driver;

    if (!isLoading) {
        driver = driverInfo.DriverTable.Drivers[0];
    }    

    return (
        <div>
       {!isLoading && 
       <section>
            <h3>{`${driver.givenName} ${driver.familyName}`}</h3>
            
        </section>}
        </div>
    )
}

export default SingleDriver;