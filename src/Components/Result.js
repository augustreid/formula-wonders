import React from "react";


const Result = ({ driver, driverNumber, points, constructor, grid, time }) => {
    return (
        <div>
            <h4>{`${driver.givenName} ${driver.familyName} #${driverNumber}`}</h4>
            <p>{constructor}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Points:</th>
                        <td>{points}</td>
                    </tr>
                    <tr>
                        <th>Starting grid position:</th>
                        <td>{grid}</td>
                    </tr>
                    <tr>
                        <th>Finishing time:</th>
                        <td>{time}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Result;