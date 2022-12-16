import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"> React Bootstrap </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link " aria-current="page" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link " aria-current="page" to="/contact">
              Contact
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="nav-link " aria-current="page" to="/login">
              <button className="btn btn-outline-primary">Login</button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
