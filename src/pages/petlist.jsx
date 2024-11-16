import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../services/AuthContext.js';
import petsData from '../pets.json';
import './petlist.css'; 

function PetList() {
  const { isLoggedIn, role, userEmail } = useContext(AuthContext);

  const [pets, setPets] = useState([]);
  useEffect(() => {
    setPets(petsData);
  }, []);

  return (
    <div className={`petlist-container ${isLoggedIn ? 'Logout' : 'Login'}`}>
      <h1>Pet List Page</h1>

      {isLoggedIn ? (
        <div>
          <p>Welcome, {role}!</p>
          <p>Your email: {userEmail}</p>
        </div>
      ) : (
        <p>You are not logged in. Please log in to access more features.</p>
      )}

      <div className="petlist-content">
        <h2>Available Pets</h2>
        <div className="pet-cards">
          {pets.map((pet, index) => (
            <div key={index} className="pet-card">
              <h3>{pet.name}</h3>
              <p>Age: {pet.age}</p>
              <p>Type: {pet.type}</p>
              <p>Breed: {pet.breed}</p>
              <p>Personalities: {pet.personalities.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PetList;
