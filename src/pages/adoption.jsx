import React from 'react';
import { useNavigate } from 'react-router-dom';
import './adoption.css';

const Adoption = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToForm = () => {
    navigate('/forms');
  };

  return (
    <div id="adoption">
      <button onClick={goToHome} className="link-button">
        &lt; Back
      </button>

      <div className="header-row">
        <h1>Adopt a Pet</h1>

        <div className="section-container">
          <section>
            <h2>Why Adopt a Pet?</h2>
            <p>
              Adopting a pet gives a loving animal a second chance at life. Many pets in shelters are looking for
              compassionate homes where they can thrive and bring joy to their new family.
            </p>
          </section>

          <section>
            <h2>Why Choose Our Shelter?</h2>
            <p>
              We carefully assess every pet's needs and personality to help you find the perfect match. Our team ensures
              each animal receives proper care, vaccinations, and training before joining your family.
            </p>
          </section>

          <section>
            <h2>How to Adopt?</h2>
            <p>
              Ready to adopt? Start by filling out the adoption form. This helps us understand your preferences and
              lifestyle, ensuring a smooth transition for your future furry friend.
            </p>
          </section>
        </div>

        <button onClick={goToForm} className="form-button">
          Go to Adoption Form
        </button>
      </div>
    </div>
  );
};

export default Adoption;
