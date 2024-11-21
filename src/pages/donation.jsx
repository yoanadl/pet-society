import React from 'react';
import { useNavigate } from 'react-router-dom';
import './donation.css';

const Donation = () => {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className='donation'>
        <button onClick={goToHome} className="link-button">
          &lt; Back
        </button>

        <h1>Donation</h1>

        

        <div className="urgent-list">
          <h2>Urgent Items in Need of Funds:</h2>
          <ul>
            <li>Food and supplies for our pets: $76.70</li>
            <li>Bedding and blankets: $81.53</li>
            <li>Veterinary vaccines: $213.85</li>
            <li>Cleaning supplies: $30.50</li>

          </ul>
        </div>

        <div id='donation-content'>
          <p>You can help with your donation through Paynow/Paylah number: +65 8378 2376 <br/><br/>
            or scan through our QR code</p>

          <div>
            <img src="/paynow.jpg" alt='paynow' />
            <p></p>
          </div>
        </div>
    </div>
  )
}

export default Donation;
