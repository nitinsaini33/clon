import React from 'react'
import img10 from '../image/postimg..jpg'
import img11 from '../image/postimg2.jpg'
import img12 from '../image/postimg3.jpg'
import {FcLike} from 'react-icons/fc'
import {BiMessageDots} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'

import {TbSend} from 'react-icons/tb'
import './Post.css'
import { useState } from 'react'
const Post = () => {

    const [like,setLike]=useState(false);
    const[likeCount,setLikeCount]=useState(0)


    const handleLike=()=>{
     
      setLike(!like)
      setLikeCount((prev)=>prev+1)
      

    }
  return (
    <div className='post'>
        <div className='post-img'>
        
         <img src={img10}/>
        <div className='posy-icon'>
          {like?<span onClick={handleLike}><FcLike size={35} /></span>:<AiOutlineHeart size={35} onClick={handleLike} /> }
  
          
          <BiMessageDots/><TbSend/></div>


          <h3>likes  {likeCount<1 && likeCount}</h3>
        <h3>jenni<span>Happy New Year all friends! #2023</span></h3>
        </div>
        <div className='post-img'>
         <img src={img11}/>
         <div className='posy-icon'> 
         {like?<span onClick={handleLike}><FcLike size={35} /></span>:<AiOutlineHeart size={35} onClick={handleLike} /> }
  
         <BiMessageDots/><TbSend/></div>


        
         <h3>jenni<span>Party time :)</span></h3>

        </div>
        <div className='post-img'>

         <img src={img12}/>
         <div className='posy-icon'>
         {like?<span onClick={handleLike}><FcLike size={35} /></span>:<AiOutlineHeart size={35} onClick={handleLike} /> }
          <BiMessageDots/><TbSend/></div>
         <h3>jenni<span>At Archery Festival</span></h3>
        </div>

    </div>
  )
}

export default Post