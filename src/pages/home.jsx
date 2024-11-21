import React, { useContext, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Login from '../components/Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { AuthContext } from '../services/AuthContext.js';

import { ReactComponent as DogIcon } from '../assets/dog.svg';
import { ReactComponent as AdoptIcon } from '../assets/adoption.svg';
import { ReactComponent as ReleaseIcon } from '../assets/release.svg';
import { ReactComponent as DonateIcon } from '../assets/donation.svg';
import { ReactComponent as VolunteerIcon } from '../assets/volunteer.svg';

import { ReactComponent as WhatsApp } from '../assets/whatsapp.svg';
import { ReactComponent as Email } from '../assets/email.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Tiktok } from '../assets/tiktok.svg';


function Home() {
  const { isLoggedIn, role, handleLogin, logout } = useContext(AuthContext); // Access auth context
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openLoginModal = () => {
    setIsModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  const goToPetList = () => {
    navigate('/petlist'); 
  };

  const goToDonation = () => {
    navigate('/donation'); 
  };

  const goToAdoption = () => {
    navigate('/adoption'); 
  };

  const goToVolunteer = () => {
    navigate('/volunteer'); 
  };


  const goToRelease = () => {
    navigate('/release'); 
  };


  const [users, setUsers] = useState([]);
  // const [localStorageItems, setLocalStorageItems] = useState([]);


  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);


    // const items = [];
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i);
    //   const value = localStorage.getItem(key);
    //   items.push({ key, value });
    // }
    // setLocalStorageItems(items);
  }, []);


  const [pets, setPets] = useState([]);
  const [randomPets, setRandomPets] = useState([]);
  const petsDataPath = '/pets.json';

  const fetchPetsData = async () => {
    try {
      const response = await fetch(petsDataPath);
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error('Error fetching pets data:', error);
    }
  };

  const getRandomPets = () => {
    const shuffledPets = pets.sort(() => 0.5 - Math.random());
    const selectedPets = shuffledPets.slice(0, 3);
    setRandomPets(selectedPets);
  };

  useEffect(() => {
    fetchPetsData();
  }, []);

  useEffect(() => {
    if (pets.length > 0) {
      getRandomPets();
    }
  }, [pets]);


  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);


  return (
    <div className={`app-container ${isLoggedIn ? 'Logout' : 'Login'}`}>
      <div className="content">
        <Header 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          openLoginModal={openLoginModal}
          role={role}
          aboutUsRef={aboutUsRef} 
          servicesRef={servicesRef} 
          contactUsRef={contactUsRef} 
        />
        <main>


        {/* <div>
      <h2>Local Storage Contents:</h2>
      {localStorageItems.length > 0 ? (
        <ul>
          {localStorageItems.map((item, index) => (
            <li key={index}>
              <strong>{item.key}:</strong> {item.value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in local storage.</p>
      )}
    </div> */}

        <section id="page-one"> 
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/banner-1.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/banner-2.png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/banner-3.png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </section>

        <section id="page-two">
          <h1>Our Cuties</h1>

          <div id="pet-list">
            {randomPets.map((pet, index) => (
              <div className="pet-card" key={index}>
                <img className="card-img-top" src={pet.picture} alt={pet.name} />
                <div className="card-body">
                  <h3 className="pet-name">{pet.name}, {pet.age}yr(s)</h3>
                  <h5 className="pet-type">{pet.type}</h5>
                  <p className="pet-desc">{pet.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={goToPetList} className="link-button">See More  &gt;</button>
        </section>

        <section ref={servicesRef}id="page-three">
          <div id="dashboard">
            <h1 id="homepage-title"> Our Services </h1>
            <p id="homepage-desc">
              Looking to give a furry friend a loving home? At Pet Society, we are dedicated to helping animals in need find their forever families. Our shelter provides a safe and nurturing environment for rescued pets, offering them the care and love they deserve while they await adoption.
            </p>

            <section id="buttons">
              <div id="button-row">
                <div id="button">
                  <button onClick={goToPetList}> 
                    <DogIcon width="50px" height="50px" className="icon" />
                  </button>
                  <h1>Our Pets</h1>
                  <p>Check your pet-mate! Might find the perfect one</p>
                </div>

                <div id="button">
                  <button onClick={goToRelease}>
                    <ReleaseIcon width="50px" height="50px" className="icon" />
                  </button>
                  <h1>Release Pet</h1>
                  <p>Can't handle it? We are here for you and your pet</p>
                </div>

                <div id="button">
                  <button onClick={goToAdoption}> 
                    <AdoptIcon width="50px" height="50px" className="icon" />
                  </button>
                  <h1>Adoption</h1>
                  <p>Ready to have your pet? Get to know on what to prepare</p>
                </div>

                <div id="button">
                  <button onClick={goToDonation}>
                    <DonateIcon width="50px" height="50px" className="icon" />
                  </button>
                  <h1>Donation</h1>
                  <p>Help us care for them, your support makes a difference!</p>
                </div>

                <div id="button">
                  <button onClick={goToVolunteer}>
                    <VolunteerIcon width="50px" height="50px" className="icon" />
                  </button>
                  <h1>Volunteer</h1>
                  <p>Join us in making a difference! Check the criteria and find your perfect slot today.</p>
                </div>
              </div>
          </section>

          </div>
        </section>


        <section ref={aboutUsRef} id="page-four">
          <div id="page-four-pad">
            <h1>About Us</h1>
            <p>
              We believe every pet deserves a loving home. We’re here to help connect amazing pets with people who are ready to welcome them into their lives. 
              At Pet Society, we hope for our pets to find their forever home.
              Our goal is to give homeless pets a second chance and help them find families who will love and care for them. 
              making it easier for you to find your perfect match.
            </p>

            <h2>How It Works</h2>
              <div id="page-four-hiw">
                <div id="hiw-content">
                  <p>1</p>
                  <p>Browse through our listings to find pets near you</p>
                </div>

                <div id="hiw-content">
                  <p>2</p>
                  <p>Learn about their personalities</p>
                </div>

                <div id="hiw-content">
                  <p>3</p>
                  <p>See which one feels like the right fit for your home</p>
                </div>

                <div id="hiw-content">
                  <p>4</p>
                  <p>Once you’re ready, we’ll guide you through the adoption process.</p>
                </div>
              </div>

            <h2>Contact Us</h2>
            <div ref={contactUsRef} id='contact-us'>
              <div id="contents">
                <div id="cu-content">
                  <WhatsApp width="36px" height="36px" className="cu" />
                  <p>+65 9875 3874</p>
                </div>
                <div id="cu-content">
                  <Email width="36px" height="36px" className="cu" />
                  <p>petsociety@mail.com</p>
                </div>
              </div>

              <p>or follow us on the platforms</p>

              <div id="platforms">
                <div id="cu-platforms">
                  <Facebook width="36px" height="36px" style={{ fill: '#FFFFFF' }} className="cu" />
                  <p>petsocietysg</p>
                </div>

                <div id="cu-platforms">
                  <Instagram width="36px" height="36px" style={{ fill: '#FFFFFF' }} className="cu" />
                  <p>petsocietysg</p>
                </div>

                <div id="cu-platforms">
                  <Tiktok width="36px" height="36px" style={{ fill: '#FFFFFF' }} className="cu" />
                  <p>petsocietysg</p>
                </div>
              </div>
            </div>
              

          </div>
          
        </section>


        </main>
        <Footer
        aboutUsRef={aboutUsRef} 
        servicesRef={servicesRef} 
        contactUsRef={contactUsRef} 
         />
      </div>

      {isModalOpen && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="close-btn" onClick={closeLoginModal}>X</button>
            <Login onLogin={handleLogin} onCloseModal={closeLoginModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
