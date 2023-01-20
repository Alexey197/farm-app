import React from 'react'
import {farm} from '../api/card.api'
import Rig from './rig'

const Rigs = () => {
    return <>
        {farm
            .map((rig, index) =>
                <Rig
                    rig={rig}
                    rigNumber={index + 1}
                    key={index}
                />
            )}
    </>
}

export default Rigs