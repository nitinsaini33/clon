import React from 'react'

const InputBox = ({placeText,name,event}) => {
  return (
   <input type="text" name={name} placeholder={placeText} className="inputBox" onChange={event} />
  )
}

export default InputBox;