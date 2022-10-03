import './Folowingpeople.css'
import img5 from '../image/profileimg.png'
import img6 from '../image/profileimg1.png'

const Folowingpeople = () => {
  return (
    
      <>
    
        <div className='flowing-people'>
            <div className='flowing-detali'>
                <h2>Who is follow you</h2>
                <div className='flowing-icon'>
                    <img src={img6}/>
                    <h3>Name<br/><i>@Sub name</i></h3>
                    <h4>follow</h4>
                </div>
                <div className='flowing-icon'>
                    <img src={img5}/>
                    <h3>Name<br/><i>@Sub name</i></h3>
                    <h4>follow</h4>
                </div>
                <h5>See more</h5>
                
            </div>
        </div>
        </>
      )
    }
    


export default Folowingpeople