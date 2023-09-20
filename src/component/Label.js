import React from 'react'

function Label(props) {
  return (
    <>
      <label htmlFor="exampleInputEmail1" className="form-label text-light">{props.name}</label>
    </>
  )
}

export default Label
