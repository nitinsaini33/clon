import React from 'react';
import './ProfileCard.css'
import {Link} from 'react-router-dom'
import img3 from '../image/profile.jpg';
import img2 from '../image/back.jpg'
const ProfileCard = ({height}) => {
  return (
    <div className='profilecard'>
       <div className='back-img'   >
         <img  src={img2} style={{height:height}} />
         </div>
        <div className='profile-logo'  >
        <img src={img3}/>
         </div>
         <div className='profile-text'>
            <h4>username</h4>
            <h3 className='color'>Senoir UI/UX Designer</h3>
            <div className='profile-follower'>
             <div className='follower'>
                <i>0</i>
                <h3>Followers</h3>
             </div>
             <div className='emp'></div>
             <div className='following'>
                <i>0</i>
                <h3>Following</h3>
             </div>

            </div>
            <Link to='/myprofile' className='link-btn'> My Profile</Link>
         </div>
          </div>
  ) 
}

export default ProfileCard