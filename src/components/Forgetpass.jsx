// src/components/ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgetpass.css'; // Create this CSS file for styling
import Navbar from './Navbar'; // Reuse Navbar if needed

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const { message } = await response.json();
      alert(message);
      navigate('/login');
    } catch (error) {
      console.error('Error during password reset request:', error);
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="forgot-password-wrap">
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <h1>Forgot Password</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
