import React from 'react'

export default function Input(props) {
  return (
    <div>
      <p className='InputName'>{props.name}</p>
      <input placeholder={props.placeholder}></input>
    </div>
  )
}
