import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const DriverSelect = ({year}) => {
    const {data: seasonDrivers, isLoading, error} = useFetch(`https://ergast.com/api/f1/${year}/drivers.json`)

    return (
        <select>

        </select>
    )
}

export default DriverSelect;