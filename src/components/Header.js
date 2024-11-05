import React from 'react'
import {  Link } from 'react-router-dom';
import logo from '../images/Logo.png'
import './header.css'

const Header = () => {
  return (
    <div className='header-section'>
      <div className='header-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='header-nav-section'>
        <div className='header-navlinks'>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/career">Career</Link>
        </div>
      </div>
    </div>
  )
}

export default Header