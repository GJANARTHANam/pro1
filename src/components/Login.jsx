import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Navbar from './Navbar';

function Login({ setAuth }) {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    for (const key in formData) {
      if (formData[key] === '') {
        alert(`Please fill in the ${key === 'pass' ? 'password' : key} field.`);
        return;
      }
    }

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.pass,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const { message, userId } = await response.json(); // Expecting JSON with message and userId
      alert(message);

      setAuth(true, userId);
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-wrap">
        <form className="form" onSubmit={handleLogin}>
          <div className="form-wrap">
            <h1>
              <span>Login</span>
            </h1>
            <h6>Hi There...!</h6>
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
            <br/>
            <Link to="/">
            <button type="button" className="forpass" onClick={() => navigate('/forgot-password')}>
              Forget password?
            </button>
            </Link>
            <br />
            <br/>
            <center>
              <button className="form-btn" type="submit">
                LOGIN
              </button>
              <br />
              <br />
              new user? <Link className="Signup" to="/signup"> Create account </Link>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
