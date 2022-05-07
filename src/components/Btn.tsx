import React from 'react'
import './Btn.css'
import { useNavigate } from 'react-router'

export const Btn = (props:any) => {
  // useHistory en versiones anteriores
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate(props.goTo)
  }
  
  return (
    <div className='blue-btn-container' onClick={handleClick}>
      <button className="blue-btn">
        {props.txtContent}
      </button>
    </div>
  )
}
