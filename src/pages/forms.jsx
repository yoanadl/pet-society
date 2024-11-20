import React, {useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forms.css';
import { AuthContext } from '../services/AuthContext.js';
import Form1 from './Form1.js';


const Forms = () => {

  const { isLoggedIn, userEmail } = useContext(AuthContext);

  const [selectedForm, setSelectedForm] = useState('form1');

  const [formData, setFormData] = useState({
    //personal info
    fullName:'',
    email: '',
    address: '',
    phone: '',

    //livingsituation
    housingType: 'House',
    otherHousing: '',
    homeOwnership: '',
    landlordInfo: '',
    outdoorSpace: '',
    petsAllowed: '',
    otherPets: '',
    otherPetsDesc: '',

    // employement and lifestyle
    hoursAlone: '',
    travel: '',
    ownedPets: '',
    petCareExperience: '',
    petReason: '',
    interestedInDog: false,
    interestedInCat: false,
    interestedInOther: false,
    interestedCustom: '',
    petAge: '',
    petAgePreference: '',
    petGenderPreference: '',

    //health and safety
    accessToVet: '',
    vetCare: '',
    petLocation: '',
    familyAllergies: '',

    //commitment to welfare
    longTermCommitment: '',
    unableToCarePlan: '',

    //adoption process
    adoptionFee: '',
    homeVisit: '',
    shelterGuidelines: '',
  });


  const handleFormChange = (e) => {setSelectedForm(e.target.value);};
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value, 
    }));
  };


  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Email:", userEmail); 

    if (!userEmail) {
      alert("Please enter a valid email or user ID to associate the form.");
      return;
    }

    const existingData = JSON.parse(localStorage.getItem(userEmail)) || [];
    existingData.push(formData);
    localStorage.setItem(userEmail, JSON.stringify(existingData));

    
    alert("Form data saved!");
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); 
  };



  
  
  if (!isLoggedIn) {
    return (
      <div id="forms-div">
        <h1>Access Denied</h1>
        <p>You must be logged in to access this page.</p>
        <button onClick={() => navigate('/')}>Go to Login</button>
      </div>
    );
  }

  return (
    <div id="forms-div">

      <h1>Forms Page</h1>

      <button onClick={goToHome} className="link-button">&lt; Back</button>


      <select value={selectedForm} onChange={handleFormChange}>
        <option value="form1">Adoption</option>
        <option value="form2">Releasing a Pet</option>
        <option value="form3">Volunteer</option>
      </select>

      {/* Display form based on selected option */}
      {selectedForm === 'form1' && (
        <Form1 formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      )}

      {selectedForm === 'form2' && (
        <form>
          <h2>Form 2</h2>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
          <br />
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

      {selectedForm === 'form3' && (
        <form>
          <h2>Form 3</h2>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Forms;
