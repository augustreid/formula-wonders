import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SingleDriver = () => {
    const driverId = useParams().id;
    const {data: driverBio, isLoading, error} = useFetch(`http://ergast.com/api/f1/drivers/${driverId}.json`)
    
    return (
        <p>testing</p>
    )
}

export default SingleDriver;