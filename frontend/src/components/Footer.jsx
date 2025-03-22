import React from 'react';
import { Link } from 'react-router-dom';
import FbLogo from '../assets/FbLogo.jpg'; 
import TwitterLogo from '../assets/TwitterLogo.jpg';
import InstaLogo from '../assets/InstaLogo.jpg'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: info@dietpoint.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="#facebook">
            <img src={FbLogo} alt="Facebook" /> 
          </a>
          <a href="#twitter">
            <img src={TwitterLogo} alt="Twitter" /> 
          </a>
          <a href="#instagram">
            <img src={InstaLogo} alt="Instagram" /> 
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Booking</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;