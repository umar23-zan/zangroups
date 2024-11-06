import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header-section'>
      <div className='header-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='header-nav-section'>
        <div className={`header-navlinks ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/career" onClick={toggleMenu}>Career</Link>
        </div>
        <div className='hamburger' onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Header;
