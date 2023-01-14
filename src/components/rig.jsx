import React, {useState} from 'react'
import {farm as rigs, tableParameters} from '../api/card.api'

const Rig = ({rigNumber}) => {
  const tableHeader = tableParameters
  const [rigs, setCards] = useState(rigs)
  return (
    <>
      <h2 className="col-md-1 mx-auto">Rig-{rigNumber}</h2>
      <table className="table table-bordered">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Card Model</th>
          <th scope="col">Core Clock offset</th>
          <th scope="col">Memory Clock offset</th>
          <th scope="col">Power limit</th>
          <th scope="col">Fan</th>
          <th scope="col">Target Temp</th>
          <th scope="col">Set</th>
        </tr>
        </thead>
        <tbody>
        {rigs.map(card => (
          <tr>
            <th scope="row">1</th>
            <td>{card}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default Rig