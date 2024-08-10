
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar2 = () => {
  return (
   
<nav className="navbar">
<div className="logo">BEACON</div>
<ul className="nav-links">
  <li><Link to="/home">Home</Link></li>
  <li><Link to="/category">Services</Link></li>
  <li><Link to="/aboutus">About Us</Link></li>
  <li><Link to="/profile">Profile</Link></li>
</ul>
</nav>
  );
};

export default Navbar2;
