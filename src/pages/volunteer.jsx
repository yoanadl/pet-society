import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './volunteer.css';

const Volunteer = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToForm = () => {
    navigate('/forms');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="volunteer">
      <button onClick={goToHome} className="link-button">
        &lt; Back
      </button>

      <div className="header-row">
        <h1>Become a Volunteer</h1>

        <div className="section-container">
          <section>
            <h2>Why Volunteer?</h2>
            <p>
              Volunteering is a fulfilling way to make a positive impact on your community. Whether you're looking to
              help animals in need, provide support to shelter staff, or give back to those who need it most, volunteering
              can be a life-changing experience for both you and those you help.
            </p>
          </section>

          <section>
            <h2>Why Choose Our Shelter?</h2>
            <p>
              Our shelter is committed to creating a positive and supportive environment for both animals and volunteers.
              We offer training, flexibility, and a variety of ways you can get involved. You'll be part of a compassionate
              team working together for the well-being of animals.
            </p>
          </section>

          <section>
            <h2>How to Volunteer?</h2>
            <p>
              Ready to make a difference? Simply fill out the volunteer application form to get started. We'll guide you
              through the process and help match you with a role that fits your skills and interests.
            </p>
          </section>
        </div>

        <button onClick={goToForm} className="form-button">
          Go to Volunteer Form
        </button>
      </div>
    </div>
  );
};

export default Volunteer;
