import React from 'react';
import Navigation from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <a href="/" className='initials'>DD.</a>
      <Navigation />
    </header>
  );
};

export default Header;
