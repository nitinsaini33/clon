import {FaPencilAlt} from 'react-icons/fa'
import './YourInfo.css'
import { Link } from 'react-router-dom';
import {db} from '../firebase/firebase'

import { useEffect } from 'react';

import { doc, getDoc } from "firebase/firestore";
const YourInfo = () => {
  // const q =doc(db, "userdata");
  



  const getData=async()=>{
  
    // const docSnap = await getDoc(q);
  
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }

 }

  // useEffect(()=>{
  //   getData();
  //   console.log('run');

  // },[])
  
  return (
    <div className='your-info'>
     <div className='your-item'>
       <h3>Your info</h3>
       <Link to="/Youfill"><sapan><FaPencilAlt/></sapan></Link> 

       </div>
       <h2>Status<span>Single</span></h2>
       <h2>Lives In<span>India</span></h2>
       <h2>Work at<span>Amazon</span></h2>
       <div className='log-btn'>
       <button>LOg Out</button>
       </div>
       </div>
       
    
  )
}

export default YourInfo