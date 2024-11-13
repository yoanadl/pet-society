import React, { useState } from 'react';
import './home.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Login from '../components/Login.js';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = (email, password, userRole) => {
    setIsLoggedIn(true); // Set user as logged in
    setRole(userRole); // Set user role based on login credentials
    setIsModalOpen(false); // Close login modal
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole('');
  };

  const openLoginModal = () => {
    setIsModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`app-container ${isLoggedIn ? 'Logout' : 'Login'}`}>
      <div className="content">
        <Header 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          openLoginModal={openLoginModal}
          role={role}
        />
        <main>
          <h1>Pet Society</h1>

          {isLoggedIn ? (
            role === 'admin' ? (
              <p>Welcome, Admin! You have full access.</p>
            ) : (
              <p>Welcome, User! You have limited access.</p>
            )
          ) : (
            <p>Please log in to access the content.</p>
          )}
        </main>
        <Footer />
      </div>

      {/* Conditionally render the login modal */}
      {isModalOpen && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="close-btn" onClick={closeLoginModal}>X</button>
            <Login onLogin={handleLogin} onCloseModal={closeLoginModal}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
