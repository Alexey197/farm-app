import React, {useState} from 'react'
import {tableParameters} from '../api/card.api'

const Rig = ({rig, rigNumber}) => {
    const [cards, setCards] = useState(rig)
    const updatedTableParam = tableParameters.filter(params => params !== [...tableParameters].shift())
    const handleDelete = (cardId) => {
        setCards(cards.filter(card => card._id !== cardId))
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
                        <td suppressContentEditableWarning={true}>{card.name}</td>
                        {updatedTableParam.map((_, paramIndex) => (
                            <td id={`${rigNumber}:${card._id}:${paramIndex + 1}`} key={paramIndex}
                                contentEditable={"true"}></td>
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
                {/*{cards.map((card, cardIndex) => (*/}
                {/*    <tr key={cardIndex}>*/}
                {/*        <td>{cardIndex + 1}</td>*/}
                {/*        <td suppressContentEditableWarning={true}>{card}</td>*/}
                {/*        {updatedTableParam.map((_, paramIndex) => (*/}
                {/*            <td id={`${rigNumber}:${cardIndex + 1}:${paramIndex + 1}`} key={paramIndex}*/}
                {/*                contentEditable={"true"}></td>*/}
                {/*        ))}*/}
                {/*        <td>*/}
                {/*            <button*/}
                {/*                className={"btn btn-danger"}*/}
                {/*                onClick={(e) => handleDelete(e)}*/}
                {/*            >*/}
                {/*                Удалить*/}
                {/*            </button>*/}
                {/*        </td>*/}
                {/*    </tr>*/}
                {/*))}*/}
                </tbody>
            </table>
        </>
    )
}

export default Rig