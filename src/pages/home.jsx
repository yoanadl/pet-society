import React, { useContext, useState } from 'react';
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

function Home() {
  const { isLoggedIn, role, handleLogin, handleLogout } = useContext(AuthContext); // Access auth context
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const openLoginModal = () => {
    setIsModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
  };

  const goToPetList = () => {
    navigate('/petlist'); 
  };

  return (
    <div className={`app-container ${isLoggedIn ? 'Logout' : 'Login'}`}>
      <div className="content">
        <Header 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          openLoginModal={openLoginModal}
          role={role}
        />
        <main>
          <section id="page-one"> 
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="image1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="image2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="image3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </section>

          <section id="page-two">
            <h1>Our Cuties</h1>

            <div id="pet-list">
              <div className="pet-card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="..." alt="PetProfile" />
                <div className="card-body">
                  <h3 className="pet-name">Name, Age</h3>
                  <h5 className="pet-type">Type</h5>
                  <p className="pet-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="pet-card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="..." alt="Pet Image" />
                <div className="card-body">
                  <h3 className="pet-name">Name, Age</h3>
                  <h5 className="pet-type">Type</h5>
                  <p className="pet-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

              <div className="pet-card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="..." alt="Pet Image" />
                <div className="card-body">
                  <h3 className="pet-name">Name, Age</h3>
                  <h5 className="pet-type">Type</h5>
                  <p className="pet-desc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <button onClick={goToPetList} className="link-button">See More&gt;</button>
          </section>

          <section id="page-three">
            <div id="dashboard">
              <h1 id="homepage-title"> Our Services </h1>
              <p id="homepage-desc">
                Looking to give a furry friend a loving home? At Pet Society, we are dedicated to helping animals in need find their forever families. Our shelter provides a safe and nurturing environment for rescued pets, offering them the care and love they deserve while they await adoption.
              </p>

              <section id="buttons">
                <div id="button-row">
                  <div id="button">
                    <button> 
                      <DogIcon width="50px" height="50px" className="icon" />
                    </button>
                    <h1>Our Pets</h1>
                    <p>Check your pet-mate! Might find the perfect one</p>
                  </div>

                  <div id="button">
                    <button>
                      <ReleaseIcon width="50px" height="50px" className="icon" />
                    </button>
                    <h1>Release Pet</h1>
                    <p>Can't handle it? We are here for you and your pet</p>
                  </div>

                  <div id="button">
                    <button> 
                      <AdoptIcon width="50px" height="50px" className="icon" />
                    </button>
                    <h1>Adoption</h1>
                    <p>Ready to have your pet? Get to know on what to prepare</p>
                  </div>

                  <div id="button">
                    <button>
                      <DonateIcon width="50px" height="50px" className="icon" />
                    </button>
                    <h1>Donation</h1>
                    <p>Help us care for them, your support makes a difference!</p>
                  </div>

                  <div id="button">
                    <button>
                      <VolunteerIcon width="50px" height="50px" className="icon" />
                    </button>
                    <h1>Volunteer</h1>
                    <p>Join us in making a difference! Check the criteria and find your perfect slot today.</p>
                  </div>
                </div>
            </section>

            </div>
          </section>
        </main>
        <Footer />
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
