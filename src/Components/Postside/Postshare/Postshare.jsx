import './Postshare.css'
import {BiPhotoAlbum} from 'react-icons/bi'
import  img8  from '../../image/imgicon1.png'
import {MdVideoLibrary} from 'react-icons/md'
import {VscLocation} from 'react-icons/vsc'
import status1 from '../../image/status1.png'
import status2 from '../../image/status2.png'
import status3 from '../../image/status3.png'
import logo6 from '../../image/logo6.jpg'
import logo9 from '../../image/logo9.jpg'
import logo10 from '../../image/logo10.jpg'

// import { Link } from 'react-router-dom'
import { useState } from 'react'
import {ImCross} from 'react-icons/im'
import { useRef } from 'react'
export const Postshare = () => {
  const [image,setImages] =useState(null);
  const imageRef=useRef();
  const onImageChang=(event)=>{
    if(event.target.files && event.target.files[0]){
      let img=event.target.files[0];
      setImages({
        image:URL.createObjectURL(img),
      })
    }
  }
  return (
    <div className='Postshare'>
        <div className='main-logo'>
          <img src={img8}/>
          <div className='status-people'>
          <img src={status1}/>
          <img src={status2}/>
          <img src={status3}/>
          <img src={logo10}/>
          <img src={logo6}/>
          <img src={logo9}/>
          <img src={status1}/>
          
          </div>
        </div>
        <div className='post-btn'>
           <h3 onClick={()=>imageRef.current.click()}><BiPhotoAlbum/>Photo</h3>
            <h3><MdVideoLibrary/>Video</h3>
            <h3><VscLocation/>Location</h3>
            <button>Share</button>
            <div style={{display:"none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChang}/>
            </div>  
        </div>


{
  image &&(
    <div className='previewImage'>
      <ImCross onClick={()=>setImages(null)}/>
      <img src={image.image} alt=""/>
    </div>

  )
}



    </div>
  )
}
