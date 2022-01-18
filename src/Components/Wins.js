import React from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";


const Wins = ({driverId}) => {
  const {data: champions, isLoading, error} = useFetch(`https://ergast.com/api/f1/drivers/${driverId}/driverStandings/1.json`);
  const {data: wins} = useFetch(`https://ergast.com/api/f1/drivers/${driverId}/results/1.json?limit=300`);
  const {data: seconds} = useFetch(`https://ergast.com/api/f1/drivers/${driverId}/results/2.json?limit=300`);
  const {data: thirds} = useFetch(`https://ergast.com/api/f1/drivers/${driverId}/results/3.json?limit=300`);
  let championshipWins;
  let raceWins;
  let podiums;

  if (!isLoading) {
    championshipWins = champions.total;
    raceWins = wins.total;
    podiums = parseInt(wins.total) + parseInt(seconds.total) + parseInt(thirds.total);
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading ? <Loading /> :
      <table>
        <tbody>
          <tr>
            <th>World Championship Wins:</th>
            <td>{championshipWins}</td>
          </tr>
          <tr>
            <th>Race Wins:</th>
            <td>{raceWins}</td>
          </tr>
          <tr>
            <th>Race Podiums:</th>
            <td>{`${podiums}`}</td>
          </tr>
        </tbody>
      </table>}
    </div>
  )

}

export default Wins; 