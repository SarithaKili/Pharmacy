import React, { useState } from 'react';
import './RegisterUser.css'; // Import your CSS file

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contactNo: '',
    dob: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send formData to your backend API
    console.log(formData);
  };

  return (
    <div className="registration-container">
      <h2>User Registration</h2>
      <p>Please fill in the details below to create your account:</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
          />
        </div>
        <div>
          <label>Contact No:</label>
          <input
            type="tel"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p className="login-option">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterUser;