import React from 'react'
import Postside from '../Components/Postside/Postside'
import Rightside from '../Components/Rightside/Activefriend/Rightside'
import Profile from '../Components/Profile/Profile'
import './Home.css'
import InstaNav from '../Components/InstaNav/InstaNav'
const Home = () => {
  return (
    <>
    <div className='instagram-front'>
      <InstaNav/>
    </div>
    <div className='home'>
         
        <div className="profile">
        
        <Profile/>
        </div>
        <div className="postSlide">
        <Postside/>
        </div>
        <div className="rightSlide">
         <Rightside />

        </div>




    </div>
    </>
  )
}

export default Home