import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import RegisterUser from './pages/RegisterUser/RegisterUser.jsx';
import LoginUser from './pages/LoginUser/LoginUser.jsx';
import UploadPrescription from './pages/UploadPrescription/UploadPrescription.jsx';
import CreateQuotation from './pages/CreateQuotation/CreateQuotation.jsx';

function App() {
    const [userRole, setUserRole] = useState(null); // State to store the user's role

    const handleLogin = (role) => {
        setUserRole(role); // Set the user's role upon login
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<RegisterUser />} />
                    <Route 
                        path='/login' 
                        element={<LoginUser onLogin={handleLogin} />} 
                    />
                    <Route path='/uploadprescription' element={
                        (() => {
                            if (userRole === 'patient') {
                                return <UploadPrescription />;
                            } else {
                                return <CreateQuotation />;
                            }
                        })()
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;