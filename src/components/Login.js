import React, { useState, useEffect, useContext } from 'react';
import './Login.css';
import { AuthContext } from '../services/AuthContext.js';

function Login({ onCloseModal }) {
  const { login } = useContext(AuthContext); // Use the login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Auto-open modal when component mounts
    const modal = document.querySelector('.login-container');
    if (modal) {
      modal.style.display = 'block';
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    const { success, role } = login(email, password);

    if (success) {
      setSuccessMessage('You have successfully logged in!');
      setError('');
      setTimeout(() => {
        onCloseModal(); // Close modal after success message
      }, 1000); // 1-second delay for the user to see the success message
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid credentials');
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-modal">
      <div className="login-container">
        <button className="close-btn" onClick={onCloseModal}>X</button>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="button">
            <button type="submit" className="login-button">Login</button>
          </div>    
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
      </div>
    </div>
  );
}

export default Login;
