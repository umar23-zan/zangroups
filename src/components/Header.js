import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/zanSphereLogo.svg';
import './header.css'

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/career', label: 'Career' }
  ];

  return (
    <header 
      className={`header-section ${scrolled ? 'scrolled' : ''} ${visible ? 'visible' : 'hidden'}`}
    >
      <div className="header-logo">
        <img 
          src={logo} 
          alt="logo" 
          className="logo hover-scale"
          onClick={() => {
            navigate('/');
            closeMenu();
          }}
        />
      </div>
      
      <nav className="header-nav-section">
        <div className={`header-navlinks ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={closeMenu}
              style={{ 
                animationDelay: menuOpen ? `${index * 100}ms` : '0ms'
              }}
            >
              {item.label}
              <span className="link-underline"></span>
            </Link>
          ))}
        </div>
        
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>
      
      {menuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;