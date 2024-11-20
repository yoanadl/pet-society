import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar.js'; 
import petsData from '../pets.json';
import './petlist.css';


// remove check log in in this
function PetList() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalPet, setModalPet] = useState(null);

  useEffect(() => {
    setPets(petsData);
  }, []);

  const handleSelectPet = (pet) => {

    setSelectedPet(pet);
    setShowModal(false); // Ensure modal is closed on single click
  };

  const handleDoubleClickPet = (pet) => {
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
                <img src={pet.picture} alt={`${pet.name}`} className="pets" />
                <h3>{pet.name}</h3>
                <p>Age: {pet.age}</p>
                <p>Type: {pet.type}</p>
                <p>Breed: {pet.breed}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="selected-pet-info">
          {/* <h2>Selected Pet</h2>
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
        </div> */} 
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
