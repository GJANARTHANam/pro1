// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const location = useLocation();
  
  const getLinkClass = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="logo">
        BEACON
        <div className="subtitle">SOCIALIZE</div>
      </div>
      <div className="nav-links">
        <Link to="/" className={getLinkClass('/')}>Home</Link>
        <Link to="/login" className={getLinkClass('/login')}>Login</Link>
        <Link to="/signup" className={getLinkClass('/signup')}>Signup</Link>
        <Link to="/chatapp" className={getLinkClass('/chatapp')}>Forum</Link>
        <Link to="/contactus" className={getLinkClass('/contactus')}>Contact</Link>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
