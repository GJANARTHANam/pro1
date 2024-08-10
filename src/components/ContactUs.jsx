import React from 'react';
import Navbar from './Navbar';
import './ContactUs.css';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0596125148164!2d76.95583241526092!3d11.016844592141697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859cb2d1333ed%3A0xc77e7797e81a5d29!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1633973968974!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <i className="fa fa-map-marker"></i>
          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="info-item">
          <i className="fa fa-phone"></i>
          <p>+ 1235 2355 98</p>
        </div>
        <div className="info-item">
          <i className="fa fa-envelope"></i>
          <p>info@yoursite.com</p>
        </div>
        <div className="info-item">
          <i className="fa fa-globe"></i>
          <p>yoursite.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;