import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../services/AuthContext.js'; 
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar.js'; 
import petsData from '../pets.json';
import './petlist.css';

function PetList() {
  const { isLoggedIn, role, userEmail } = useContext(AuthContext); 
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalPet, setModalPet] = useState(null);

  useEffect(() => {
    setPets(petsData);
  }, []);

  const handleSelectPet = (pet) => {
    if (!isLoggedIn) {
      alert('You need to log in to select a pet.');
      return;
    }
    setSelectedPet(pet);
    setShowModal(false); // Ensure modal is closed on single click
  };

  const handleDoubleClickPet = (pet) => {
    if (!isLoggedIn) {
      alert('You need to log in to view pet details.');
      return;
    }
    setModalPet(pet);
    setShowModal(true); // Open modal on double-click
  };

  const closeModal = () => {
    setShowModal(false);
    setModalPet(null);
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="petlist-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="petlist-container">
        <h1>Pet List Page</h1>

        <button onClick={goToHome} className="link-button">&lt; Back</button>

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
              <div
                key={index}
                className={`pet-card ${selectedPet === pet ? 'selected' : ''}`}
                onClick={() => handleSelectPet(pet)}
                onDoubleClick={() => handleDoubleClickPet(pet)}
              >
                <img src={pet.picture} alt={`Image of ${pet.name}`} className="pet-image" />
                <h3>{pet.name}</h3>
                <p>Age: {pet.age}</p>
                <p>Type: {pet.type}</p>
                <p>Breed: {pet.breed}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="selected-pet-info">
          <h2>Selected Pet</h2>
          {selectedPet ? (
            <div className="selected-pet">
              <p>
                <strong>{selectedPet.name}</strong> ({selectedPet.type}, {selectedPet.breed})
              </p>
              <p>Age: {selectedPet.age}</p>
            </div>
          ) : (
            <p>No pet selected.</p>
          )}
        </div>
      </div>

      {/* Modal for Pet Description */}
      {showModal && modalPet && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{modalPet.name}</h2>
            <p><strong>Type:</strong> {modalPet.type}</p>
            <p><strong>Breed:</strong> {modalPet.breed}</p>
            <p><strong>Age:</strong> {modalPet.age}</p>
            <p><strong>Description:</strong> {modalPet.description}</p>
          </div>
        </div>
      )}

      
    </div>
  );
}

export default PetList;
