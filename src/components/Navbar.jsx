// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        BEACON
        <div className="subtitle">SOCIALIZE</div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/chatapp">Forum</Link>
        <Link to="/contactus">Contact</Link>
      </div>
      {/* <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">&#x1F50D;</button>
      </div> */}
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
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDribbble} />
      </a>
    </div>
    </nav>
  );
};

export default Navbar;
