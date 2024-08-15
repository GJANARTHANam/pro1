import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';
const AdminPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the contacts!', error);
      });
  }, []);

  const handleStatusChange = (id, newStatus) => {
    axios.put(`http://localhost:3000/contacts/${id}`, { status: newStatus })  // Fixed the backticks
      .then(response => {
        setContacts(contacts.map(contact => 
          contact.id === id ? { ...contact, status: newStatus } : contact
        ));
      })
      .catch(error => {
        console.error('There was an error updating the status!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/contacts/${id}`)  // Fixed the backticks
      .then(() => {
        setContacts(contacts.filter(contact => contact.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the contact!', error);
      });
  };

  return (
    <div className="admin-page">
      <h1>Contact Us Submissions</h1>
      <table className="contacts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Description</th>
            <th>Status</th>
            <th>Update Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.firstname}</td>
              <td>{contact.lastname}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.description}</td>
              <td>{contact.status}</td>
              <td>
                <select
                  value={contact.status}
                  onChange={(e) => handleStatusChange(contact.id, e.target.value)}
                >
                  <option value="new">New</option>
                  <option value="pending">Pending</option>
                  <option value="solved">Solved</option>
                </select>
              </td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
