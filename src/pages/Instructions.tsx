import React from 'react'
import { Btn } from '../components/Btn'
import { Figs } from '../components/Figs'
import './Instructions.css'

export const Instructions = () => {
  return (
    <div className='instructions-container'>
      <header className='header-container'>
      </header>

      <div className="instructions_text-container">
        <h2>Press Play! and choose: rock, paper or scissors on the count of 3</h2>
      </div>

      <div className="btn-container">
        <Btn txtContent='Play!' goTo='/game'/>
      </div>

      <div className="figs-container">
        <Figs/>
      </div>

    </div>
  )
}
