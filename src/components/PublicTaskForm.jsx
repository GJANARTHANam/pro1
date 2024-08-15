import React, { useState } from 'react';
import Map from './Map';
import './PublicTaskForm.css';

const PublicTaskForm = ({ onTaskSubmit, onClose }) => {
  const [task, setTask] = useState({
    heading: '',
    description: '',
    video: null,
    voiceNote: null,
    address: '',
    location: { lat: 37.7749, lng: -122.4194 },
  });

  const [uploading, setUploading] = useState({ video: false, voiceNote: false });
  const [uploadProgress, setUploadProgress] = useState({ video: 0, voiceNote: 0 });

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

  const uploadFile = (file, type) => {
    return new Promise((resolve) => {
      const fakeUploadDuration = 3000; // simulate a 3 second upload
      setUploading((prev) => ({ ...prev, [type]: true }));

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          const newProgress = Math.min(prev[type] + 10, 100);
          if (newProgress === 100) {
            clearInterval(interval);
            setUploading((prev) => ({ ...prev, [type]: false }));
            resolve();
          }
          return { ...prev, [type]: newProgress };
        });
      }, fakeUploadDuration / 10);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle file uploads (fake upload for demonstration)
    if (task.video) await uploadFile(task.video, 'video');
    if (task.voiceNote) await uploadFile(task.voiceNote, 'voiceNote');

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
        onClose(); // Close the modal after successful submission
      } else {
        console.error('Failed to submit task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
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
            {uploading.video && (
              <div className="upload-progress">
                <div className="progress-bar" style={{ width: `${uploadProgress.video}%` }}></div>
              </div>
            )}
          </label>
          <label>
            Add Voice Note:
            <input
              type="file"
              name="voiceNote"
              onChange={handleChange}
            />
            {uploading.voiceNote && (
              <div className="upload-progress">
                <div className="progress-bar" style={{ width: `${uploadProgress.voiceNote}%` }}></div>
              </div>
            )}
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
          <button type="submit" disabled={uploading.video || uploading.voiceNote}>
            {uploading.video || uploading.voiceNote ? 'Uploading...' : 'Submit Task'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublicTaskForm;
