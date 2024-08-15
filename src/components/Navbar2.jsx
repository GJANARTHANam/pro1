// src/components/Navbar2.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar2.css';

const Navbar2 = () => {
  const location = useLocation();

  const getLinkClass = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="logo">BEACON</div>
      <ul className="nav-links">
        <li><Link to="/home" className={getLinkClass('/home')}>Home</Link></li>
        <li><Link to="/category" className={getLinkClass('/category')}>Services</Link></li>
        <li><Link to="/aboutus" className={getLinkClass('/aboutus')}>About Us</Link></li>
        <li><Link to="/ContactUs1" className={getLinkClass('/ContactUs1')}>Contact Us</Link></li>
        <li><Link to="/profile" className={getLinkClass('/profile')}>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar2;
