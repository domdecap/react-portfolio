// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 My Portfolio. All rights reserved.</p>
        <p>
          <a href="https://github.com/domdecap" target="_blank" rel="noopener noreferrer"><SiGithub size={30}/></a> | 
          <a href="https://www.linkedin.com/in/dominicdecapite/" target="_blank" rel="noopener noreferrer"> <FaLinkedin size={30} /></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
