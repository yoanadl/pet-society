import React, { useState, useContext } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../services/AuthContext.js';

function Login({ onCloseModal }) {
  const { login, register } = useContext(AuthContext); // Use login and register functions from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // For registration
  const [isLogin, setIsLogin] = useState(true); // Track if it's login or register form
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    const { success, role } = login(email, password);

    if (success) {
      if (role === 'admin') {
        navigate('/admin');
      }

      setSuccessMessage('You have successfully logged in!');
      setError('');
      setTimeout(() => {
        onCloseModal(); // Close modal after success message
      }, 1000); // 1-second delay
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid credentials');
      setSuccessMessage('');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const { success, message } = register(email, password, role);

    if (success) {
      setSuccessMessage(message);
      setError('');
      setTimeout(() => {
        setIsLogin(true); // Switch back to login form
      }, 1000); // 1-second delay
      setEmail('');
      setPassword('');
    } else {
      setError(message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-modal">
      <div className="login-container">
        <button className="close-btn" onClick={onCloseModal}>X</button>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="login-form">
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
            <p>
              Don't have an account?{' '}
              <span
                className="register-link"
                onClick={() => setIsLogin(false)}
              >
                Register here
              </span>.
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="register-form">
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
              <button type="submit" className="register-button">Register</button>
            </div>
            <p>
              Already have an account?{' '}
              <span
                className="login-link"
                onClick={() => setIsLogin(true)}
              >
                Login here
              </span>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
