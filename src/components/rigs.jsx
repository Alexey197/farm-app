import React from 'react'
import farm from '../api/card.api'
import Rig from './rig'

const Rigs = () => {
  return <>
    {farm.map((_, index) => <Rig key={index}/>)}
  </>
}

export default Rigs