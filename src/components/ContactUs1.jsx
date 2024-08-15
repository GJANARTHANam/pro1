// src/components/ContactUs.jsx

import React, { useState } from 'react';
import './ContactUs1.css'; // Ensure your CSS file has appropriate styles
import { FaUser, FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import axios from 'axios';
import Navbar from './Navbar2';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/contact', formData)
      .then(response => {
        setSuccess('Your message has been sent successfully!');
        setError('');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('There was an error!', error);
        setError('There was an error sending your message.');
        setSuccess('');
      });
  };

  return (
    <div>
      <Navbar />
      <div className="contact-us">
        <div className="contact-form-container">
          <div className="left-side">
            <div className="branding">
              <img src="logo.png" alt="Logo" className="logo" />
              <h2>About Us</h2>
              <p>
                We are dedicated to providing support and resources for individuals and communities in need. 
                Our mission is to enhance the well-being of those we serve through compassionate service and advocacy.
              </p>
            </div>
            <div className="social-icons">
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>
          <div className="right-side">
            <h2>Get in Touch</h2>
            <p>We are here to help you. Reach out to us anytime!</p>
            <form className='contact-form' onSubmit={handleSubmit}>
              {success && <div className="success-message">{success}</div>}
              {error && <div className="error-message">{error}</div>}
              <div className="input-group">
                <label htmlFor="firstname">
                  <FaUser className="icon" />
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="input-group">
                <label htmlFor="lastname">
                  <FaUser className="icon" />
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="input-group">
                <label htmlFor="email">
                  <FaEnvelope className="icon" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="input-group">
                <label htmlFor="phone">
                  <FaPhone className="icon" />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="input-group">
                <label htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>
              </div>

              <button type="submit" className='submit-button'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
