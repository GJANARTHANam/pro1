import React from 'react';
// import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const AdminMain = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <nav className="nav-menu">
        <NavLink exact to="/admin/dashboard" activeClassName="active-link">
          Dashboard
        </NavLink>
        <NavLink to="/admin/users" activeClassName="active-link">
          Users
        </NavLink>
        <NavLink to="/admin/tasks" activeClassName="active-link">
          Tasks
        </NavLink>
        <NavLink to="/admin/requests" activeClassName="active-link">
          Volunteer Requests
        </NavLink>
        <NavLink to="/admin/settings" activeClassName="active-link">
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminMain;