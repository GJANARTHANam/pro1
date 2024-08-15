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
          <li><Link to="/ContactUs1">ContacUs</Link></li>
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
        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to get in touch with us, feel free to <Link to="/contactus1">contact us</Link>.</p>
        </div>
        <div className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"BEACON's services have transformed our business. Their dedication and expertise are unmatched."</p>
              <span>- Jane Doe, CEO of ExampleCorp</span>
            </div>
            <div className="testimonial">
              <p>"Exceptional quality and support. We couldn't be happier with the results we've achieved."</p>
              <span>- John Smith, Founder of Startup Inc.</span>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join our list of satisfied clients today. <Link to="/contactus">Get in touch</Link> to learn more about how we can assist you.</p>
          <Link to="/contactus1" className="cta-button">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
