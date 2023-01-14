import React from 'react'
import {farm} from '../api/card.api'
import Rig from './rig'

const Rigs = () => {
  return <>
    {farm
      .map((_, index) =>
        <Rig
          rigNumber={index + 1}
          key={index}
        />
      )}
  </>
}

export default Rigs