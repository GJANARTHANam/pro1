import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      <nav className="navbar1">
        <div className="logo">BEACON</div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/category">Services</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div className="about-content">
        <h1>About Us</h1>
        <div className="about-grid">
          <div className="about-item">
            <h2>Our Mission</h2>
            <p>At BEACON, our mission is to provide top-notch services to help our clients achieve their goals. We believe in innovation, integrity, and excellence.</p>
          </div>
          <div className="about-item">
            <h2>Our Vision</h2>
            <p>Our vision is to be a global leader in the industry, renowned for our commitment to quality and customer satisfaction.</p>
          </div>
          <div className="about-item">
            <h2>Our Values</h2>
            <p>We uphold the values of trust, transparency, and teamwork in all our endeavors. Our clients' success is our success.</p>
          </div>
          <div className="about-item">
            <h2>Our Team</h2>
            <p>We have a dedicated team of professionals who are passionate about what they do. Together, we strive to deliver the best results for our clients.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
