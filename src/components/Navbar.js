// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Navbar.css';
const hospitallogo = process.env.PUBLIC_URL + '/Kunda_Logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={hospitallogo} alt="Hospital Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/specialities">Specialities</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@kundahospitals8399" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
}
export default Navbar;