import React from 'react';
import './Footer.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><Nav.Link as={Link} to="/home">Home</Nav.Link></li>
          <li><Nav.Link as={Link} to="/aboutus">About Us</Nav.Link></li>
          <li><Nav.Link as={Link} to="/ourservices">Our Services</Nav.Link></li>
          <li><Nav.Link as={Link} to="/ourstrength">Our Strength</Nav.Link></li>
          <li><Nav.Link as={Link} to="/company1">Engineer & Associates</Nav.Link></li>
          <li><Nav.Link as={Link} to="/company2">Inspection & Testing</Nav.Link></li>
          <li><Nav.Link as={Link} to="/company3">Consultancy & Training</Nav.Link></li>
          <li><Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Address</h4>
        <p>
          Flat No. 301, Top floor,<br />
          Dilip's Pride, Near Shiv Mandir,<br />
          Mahesh Nagar, Nagpur - 440013
        </p>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <ul>
          <li>+91 7720900997<br />+91 8087763182</li>
          <li><a href="mailto:aakai.ap@gmail.com">aakai.ap@gmail.com</a></li>
        </ul>
      </div>
      <div className="footer-section social-icons">
        <img src="/facebook.png" className="footer-image" alt="Facebook" />
        <img src="/instagram.png" className="footer-image" alt="Instagram" />
        <img src="/twitter.png" className="footer-image" alt="Twitter" />
      </div>
    </div>
  );
}

export default Footer;
