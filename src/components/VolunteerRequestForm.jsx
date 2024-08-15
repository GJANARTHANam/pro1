import React, { useState } from 'react';

function VolunteerRequestForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    organizationName: '',
    address: '',
    purpose: '',
    ageCategory: '',
    gender: '',
    numberOfVolunteers: 0,
    contactEmail: '',
    contactPhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/volunteer-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const savedData = await response.json();
        onSubmit(savedData);
        onClose();
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="volunteer-request-form">
      <form onSubmit={handleSubmit}>
        <label>
          Organization Name:
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Purpose:
          <input
            type="text"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age Category:
          <input
            type="text"
            name="ageCategory"
            value={formData.ageCategory}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Volunteers:
          <input
            type="number"
            name="numberOfVolunteers"
            value={formData.numberOfVolunteers}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Email:
          <input
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Phone:
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default VolunteerRequestForm;
