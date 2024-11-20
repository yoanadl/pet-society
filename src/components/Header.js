import React from 'react';
import './Header.css';
import pawIcon from '../assets/paw.svg';

function Header({ isLoggedIn, onLogout, openLoginModal }) {
  return (
    <header className="header">
      <div id="logo">
        <h1 className="logo-title">Pet Society</h1>
        <img src={pawIcon} width="24px" height="24px" alt="Icon" />
      </div>

      <nav className="header-nav">
        <a href="#home" className="header-link">Home</a>
        <a href="#about" className="header-link">About</a>
        <a href="#contact" className="header-link">Contact Us</a>
        {!isLoggedIn ? (
          <a href="#login" className="header-link" onClick={openLoginModal}>Login</a>
        ) : (
          <div className='header-nav'> 
            <a href="#myform" className="header-link">My Form</a>
            <a href="#logout" className="header-link" onClick={onLogout}>Logout</a>
          </div>
         
        )}
      </nav>
    </header>
  );
}

export default Header;
