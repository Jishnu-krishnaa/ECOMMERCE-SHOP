// Footer.js
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: ekartonline@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook | Twitter | Instagram</p>
          <br/><p>Login | Signup to <Link to='/Adminlog'className='Foot-Adm'>&#171;&#171;ADMIN</Link></p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>123 Main Street, Cityville, State, 12345</p>
          <p>Facebook123</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 E-kart.in. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
