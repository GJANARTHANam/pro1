import React from 'react';
import './Navbar.css';
// import { FaWallet, FaUsers, FaGlobe, FaShoppingCart, FaBell, FaServer, FaCreditCard, FaBox, FaFileInvoice, FaTable, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
 

  return (

      
     <nav className="navbar">
      <div className="logo">
        BEACON
        <div className="subtitle">Admin</div>
      </div>
      <div className="nav-links">
       
        <Link to="/admintask">Task</Link>
        <Link to="/adminuser">Users</Link>
        <Link to="/adminpage">Feedbacks</Link>
        <Link to="/review">Review</Link>
      </div>
     
      
    </nav>
  );
};

export default Dashboard;