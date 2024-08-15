import React, { useEffect, useState } from 'react';
// import './VolunteerRequestDetail.css';

function VolunteerRequestDetail({ requestId, onClose }) {
  const [request, setRequest] = useState(null);

  useEffect(() => {
    // Fetch the volunteer request details from the backend
    const fetchRequestDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/volunteer-requests/${requestId}`);
        if (response.ok) {
          const data = await response.json();
          setRequest(data);
        } else {
          console.error('Failed to fetch request details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRequestDetails();
  }, [requestId]);

  if (!request) {
    return <div>Loading...</div>;
  }

  return (
    <div className="volunteer-request-detail-overlay">
      <div className="volunteer-request-detail">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{request.organizationName}</h2>
        <p><strong>Purpose:</strong> {request.purpose}</p>
        <p><strong>Address:</strong> {request.address}</p>
        <p><strong>Age Category:</strong> {request.ageCategory}</p>
        <p><strong>Gender:</strong> {request.gender}</p>
        <p><strong>Number of Volunteers:</strong> {request.numberOfVolunteers}</p>
        <p><strong>Contact Email:</strong> {request.contactEmail}</p>
        <p><strong>Contact Phone:</strong> {request.contactPhone}</p>
        <div className="request-buttons">
          <button className="back-btn" onClick={onClose}>
            Back
          </button>
          <button className="accept-btn" onClick={() => alert('Volunteer request accepted!')}>
            Accept Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default VolunteerRequestDetail;
