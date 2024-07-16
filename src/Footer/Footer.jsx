
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faSnapchatSquare } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div >
          <h1 className="animal">AnimalX</h1>
          <p className="compassion">Compassion for Animals, Guardians of Gentle Souls!</p>
        </div>
        <div >
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} size="3x" className="logos"/>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagramSquare} size="3x" className="logos"/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitterSquare} size="3x" className="logos" />
          </a>
          <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSnapchatSquare} size="3x" className="logos"/>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>Contact Us</h3>
          <a href="/">Address: Bangalore</a>
          <a href="/">Zip code: 560004</a>
          <a href="/">Email: explorex@ac.in</a>
          <a href="/">Phone: 1800 658 547</a>
        </div>
        <div>
          <h3>Explore With Us</h3>
          <a href="/">More Tours</a>
          <a href="/">Blog</a>
          <a href="/">Signup</a>
          <a href="/">Status</a>
        </div>
        <div>
          <h3>Customer Service</h3>
          <a href="/">FAQs</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Refund Policy</a>
        </div>
        <div>
          <h3>Others</h3>
          <a href="/">License</a>
          <a href="/">Supports</a>
          <a href="/">Subscribe</a>
          <a href="/">About Us</a>
        </div>
      </div>
      <div className="copy">
        Copyright © 2024 with AnimalX. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
