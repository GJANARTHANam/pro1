import React, { useState } from 'react';
import './OrganizationRequest.css';

function OrganizationRequest({ onClose }) {
  const [formData, setFormData] = useState({
    orgName: '',
    description: '',
    taskDescription: '',
    address: '',
    voiceNote: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      voiceNote: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request submitted successfully!');
    onClose();
  };

  return (
    <div className="organization-request-overlay">
      <div className="organization-request">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Volunteer Request</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="orgName"
            placeholder="Organization Name"
            value={formData.orgName}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Organization Description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="taskDescription"
            placeholder="Task Description"
            value={formData.taskDescription}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="count"
            placeholder="number of volunteers"
            value={formData.count}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <input
            type="file"
            name="voiceNote"
            accept="audio/*"
            onChange={handleFileChange}
          />
          {formData.voiceNote && (
            <audio controls>
              <source src={formData.voiceNote} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default OrganizationRequest;
