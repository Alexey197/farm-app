import React from "react"

const Cell = (props) => {
    return (
        <td
            suppressContentEditableWarning={true}
            key={`${props.rig}:${props.row}:${props.col}`}
            id={`${props.rig}:${props.row}:${props.col}`}
            contentEditable={"true"}
            onClick={props.onShow}
        >
        </td>
    )
}

export default Cell