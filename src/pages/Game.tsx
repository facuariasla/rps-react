import React, { useEffect, useState } from 'react'
import { Figs } from '../components/Figs'

import './Game.css'

export const Game = () => {

  // Ver si este state va en Figs o aca (el de picks)
  const [counter, setCounter] = useState(0)
  const [pick, setPick] = useState(null)
  const [result, setResult] = useState(null)

  return (
    <div className='game-container'>
      <div className='bot-fig-container'>
        Mano del bot
      </div>

      <div className="loader-container">
        3
      </div>

      <div className="figs-container">
        {/* <Figs /> */}
        {}
      </div>
    </div>
  )
}
