import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginUser.css'; // Import your CSS file

const LoginUser = ({ onLogin }) => {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'patient', // Default role
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
    
    // Mock login response and role setting
    const { role } = formData;
    onLogin(role); // Call the onLogin prop to set the role

    // Navigate to UploadPrescription page
    navigate('/uploadprescription');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="patient">Patient</option>
            <option value="pharmacist">Pharmacist</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="register-option">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default LoginUser;