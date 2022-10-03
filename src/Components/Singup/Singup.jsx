import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

// import {db} from '../firebase/firebase'
// import {collection, addDoc, Timestamp} from 'firebase/firestore';
import {auth} from '../firebase/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

import './Singup.css';
import Heading from '../Commen/Heading';
const Singup = () => {
  const [user,setUser]=useState({
    username:'',
    email:'',
    password:'',

  })
  const navigate=useNavigate()
 
  const{username,email,password}=user;
  const handleInput=(e)=>{
    const name= e.target.name;
    const value=e.target.value;

    setUser({...user,[name]:value})
  }
  const handleSubmit=async(e)=>{
  

    e.preventDefault()
    if(!username && !email && !password){
    return alert('All Fields Are Required')
    }
  
    // try {
    //  const res= await addDoc(collection(db, 'userdata'),{user})
    //  console.log('res',res);
     
    // } catch (err) {
     
    // }
    createUserWithEmailAndPassword(auth,email,password)
    .then((res) => {
    if(!res) return alert('Something went  wrong')
    navigate('/login')
    
        console.log('response',res.user)
      }).catch((error)=>{
        console.log('error',error);

      })
  
  }
  
  return (
    <>
    <form>

    <div className='signup-wraper'>
   
    <div className='signup'>
       <Heading label="Sign-up" />
       

       <div>
       <input type='text' placeholder='username'
       onChange={handleInput}
       name='username'/>
       </div>
       <div>
       <input type='email' placeholder='email'
       onChange={handleInput}
       name= 'email'/>
       </div>
       <div>
       <input type='password' placeholder='password'
       onChange={handleInput}
       name='password'/>
       </div>
       <div className='sub-btn'>
    <button  onClick={handleSubmit}>submit</button>
    </div>

          
       

        <p>Already have an account <Link to="/login">Login</Link></p>
        
       
    </div>
    
    </div>
    </form>
  
  
    </>
  
    
  )
}

export default Singup