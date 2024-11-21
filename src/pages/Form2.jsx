import React, { useState } from 'react';

const Form2 = ({ userEmail }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    relationship: 'Owner',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate if the user email is provided
    if (!userEmail) {
      alert('Please log in or provide an email to associate with this form.');
      return;
    }

    try {
      console.log('Submit button clicked');
      console.log('Current formData:', formData);
    
      // Retrieve existing data from localStorage or initialize as empty object
      const existingData = JSON.parse(localStorage.getItem('formData')) || {};

      console.log('Existing Data from localStorage:', existingData);
    
      // Ensure user data exists or initialize it
      existingData[userEmail] = existingData[userEmail] || {};

      // Assign the form2 data to the user data structure
      existingData[userEmail].form2 = { ...formData };

      console.log('Data to save:', existingData);
    
      // Save the updated data back to localStorage
      localStorage.setItem('formData', JSON.stringify(existingData));
    
      console.log('Data successfully saved to localStorage');
      alert('Form data saved successfully!');
    } catch (error) {
      console.error('Error saving form data:', error);
      alert('There was an error saving your form data.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Owner Information</h2>

        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />

      
      <label htmlFor="phone">Phone Number</label>
      <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}/>
      

      <label htmlFor="relationship">Relationship to the Pet</label>
      <select id="relationship" name="relationship" value={formData.relationship} onChange={handleInputChange}>
      <option value="Owner">Owner</option>
      <option value="Caregiver">Caregiver</option>
      <option value="Family">Family Member</option>
      </select>



          <button type="submit">Submit</button>
        </form>
        
  );
};

export default Form2;
