import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './forms.css';
import { AuthContext } from '../services/AuthContext.js';
import Form1 from './Form1';
import Form2 from './Form2';

const Forms = () => {
  const { isLoggedIn, userEmail } = useContext(AuthContext);
  const [selectedForm, setSelectedForm] = useState('form1');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedForm]);

  const goToHome = () => {
    navigate('/');
  };

  if (!isLoggedIn) {
    return (
      <div id="forms-div">
        <h1>Access Denied</h1>
        <p>You must be logged in to access this page.</p>
        <button onClick={goToHome}>Go to Login</button>
      </div>
    );
  }

  return (
    <div id="forms-div">
      <h1>Forms Page</h1>
      <button onClick={goToHome} className="link-button">
        &lt; Back
      </button>

      <select
        id="form-var"
        value={selectedForm}
        onChange={(e) => setSelectedForm(e.target.value)}
      >
        <option value="form1">Adoption</option>
        <option value="form2">Releasing a Pet</option>
        <option value="form3">Volunteer</option>
      </select>

      {/* Render forms based on selection */}
      {selectedForm === 'form1' && <Form1 userEmail={userEmail} />}
      {selectedForm === 'form2' && <Form2 userEmail={userEmail} />}
      {selectedForm === 'form3' && <div>Form 3 Placeholder</div>}
    </div>
  );
};

export default Forms;
