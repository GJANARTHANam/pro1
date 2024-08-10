// src/components/PublicTaskForm.js
import React, { useState } from 'react';
import Map from './Map';
import './PublicTaskForm.css';

const PublicTaskForm = ({ onTaskSubmit }) => {
  const [task, setTask] = useState({
    heading: '',
    description: '',
    video: null,
    voiceNote: null,
    address: '',
    location: { lat: 37.7749, lng: -122.4194 },
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setTask({
      ...task,
      [name]: files ? files[0] : value,
    });
  };

  const handleLocationChange = (lat, lng) => {
    setTask({
      ...task,
      location: { lat, lng },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('heading', task.heading);
    formData.append('description', task.description);
    if (task.video) formData.append('video', task.video);
    if (task.voiceNote) formData.append('voiceNote', task.voiceNote);
    formData.append('address', task.address);
    formData.append('latitude', task.location.lat);
    formData.append('longitude', task.location.lng);

    try {
      const response = await fetch('/tasks', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const taskData = await response.json();
        onTaskSubmit(taskData);
      } else {
        console.error('Failed to submit task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="public-task-form">
      <h1>Create a Public Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Task Heading:
          <input
            type="text"
            name="heading"
            value={task.heading}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload Video:
          <input
            type="file"
            name="video"
            onChange={handleChange}
          />
        </label>
        <label>
          Add Voice Note:
          <input
            type="file"
            name="voiceNote"
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={task.address}
            onChange={handleChange}
            required
          />
        </label>
        <div className="map-container">
          <Map
            center={[task.location.lat, task.location.lng]}
            zoom={13}
            onLocationChange={handleLocationChange}
          />
        </div>
        <button type="submit">Submit Task</button>
      </form>
    </div>
  );
};

export default PublicTaskForm;
