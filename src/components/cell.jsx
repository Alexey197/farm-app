import React from "react"

const Cell = ({rig, row, col, onShow, onType}) => {
    // const {rig, row, col} = props
    return (
        <td
            suppressContentEditableWarning={true}
            key={`${rig}:${row}:${col}`}
            contentEditable={"true"}
            onClick={onShow}
        >
        </td>
    )
}

export default Cell