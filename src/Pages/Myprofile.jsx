import React from 'react'
import Folowingpeople from '../Components/Folowingpeople/Folowingpeople'

import Post from '../Components/Post/Post'
import { Postshare } from '../Components/Postside/Postshare/Postshare'

import ProfileCard from '../Components/profileCard/ProfileCard'
import Activefriend from '../Components/Rightside/Activefriend/Activefriend'
import YourInfo from '../Components/YourInfo/YourInfo'

const Myprofile = () => {
    return (

        <div className='home'>

            <div className="profile">
                {/* logo search  */}
            
                {/* your info  */}
                <YourInfo />
                <Folowingpeople/>


            </div>
            <div className="postSlide">
                {/* post share  */}
                <Postshare />
                <div style={{ marginTop: '20px' }}>

                    <ProfileCard height={"250px"} />
                </div>

                <Post />

            


            </div>
            <div className="rightSlide">

                {/* active friend  */}

                <Activefriend />

            </div>




        </div>
    )
}

export default Myprofile