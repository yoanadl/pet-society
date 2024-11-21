import React from 'react';
import { useNavigate } from 'react-router-dom';
import './release.css';

const Release = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToForm = () => {
    navigate('/forms');
  };

  return (
    <div id="release">
      <button onClick={goToHome} className="link-button">
        &lt; Back
      </button>

      <div className="header-row">
        <h1>Release Your Pet</h1>

        <div className='section-container'>
        <section>
            <h2>Why Release Your Pet?</h2>
            <p>
            Sometimes, unforeseen circumstances can make it challenging to care
            for your pet. Whether it’s due to relocation, financial constraints,
            or the need for specialized care, we understand your concerns.
            </p>
        </section>

        <section>
            <h2>Why Trust Our Shelter?</h2>
            <p>
            At our shelter, we prioritize the well-being of every animal. We
            ensure pets are provided with love, medical care, and support while
            they wait for a new forever home. If special circumstances arise, we
            consult with the previous owner unless stated otherwise.
            </p>
        </section>

        <section>
            <h2>How to Proceed?</h2>
            <p>
            If you’ve decided to release your pet, please fill out the release
            form. This allows us to gather essential information about your pet,
            ensuring their smooth transition into our care.
            </p>
            
        </section>
        </div>

        <button onClick={goToForm} className="form-button">
            Go to Release Form
        </button>
        
      </div>

      
    </div>
  );
};

export default Release;
