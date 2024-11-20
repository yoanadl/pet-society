// AdminDashboard.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './adminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve users from localStorage
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  const handleViewForms = () => {
    // Navigate to the user form page
    navigate('/user-forms');
  };

  const handleLogout = () => {    
    // Redirect to the login page (or homepage, depending on your setup)
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Display users in a table */}
      <div className="user-table">
        <h3>Users</h3>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="view-forms-btn-container">
        <button onClick={handleViewForms} className="view-button">
          View All Forms
        </button>
      </div>

      {/* Logout Button */}
      <div className="logout-btn-container">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
