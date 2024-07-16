import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main-text">
        <img
          src='https://i.pinimg.com/564x/14/d4/25/14d425282258200659e2783b2e5cb223.jpg'
          alt='Logo'
          className="logo"
        />
        <div className='animal'>
        Animal
        </div>
      </div>
      <div className="links">
        <Link to="/homepage"><i className="fas fa-home"></i> Home</Link>
        <Link to="/pricing"><i className="fas fa-tags"></i> Pricing</Link>
        <Link to="/blogs"><i className="fas fa-blog"></i> Blog</Link>
        <Link to="/vaccination"><i className="fas fa-syringe"></i> Vaccination</Link>
        <Link to="/friends"><i className="fas fa-paw"></i> Friends</Link>
        <Link to="/login" className="logout"> Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
