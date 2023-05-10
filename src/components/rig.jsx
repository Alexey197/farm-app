import React, {useState} from 'react'
import {tableParameters} from '../api/card.api'
import Cell from "./cell";

const Rig = ({rig, rigNumber}) => {
    console.log(rig, rigNumber)
    const [cards, setCards] = useState(rig)
    const [value, setValue] = useState('')
    const updatedTableParam = tableParameters.filter(params => params !== [...tableParameters].shift())
    const handleDelete = (cardId) => {
        setCards(cards.filter(card => card._id !== cardId))
    }
    const handleClick = (rig, row, col) => {
        console.log(`${rig}:${row}:${col}`)
    }
    return (
        <>
            <h2 className="col-md-1 mx-auto">Rig-{rigNumber}</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    {tableParameters.map((param, index) => (
                        <th key={index} scope="col">{param}</th>
                    ))}
                    <th scope="col">Remove</th>
                </tr>
                </thead>
                <tbody>
                {cards.map(card => (
                    <tr key={card._id}>
                        <td>{card._id}</td>
                        <td>{card.name}</td>
                        {updatedTableParam.map((_, paramIndex) => (
                            <Cell
                                key={`${rigNumber}:${card._id}:${paramIndex + 1}`}
                                onShow={() => handleClick(rigNumber, card._id, paramIndex + 1)}
                            />
                        ))}
                        <td>
                            <button
                                className={"btn btn-danger"}
                                onClick={() => handleDelete(card._id)}
                            >
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Rig