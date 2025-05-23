import React from 'react'
import '../Button/Button.css'

function Button({type, className, id, buttonName, onChange, onClick, ...rest }) {
  return (
      <button 
       type={type}
       className={className}
       id={id}
       onChange={onChange}
       onClick={onClick}
       {...rest}
      >{buttonName}</button>
  )
}

export default Button