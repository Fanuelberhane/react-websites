import React, { useState } from 'react';
import LoginForm from './components/LoginForm.jsx';
import UserDashboard from './components/UserDashboard.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import './App.css'

const App = () =>  {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setIsAdmin(true);
      setShowError(false);
    } else if ( username === 'username' && password === 'username') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);
    } else if ( username === 'fani' && password === '1234') {
      setIsLoggedIn(true);
      setIsAdmin(false);
      setShowError(false);

    } else {
      setShowError(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  }

  return (
    <>
      
  
    <div>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {showError && <ErrorMessage />}
      {isLoggedIn && !isAdmin && <UserDashboard onLogout={handleLogout} />}
      {isLoggedIn && isAdmin && <AdminDashboard onLogout={handleLogout} />}
    </div>
      
    </>
  );
};

export default App