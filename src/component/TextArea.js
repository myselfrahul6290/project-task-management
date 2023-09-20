import React from 'react'
import Label from './Label'


function TextArea(props) {
  return (
    <>
    <div class="mb-3">
    <Label name={props.name} />
     <textarea type="text" className="form-control"  onChange={(e)=>props.func(e.target.value)} value={props.val} placeholder={"Enter "+props.name} />
   </div>
    </>
  )
}

export default TextArea
