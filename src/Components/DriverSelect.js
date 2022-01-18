import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const DriverSelect = ({year}) => {
    const {data: seasonDrivers, isLoading, error} = useFetch(`https://ergast.com/api/f1/${year}/drivers.json`)
    const [selectedDriver, setSelectedDriver] = useState("");
    let drivers;

    if (!isLoading) {
        const allDrivers = seasonDrivers?.DriverTable?.Drivers;
        drivers = allDrivers.map((driver) => {
            return (
                <option value={driver.driverId} key={driver.driverId}>
                    {`${driver.givenName} ${driver.familyName}`}
                </option>
            )
        })
    }

    return (
        <div className="driver-selection">
            <form>
            <select className="driver-name" name="driverName" value={selectedDriver} onChange={(e) => {setSelectedDriver(e.target.value) }}>
                <option>--Please Select a Driver--</option>
                {drivers}
            </select>
            </form>
            {selectedDriver && <Link to={`/drivers/${selectedDriver}`} key={selectedDriver.driverId} >
                <button type="submit" className="lookup-driver">Lookup Driver</button>
            </Link>}
            <Link to={"/drivers"}>
                <button type="submit" className="clear">Clear</button>
            </Link>
        </div>
    )
}

export default DriverSelect;