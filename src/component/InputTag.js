import React from 'react'

function InputTag(props) {
  return (
    <>
     <input type="text"  className="form-control" onChange={(e)=>props.func(e.target.value)} value={props.val} placeholder={"Enter "+props.name} /> 
    </>
  )
}

export default InputTag
