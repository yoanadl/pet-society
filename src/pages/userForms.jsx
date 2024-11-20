// UserFormPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to the edit page
import './userForms.css';

const UserFormPage = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const keys = Object.keys(localStorage);

    // Filter out non-user form data (excluding 'users' metadata)
    const retrievedData = keys
      .filter((key) => key !== 'users') // Exclude 'users' key
      .map((key) => {
        try {
          const parsedData = JSON.parse(localStorage.getItem(key));
          if (Array.isArray(parsedData)) {
            return { userEmail: key, forms: parsedData };
          }
          return null; // Skip invalid data
        } catch (error) {
          console.error(`Error parsing data for key "${key}":`, error);
          return null;
        }
      })
      .filter((data) => data !== null);

    setFormData(retrievedData);
  }, []);

  const handleDeleteForm = (userEmail, formIndex) => {
    // Retrieve the user forms from localStorage
    const userForms = JSON.parse(localStorage.getItem(userEmail));

    // Remove the selected form from the list
    userForms.splice(formIndex, 1);

    // If there are no more forms, remove the user from localStorage
    if (userForms.length === 0) {
      localStorage.removeItem(userEmail);
    } else {
      // Update the localStorage with the new list of forms
      localStorage.setItem(userEmail, JSON.stringify(userForms));
    }

    // Update the state to reflect the changes
    setFormData((prevData) =>
      prevData.map((userData) => {
        if (userData.userEmail === userEmail) {
          return { userEmail, forms: userForms };
        }
        return userData;
      })
    );
  };

  return (
    <div className="user-form-page">
      <h2>All User Form Data</h2>

      {/* Display form data for all users */}
      {formData.length > 0 ? (
        formData.map(({ userEmail, forms }) => (
          <div className="user-data" key={userEmail}>
            <h4>User: {userEmail}</h4>
            {forms.map((form, index) => (
              <div key={index} className="form-data">
                <h5>Form {index + 1}</h5>
                {Object.entries(form).map(([key, value]) => (
                  <div className="data-item" key={key}>
                    <strong>{key}:</strong> <span>{value}</span>
                  </div>
                ))}
                {/* Delete button for each form */}
                <button
                  onClick={() => handleDeleteForm(userEmail, index)}
                  className="delete-button"
                >
                  Delete Form
                </button>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No form data found.</p>
      )}
    </div>
  );
};

export default UserFormPage;
