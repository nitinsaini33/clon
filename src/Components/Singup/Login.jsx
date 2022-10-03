import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../Commen/Heading';
import InputBox from '../Commen/InputBox';
import { auth } from '../firebase/firebase';
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'


const Login = () => {

const[login,setLogin]=useState();
const email="nitin5549@gmail.com";
const password='123123'

const handleLogin=async()=>{

  // const res = await firebase.auth()
  // .signInWithEmailAndPassword(email, password)

  // console.log('login',res);


}

const  handleLoginChnage=(e)=>{
  console.log('event',e.target.value)
  setLogin({...login,[e.target.name]:e.target.value})

}

  return (
    <div className='signup-wraper'>

        <div className='signup'>
         <Heading label={"Login"} />
            <InputBox placeText={"Email"} event={handleLoginChnage}   />
            <InputBox placeText={"password"} event={handleLoginChnage} />
             <div className='sub-btn'>
            <button>Login</button>
            <p>Don't have an account <Link to="/signup">Signup</Link></p>
            </div>

        </div>



    </div>
  )
}

export default Login