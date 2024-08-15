import React, { useState, useEffect } from 'react';
import './Adminuser.css';
import Dashboard from './Dashboard';

function Adminuser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/admin/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`/admin/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
        alert('User deleted successfully.');
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Dashboard />
      <div className="admin-page">
        <h2>Admin - Manage Users</h2>
        <div className="users-list">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <h3 className="user-name">{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
              <p><strong>Address:</strong> {user.address}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <button onClick={() => handleDeleteUser(user.id)}>Delete User</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adminuser;
