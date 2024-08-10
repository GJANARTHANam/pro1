// src/components/TaskDetail.js
import React from 'react';
import './TaskDetail.css';

function TaskDetail({ task, onClose, onAccept }) {
  const handleAcceptTask = () => {
    alert('Task successfully accepted!');
    onAccept();
  };

  return (
    <div className="task-detail-overlay">
      <div className="task-detail">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{task.heading}</h2>
        <p>{task.description}</p>
        <p><strong>Address:</strong> {task.address}</p>
        <audio controls>
          <source src={URL.createObjectURL(new Blob([task.voiceNote], { type: 'audio/mpeg' }))} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        {task.video ? (
          <video controls width="100%">
            <source src={URL.createObjectURL(new Blob([task.video]))} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        ) : (
          <p>Video not available</p>
        )}
        <p><strong>Contact:</strong> {task.contact}</p>
        <p><strong>Points:</strong> {task.points}</p>
        <div className="task-buttons">
          <button className="back-btn" onClick={onClose}>
            Back
          </button>
          <button className="accept-btn" onClick={handleAcceptTask}>
            Accept Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
