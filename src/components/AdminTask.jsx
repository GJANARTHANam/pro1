import React, { useState, useEffect } from 'react';
import './Admin.css';
import Dashboard from './Dashboard';

function AdminTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/tasks');
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

    fetchTasks();
  }, []);

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await fetch(`/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks(tasks.filter(task => task.id !== taskId));
        alert('Task deleted successfully.');
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Dashboard />
      <div className="admin-page">
        <h2>Admin - Manage Tasks</h2>
        <div className="tasks-list">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h3 className="task-title">{task.heading}</h3>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Address:</strong> {task.address}</p>
              <button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminTask;
