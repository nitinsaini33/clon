import React from 'react'
import './Youfill.css'
import Heading from '../../Commen/Heading'
import InputBox from '../../Commen/InputBox'

const Youfill = () => {
  return (
    <div className='signup-wraper'>
        <div className='signup'>
       <Heading label={"Your Info"}/>
       <div className='info-name'>
       <InputBox placeText={"Your Name"}/>
       <InputBox placeText={"email"}/>
        </div>
       <InputBox placeText={"username"}/>
       <div className='info-user'>
       <InputBox placeText={"Relationship Status"}/>
       <InputBox placeText={"Work At"}/>
       </div>
       <div className='sub-btn'>
       <button>Update</button> 
        </div>
      
       </div>
    </div>
  )
}

export default Youfill