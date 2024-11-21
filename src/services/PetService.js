import { useState, useEffect } from 'react';

// Custom hook to manage pet data
export const usePetService = () => {
  const [pets, setPets] = useState([]);
  const [randomPets, setRandomPets] = useState([]);

  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const response = await fetch('/pets.json'); // Ensure this points to the correct path
        const data = await response.json();
        setPets(data); // Set pets once data is fetched
      } catch (error) {
        console.error('Error fetching pets data:', error);
      }
    };

    fetchPetsData();
  }, []); // Empty dependency array ensures this only runs once on mount

  const getRandomPets = (count = 3) => {
    // Randomize pets without causing re-renders
    const shuffled = [...pets].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); // Return random pets without setting state
  };

  return { pets, getRandomPets };
};
