import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Adjust the path if necessary

const Login = ({ setRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('Patient'); // Default role
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic here (e.g., API call)
    console.log('Role:', selectedRole);
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulate successful login and navigate to the appropriate page
    if (selectedRole === 'Patient') {
      setRole('Patient'); // Set the role in App state
      navigate('/upload'); // Redirect to the UploadImage page
    } else if (selectedRole === 'Pharmacist') {
      setRole('Pharmacist'); // Set the role in App state
      navigate('/requests'); // Redirect to the Patient Requests page
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            required
          >
            <option value="Patient">Patient</option>
            <option value="Pharmacist">Pharmacist</option>
          </select>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;