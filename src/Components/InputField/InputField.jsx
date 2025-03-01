import React from 'react'

function InputField({label,type = 'text', placeholder, required = true, className, value, onChange, id, ...rest}) {
  return (
    <div className={`${className}`}>
       <input 
        type={type} 
        id={id} 
        placeholder={placeholder} 
        required = {required}
        label={label}
        value={value}
        onChange= {onchange}
        {...rest}
       />
    </div>
  )
}

export default InputField