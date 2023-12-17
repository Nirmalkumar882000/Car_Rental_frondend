import React from 'react'
import "../styles/navbar.css"
import logo from "../images/logo.png"
import hamburger from "../images/hamburger_menu.png" 

function NavBar() {
  return (
   <div className='navbar-container'>
    <a href='#'>
        <img src={logo} alt="site logo"/>
    </a>
    <div className='links'>
        <a href='#'>HOME</a>
        <a href='#'>ABOUT</a>
        <a href='#'>OUR CARS</a>
        <a href='#'>OPTIONS</a>
        <a href='#'>OUR TEAM</a>
        <a href='#'>CONTACT</a>
    </div>
    <button className='btn login'>Log in </button>
    <button className='btn register'>Register</button>
    <div className='mobile'>
        <img src={hamburger} alt='mobile menu'/>
    </div>
    <div className='btns'></div>
   </div>
  )

}

export default NavBar
