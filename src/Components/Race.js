import React from "react";
import "../SCSS/Schedule.scss";


const Race = ({ name, circuit, date, time }) => {
    const raceDate = new Date(date);

    return (
        <div>
            <h3>{name}</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Circuit:</th>
                        <td>{circuit.circuitName}</td>
                    </tr>
                    <tr>
                        <th>Location:</th>
                        <td>{`${circuit.Location.locality}, ${circuit.Location.country}`}</td>
                    </tr>
                    <tr>
                        <th>Date:</th>
                        <td>{date}</td>
                    </tr>
                    <tr>
                        <th>Time:</th>
                        <td>{time}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Race; 