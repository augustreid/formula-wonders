import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const DriverSelect = ({year}) => {
    const {data: seasonDrivers, isLoading, error} = useFetch(`https://ergast.com/api/f1/${year}/drivers.json`)
    const [selectedDriver, setSelectedDriver] = useState(null);
    let drivers;

    if (!isLoading) {
        const allDrivers = seasonDrivers?.DriverTable?.Drivers;
        drivers = allDrivers.map((driver) => {
            return (
                <option value={driver} key={driver.code}>
                    {`${driver.givenName} ${driver.familyName}`}
                </option>
            )
        })
    }

    return (
        <div>
            <form>
            <select name="driverName" value={selectedDriver} onChange={(e) => setSelectedDriver(e.target.value)}>
                {drivers}
            </select>
            <button></button>
            </form>
            <Link to={`/drivers/${selectedDriver.driverId}`} >
                <button type="submit">Lookup Driver</button>
            </Link>
        </div>
    )
}

export default DriverSelect;