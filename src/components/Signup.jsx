import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    cpass: '',
    age: '',
    phno: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Check if passwords match
    if (formData.pass !== formData.cpass) {
      alert('Passwords do not match.');
      return;
    }

    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === '') {
        alert(`Please fill in the ${key === 'pass' ? 'password' : key} field.`);
        return;
      }
    }

    // Send a POST request to the backend
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.pass,
          age: formData.age,
          phoneNumber: formData.phno,
        }),
      });

      if (response.ok) {
        alert('Signup successful!');
        // Optionally, redirect the user to the login page or another page
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <div className="signup-image">
          <img src="hand.png" alt="Signup" />
        </div>
        <div className="form-wrap">
          <h1>SIGN <span>UP</span></h1>
          <h6>Welcome to BEACON</h6>
          <form className="form" onSubmit={handleSignup}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
              value={formData.pass}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="password"
              name="cpass"
              id="cpass"
              placeholder="Confirm Password"
              value={formData.cpass}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="number"
              name="age"
              id="age"
              placeholder="age"
              value={formData.age}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="number"
              name="phno"
              id="phno"
              placeholder="Phone Number"
              value={formData.phno}
              onChange={handleInputChange}
            />
            <center>
              <button type="submit" className="form-btn">SIGN UP</button>
              <br></br>
              <br></br>
              Already a user? <Link className="login" to="/login">LOGIN</Link>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
