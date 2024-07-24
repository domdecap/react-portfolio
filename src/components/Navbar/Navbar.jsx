import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar navbar-dark" >
      <Container>
      <a href="/" className='initials'>DD.</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
