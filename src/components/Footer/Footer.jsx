// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2024 My Portfolio. All rights reserved.</p>
        <p>
          <a href="https://github.com/my-profile" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://linkedin.com/in/my-profile" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
