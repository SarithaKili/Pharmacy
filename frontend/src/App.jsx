import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registration from './pages/Registration/Registration'; // Ensure correct path



import UploadImage from './pages/uploadImage/uploadImage';
import Login from './pages/login.jsx/login';
import PatientRequests from './pages/Request/PatientRequests';
import Quotation from './pages/Quotation/Quotation';


function App() {
  const [role, setRole] = useState(null); // State to store user role
  const [email, setEmail] = useState(''); // State to store user email

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login setRole={setRole} setEmail={setEmail} />} />
          <Route 
            path='/upload' 
            element={role === "Patient" ? <UploadImage email={email} /> : <Navigate to="/login" />} 
          />
          <Route 
            path='/requests' 
            element={role === "Pharmacist" ? <PatientRequests /> : <Navigate to="/login" />} 
          />
          <Route 
            path='/quotation/:id' // Route for Quotation page with ID
            element={role === "Pharmacist" ? <Quotation /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;