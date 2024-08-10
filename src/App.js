import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import UserProfile from './components/UserProfile';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Category from './components/Category';
import Volunteer from './components/Volunteer';
import ChatApp from './components/ChatApp';
import './index.css';
import ContactUs from './components/ContactUs';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [acceptedTasks, setAcceptedTasks] = useState([]); // State to store accepted tasks

  const setAuth = (authStatus, id) => {
    setIsAuthenticated(authStatus);
    setUserId(id);
  };

  const handleTaskAccept = (task) => {
    setAcceptedTasks([...acceptedTasks, task]); // Add the accepted task to the state
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/chatapp" element={<ChatApp />} />
          <Route path="/category/volunteers" element={<Volunteer onTaskAccept={handleTaskAccept} />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/home"
            element={
              <Home />
            }
          />
          <Route
            path="/aboutus"
            element={
              <AboutUs />
            }
          />
          <Route
            path="/profile"
            element={
              <UserProfile userId={userId} acceptedTasks={acceptedTasks} />} // Pass acceptedTasks to UserProfile
          />
          <Route
            path="/category"
            element={
              <Category />
            }
          />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
