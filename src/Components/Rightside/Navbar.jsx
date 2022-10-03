import './Navbar.css'
import {ImHome} from 'react-icons/im'
import {IoMdSettings} from 'react-icons/io'
import {FaGraduationCap} from 'react-icons/fa'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineLogin} from 'react-icons/ai'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
     <div>
        <div className='navbar-icon'>
         
         <h2><ImHome/></h2>
         <h2><IoMdSettings/></h2>
          <h2><FaGraduationCap/></h2>
          <h2><AiOutlineMessage/></h2>
          <Link to="/signup">
          <AiOutlineLogin/>
          </Link>



        </div>
    </div>
  )
}

export default Navbar