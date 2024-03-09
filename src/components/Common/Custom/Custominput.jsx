import React from 'react'
import './custominput.css'
function Custominput({type,label,name,value,onblur,onchange}) {
  return (
    <div className='common-input-box'>
        <input type={type} required name={name} value={value} onChange={onchange} onBlur={onblur} className='common-input'/>
        <label htmlFor="">{label}</label>
    </div>
  )
}

export default Custominput