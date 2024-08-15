import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1234567890",
    address: "123 Main St, Anytown, USA",
    profilePicture: null
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userData);

  const [sessions, setSessions] = useState({
    ongoing: '',
    completed: ''
  });

  const navi = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          profilePicture: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(formData);
    setEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navi("/Login");
  };

  const handleSessionChange = (e) => {
    const { name, value } = e.target;
    setSessions({
      ...sessions,
      [name]: value
    });
  };

  return (
    <div className="profile-container">
      <h1>  </h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-picture">
          <img
            src={formData.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="profile-picture-img"
          />
          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
          )}
        </div>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile No.</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            readOnly={!editMode}
          />
        </div>
        <div className="form-buttons">
          {editMode ? (
            <>
              <button type="submit" className="save-button">Save</button>
              <button type="button" className="cancel-button" onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <button type="button" className="edit-button" onClick={() => setEditMode(true)}>Edit</button>
          )}
          <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </form>
      
      <div className="sessions-section">
        <h2>Sessions</h2>
        <form className="sessions-form">
          <div className="input-group">
            <label htmlFor="ongoing">Ongoing Session</label>
            <input
              type="text"
              id="ongoing"
              name="ongoing"
              value={sessions.ongoing}
              onChange={handleSessionChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="completed">Completed Session</label>
            <input
              type="text"
              id="completed"
              name="completed"
              value={sessions.completed}
              onChange={handleSessionChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;