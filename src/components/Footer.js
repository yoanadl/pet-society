import React from 'react';
import './Footer.css'; 
import pawIcon from '../assets/paw.svg';
import fbIcon from '../assets/facebook.svg';
import igIcon from '../assets/instagram.svg';
import ttIcon from '../assets/tiktok.svg';


function Footer() {
  return (
    <footer className="footer">
      <section>
        <div id="logo-section"> 
          <div id="logo">
              <h1 className="logo-title">Pet Society</h1>
              <img src={pawIcon} width="24px" height="24px" alt='Icon'/>
          </div>
          <p>&copy; 2024 Pet Society. All Rights Reserved.</p>
        </div>

        <nav className="footer-nav">
          <a href="#about-us" className="footer-link">About Us</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#faqs" className="footer-link">FAQs</a>
          <a href="#forms" className="footer-link">Forms</a>
        </nav>

        <div id='icons'>
          <img src={fbIcon} width="30px" height="30px" alt='facebook'/>
          <img src={igIcon} width="30px" height="30px" alt='instagram'/>
          <img src={ttIcon} width="30px" height="30px" alt='instagram'/>
        </div>
        
        
      </section>
      

      

    </footer>
  );
}

export default Footer;
