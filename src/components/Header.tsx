import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
      <a href="" className="header_restart-btn">RESTART</a>
      <div className="header_score-content">
        <p className="bot-score">BOT: 0</p>
        <p className="user-score">TU: 0</p>
      </div>
      <div className="header_data"></div>
    </div>
  )
}
