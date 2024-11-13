import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, onCloseModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const users = [
    { email: 'admin@mail.com', password: 'admin', role: 'admin' },
    { email: 'user@mail.com', password: 'user', role: 'user' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      onLogin(email, password, user.role);
      setSuccessMessage('You have successfully logged in!');
      onCloseModal();

      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
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
        <div class="button">
          <button type="submit" className="login-button">Login</button>
        </div>    
  </form>

      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
}

export default Login;
