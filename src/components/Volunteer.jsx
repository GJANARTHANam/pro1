import React, { useState, useEffect } from 'react';
import './Volunteer.css';
import TaskDetail from './TaskDetail';

function Volunteer({ onTaskAccept }) {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [volunteerRequests, setVolunteerRequests] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/tasks'); // Ensure this endpoint is correct and implemented
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          console.error('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchVolunteerRequests = async () => {
      try {
        const response = await fetch('/api/volunteer-requests'); // Updated endpoint
        if (response.ok) {
          const data = await response.json();
          setVolunteerRequests(data);
        } else {
          console.error('Failed to fetch volunteer requests');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTasks();
    fetchVolunteerRequests();
  }, []);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleClosePopup = () => {
    setSelectedTask(null);
  };

  const handleAcceptTask = (task) => {
    onTaskAccept(task);
    handleClosePopup();
  };

  return (
    <div className="volunteer-page">
      <h2 className="tasks-title">Available Tasks and Volunteer Requests</h2>
      <div className="tasks-list">
        {tasks.map((task) => (
          <div className="task-card" key={`task-${task.id}`} onClick={() => handleTaskClick(task)}>
            <h3 className="task-title">{task.heading}</h3>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Address:</strong> {task.address}</p>
            {task.voiceNote && (
              <audio controls>
                <source src={URL.createObjectURL(new Blob([task.voiceNote], { type: 'audio/mpeg' }))} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
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
          </div>
        ))}
        {volunteerRequests.map((request) => (
          <div className="task-card" key={`request-${request.id}`} onClick={() => handleTaskClick(request)}>
            <h3 className="task-title">{request.organizationName}</h3>
            <p><strong>Purpose:</strong> {request.purpose}</p>
            <p><strong>Address:</strong> {request.address}</p>
            <p><strong>Age Category:</strong> {request.ageCategory}</p>
            <p><strong>Gender:</strong> {request.gender}</p>
            <p><strong>Number of Volunteers:</strong> {request.numberOfVolunteers}</p>
            <p><strong>Contact Email:</strong> {request.contactEmail}</p>
            <p><strong>Contact Phone:</strong> {request.contactPhone}</p>
          </div>
        ))}
      </div>

      {selectedTask && (
        <TaskDetail task={selectedTask} onClose={handleClosePopup} onAccept={() => handleAcceptTask(selectedTask)} />
      )}
    </div>
  );
}

export default Volunteer;
