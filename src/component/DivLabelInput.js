import React from 'react'
import Label from './Label'
import InputTag from './InputTag'


function DivLabelInput(props) {
  return (
    <>
      <div class="mb-3">
     <Label name={props.name} />
     <InputTag func={props.func} val={props.val} name={props.name} />
   </div>
    </>
  )
}

export default DivLabelInput
