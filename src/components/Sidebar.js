import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { AuthContext } from '../services/AuthContext.js'; 
import Login from './Login.js'; // Import the Login component
import CloseIcon from '../assets/close.svg';
import OpenIcon from '../assets/open.svg';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal
  const { isLoggedIn, logout } = useContext(AuthContext); 

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true); // Open the login modal
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false); // Close the login modal
  };

  const handleAuthAction = () => {
    if (isLoggedIn) {
      logout();
    } else {
      handleLoginClick(); // Show the login modal instead of using prompt
    }
  };

  return (
    <div>
      {!isOpen && (
        <button id="sidebar" className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <img src={OpenIcon} width="24" height="24" alt="Open Menu" />
        </button>
      )}

      {isOpen && (
        <div className="sidebar">
          <button className="sidebar-close-btn" onClick={toggleSidebar}>
            <img src={CloseIcon} width="24" height="24" alt="Close Menu" />
          </button>

          <h2 className="sidebar-title">Menu</h2>
          <ul className="sidebar-links">
            <li><a href="#home" className="sidebar-link">Home</a></li>
            <li><a href="#about" className="sidebar-link">About</a></li>
            <li><a href="#services" className="sidebar-link">Services</a></li>
            <li><a href="#contact" className="sidebar-link">Contact</a></li>
          </ul>

          <button
            className={`sidebar-login-btn ${isLoggedIn ? 'logout' : 'login'}`}
            onClick={handleAuthAction} // Trigger login modal or logout
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      )}

      {isLoginModalOpen && <Login onCloseModal={closeLoginModal} />}
    </div>
  );
}

export default Sidebar;
