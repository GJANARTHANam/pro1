import React, { useState } from "react";
import './UserProfile.css';
import Navbar2 from "./Navbar2";
import Profile from "./Profile";

const UserProfile = ({ userId, acceptedTasks }) => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1234567890",
    address: "123 Main St, Anytown, USA",
    profilePicture: null
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [sessions, setSessions] = useState({ ongoing: '', completed: '' });
  const [taskUpdates, setTaskUpdates] = useState({}); // State to handle updates for each task

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
    // Replace useNavigate hook with window.location for redirect
    window.location.href = "/Login";
  };

  const handleSessionChange = (e) => {
    const { name, value } = e.target;
    setSessions({
      ...sessions,
      [name]: value
    });
  };

  const handleProceed = (taskId) => {
    setTaskUpdates((prevUpdates) => ({
      ...prevUpdates,
      [taskId]: { ...prevUpdates[taskId], proceed: true }
    }));
  };

  const handleGiveUp = (taskId) => {
    // Remove task from accepted tasks
    setTaskUpdates((prevUpdates) => {
      const { [taskId]: _, ...remainingUpdates } = prevUpdates;
      return remainingUpdates;
    });
  };

  const handleTaskUpdateChange = (taskId, e) => {
    const { name, value, files } = e.target;
    setTaskUpdates((prevUpdates) => ({
      ...prevUpdates,
      [taskId]: { ...prevUpdates[taskId], [name]: files ? files[0] : value }
    }));
  };

  const handleTaskUpdateSubmit = (taskId, e) => {
    e.preventDefault();
    // Handle submission logic (e.g., upload video and caption)
    alert('Task updated successfully!');
    setTaskUpdates((prevUpdates) => ({
      ...prevUpdates,
      [taskId]: { ...prevUpdates[taskId], proceed: false }
    }));
  };

  return (
    <div>
    <Navbar2/>
    <div className="profile-container">
      <h1>Profile</h1>
     <Profile/>
      
      {/* <div className="sessions-section">
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
          </div> */}
        {/* </form>
      </div> */}

      <div className="tasks-section">
        <h2>Accepted Tasks</h2>
        {acceptedTasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Address:</strong> {task.address}</p>
            <audio controls>
              <source src={task.voiceNote} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            {task.video ? (
              <video width="300" controls>
                <source src={task.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>Video not available</p>
            )}
            <p><strong>Contact:</strong> {task.contact}</p>
            <p><strong>Points:</strong> {task.points}</p>
            <div className="task-buttons">
              <button onClick={() => handleProceed(task.id)}>Proceed</button>
              <button onClick={() => handleGiveUp(task.id)}>Give Up</button>
            </div>
            {taskUpdates[task.id]?.proceed && (
              <form onSubmit={(e) => handleTaskUpdateSubmit(task.id, e)}>
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={(e) => handleTaskUpdateChange(task.id, e)}
                />
                <textarea
                  name="caption"
                  placeholder="Enter caption"
                  value={taskUpdates[task.id]?.caption || ''}
                  onChange={(e) => handleTaskUpdateChange(task.id, e)}
                /> 
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default UserProfile;
