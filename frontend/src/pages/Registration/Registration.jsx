import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Optional: Add styles here
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    userRole: 'Patient' || 'Pharmacist',
    dateOfBirth: '',
    address: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User registered:', formData);
    // Here, you can add logic to send the data to your backend

    // Reset form for another entry
    setFormData({
      name: '',
      userRole: 'Patient',
      dateOfBirth: '',
      address: '',
      email: '',
    });
  };

  return (
    <div className="registration-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </div>
        <div>
          <label>User Role:</label>
          <select
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
            required
          >
            <option value="Patient">Patient</option>
            <option value="Pharmacist">Pharmacist</option>
          </select>
        </div>
        <div>
          <label>Date Of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Your address"
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
          />
        </div>
        <button type="submit">Add +</button>
      </form>
      <button onClick={() => navigate('/login')}>Login to Your Account</button>
    </div>
  );
};

export default Registration;