import React from 'react'

function Button(props) {
  return (
    <>
   <button className={props.clss} onClick={props.func}>{props.name}</button>
      
    </>
  )
}

export default Button
