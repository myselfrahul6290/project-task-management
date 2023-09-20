import React from 'react'

function ThTag(props) {
   
  return (
    <>
      <th className={"border border-success text-center "+props.clss}>{props.name}</th>
    </>
  )
}

export default ThTag
