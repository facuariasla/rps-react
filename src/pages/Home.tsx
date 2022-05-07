import React from 'react'
import './Home.css'
import { Btn } from '../components/Btn';
import { Figs } from '../components/Figs';

export const Home = () => {
  return (
    <div className='home-container'>
      <header className='header-container'>
      </header>

      <div className="title-container">
        <h1>Rock, Paper & Scissors</h1>
      </div>

      <div className="btn-container">
        <Btn txtContent='Start' goTo='/instructions'/>
      </div>

      <div className="figs-container">
        <Figs/>
      </div>

    </div>
  )
}
