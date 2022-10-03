import React from 'react'
import './InstaNav.css'
import Navbar from '../Rightside/Navbar'
import NavbarSearch from './NavbarSearch/NavbarSearch'
import NavbarLogo from './NavbarLogo/NavbarLogo'

const InstaNav = () => {
  return (
    
    <div className='insta-nav-main'>
      <div className='navbar-logo'>
      <NavbarLogo/>
      </div>
      <div className='navbar-search'> 
      <NavbarSearch/> 
      </div> 
      <div className='navbar-right'>
        <Navbar/>
        </div> 
      
      
    </div>
    
  )
}

export default InstaNav