import React, { useEffect, useState, useContext} from 'react';
import './adminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext.js';



const AdminDashboard = () => {
  const [formDataItems, setFormDataItems] = useState([]);
  const { logout } = useContext(AuthContext); // Access auth context


  useEffect(() => {
    const items = [];

    // Retrieve the form data from localStorage
    const storedData = JSON.parse(localStorage.getItem('formData')) || {};

    // Loop through each user in formData and collect their forms data
    for (const userEmail in storedData) {
      const userForms = storedData[userEmail]; // Get all forms for the user
      items.push({ userEmail, userForms }); // Push the userEmail along with all their forms
    }

    setFormDataItems(items); // Store the form data for rendering
  }, []);

  const handleDelete = (userEmail) => {
    // Retrieve the existing data from localStorage
    const storedData = JSON.parse(localStorage.getItem('formData')) || {};

    // Delete the user data
    delete storedData[userEmail];

    // Save the updated data back to localStorage
    localStorage.setItem('formData', JSON.stringify(storedData));

    // Update the state to remove the deleted user
    setFormDataItems((prevItems) =>
      prevItems.filter((item) => item.userEmail !== userEmail)
    );
  };

  const renderFormData = (userForms) => {
    if (!userForms) return null; // If userForms is undefined or null, return nothing

    return (
      <div className="form-data-container">
        {Object.entries(userForms).map(([formName, formData]) => (
          <div key={formName}>
            <h5>{formName} Data:</h5>
            {Object.entries(formData).map(([key, value]) => (
              <p key={key}><strong>{key}:</strong> {value || 'Not provided'}</p>
            ))}
          </div>
        ))}
      </div>
    );
  };


  const navigate = useNavigate();

  const goToHome = () => {
    logout();
    navigate('/');
  };


  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <button onClick={goToHome} className="link-button">
        &lt; Back
      </button>

      {/* Display form data for each user */}
      <div className="form-data-list">
        {formDataItems.length > 0 ? (
          formDataItems.map((item, index) => (
            <div key={index} className="user-form-data">
              <h3>User: {item.userEmail}</h3> {/* Display the user's email */}
              <h4>Form Data</h4>
              {renderFormData(item.userForms)} {/* Render all form data */}

              {/* Delete Button */}
              <button
                className="delete-button"
                onClick={() => handleDelete(item.userEmail)}
              >
                Delete Data
              </button>
            </div>
          ))
        ) : (
          <p>No form data available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
