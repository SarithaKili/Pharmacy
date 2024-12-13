import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Request.css';

const PatientRequests = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Load requests from local storage
    const storedRequests = JSON.parse(localStorage.getItem('requests')) || [];
    setRequests(storedRequests);
  }, []);

  const handleRequestClick = (request) => {
    navigate(`/quotation/${request.id}`); // Navigate to the Quotation page with the request ID
  };

  return (
    <div className="requests-container">
      <h2>Patient Requests</h2>
      {requests.length === 0 ? (
        <p>No requests available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Patient Email</th>
              <th>Image Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}> {/* Use request.id as the key */}
                <td>{request.patientEmail}</td>
                <td>{request.imageName}</td>
                <td>{new Date(request.date).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleRequestClick(request)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientRequests;