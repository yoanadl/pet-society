import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar.js';
import { usePetService } from '../services/PetService.js';
import './petlist.css';

function PetList() {
  const { pets, getRandomPets } = usePetService();
  const [selectedPet, setSelectedPet] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalPet, setModalPet] = useState(null);
  const [filteredPets, setFilteredPets] = useState(pets); // Initialize with all pets
  const [selectedType, setSelectedType] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // New state for search

  const navigate = useNavigate();

  useEffect(() => {
    handleFilterChange(); // Re-run the filter logic whenever searchQuery, type, or age changes
  }, [selectedType, selectedAge, searchQuery, pets]);

  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
    setShowModal(false);
  };

  const handleDoubleClickPet = (pet) => {
    setModalPet(pet);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalPet(null);
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleFilterChange = () => {
    let filtered = pets;
  
    // Filter by type
    if (selectedType) {
      filtered = filtered.filter((pet) => pet.type === selectedType);
    }
  
    // Filter by age
    if (selectedAge) {
      filtered = filtered.filter((pet) => {
        const petAge = pet.age;
        if (selectedAge === '0-1') return petAge >= 0 && petAge <= 1;
        if (selectedAge === '2-5') return petAge >= 2 && petAge <= 5;
        if (selectedAge === '6-10') return petAge >= 6 && petAge <= 10;
        if (selectedAge === '10+') return petAge >= 10;
        return true;
      });
    }
  
    // Generalized search across multiple attributes
    if (searchQuery) {
      const keyword = searchQuery.toLowerCase();
      filtered = filtered.filter((pet) => {
        return (
          pet.name.toLowerCase().includes(keyword) ||
          pet.type.toLowerCase().includes(keyword) ||
          pet.breed.toLowerCase().includes(keyword) ||
          (pet.description && pet.description.toLowerCase().includes(keyword)) ||
          pet.age.toString().includes(keyword)         
        );
      });
    }
  
    setFilteredPets(filtered); // Update the filtered list of pets
  };
  

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value); // Update selected type
  };

  const handleAgeChange = (e) => {
    setSelectedAge(e.target.value); // Update selected age
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query
  };

  return (
    <div className="petlist-page">
      <Sidebar>
        <div className="filters">
          <h3>Filter Pets</h3>
          <div className="filter-item">
            <label>Search:</label>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by name..."
              className="search-input"
            />
          </div>

          <div className="filter-item">
            <label>Type:</label>
            <select value={selectedType} onChange={handleTypeChange}>
              <option value="">All Types</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Age:</label>
            <select value={selectedAge} onChange={handleAgeChange}>
              <option value="">All Ages</option>
              <option value="0-1">0-1 Years (Kid)</option>
              <option value="2-5">2-5 Years (Adult)</option>
              <option value="6-10">6-10 Years (Senior)</option>
              <option value="10+">10+ Years (Senior)</option>
            </select>
          </div>
        </div>
      </Sidebar>

      <div className="petlist-container">
        <h1>Pet List Page</h1>
        <button onClick={goToHome} className="link-button">
          &lt; Back
        </button>

        <div className="petlist-content">
          <div className="pet-cards">
            {filteredPets.length === 0 ? (
              <p>No pets match the selected filters.</p> // Display message if no pets match
            ) : (
              filteredPets.map((pet, index) => (
                <div
                  key={index}
                  className={`pet-card ${selectedPet === pet ? 'selected' : ''}`}
                  onClick={() => handleSelectPet(pet)}
                  onDoubleClick={() => handleDoubleClickPet(pet)}
                >
                  <img
                    src={pet.picture}
                    alt={`${pet.name}`}
                    className="pets"
                    onError={(e) => {
                      e.target.src = '/placeholder.jpg';
                      e.target.alt = 'Image not available';
                    }}
                  />
                  <h3>{pet.name}</h3>
                  <p>Age: {pet.age}</p>
                  <p>Type: {pet.type}</p>
                  <p>Breed: {pet.breed}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {showModal && modalPet && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <h2>{modalPet.name}</h2>
              <p><strong>Type:</strong> {modalPet.type}</p>
              <p><strong>Breed:</strong> {modalPet.breed}</p>
              <p><strong>Age:</strong> {modalPet.age}</p>
              <p><strong>Description:</strong> {modalPet.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PetList;
