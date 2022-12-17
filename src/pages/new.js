import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Carousel from '../components/layout/Carousel';
// import Cards from '../components/layout/Cards';

function NavbarNew() {
  // get username first letter from localstorage
  const firstLetter = JSON.parse(localStorage.getItem('userdata'));
  const x = firstLetter[firstLetter.length - 1];
  const y = x[0].toUpperCase();
  console.log(y);

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
          <Nav></Nav>
          <button className="btn btn-outline-warning navButton">
            <NavDropdown className="" title={y} id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">{firstLetter}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavLink className="nav-link " aria-current="page" to="/">
                <button className="btn btn-outline-dark">Logout</button>
              </NavLink>
            </NavDropdown>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const New = () => {
  return (
    <>
      <NavbarNew />
      <div className="outer">
        <h1>hello its me</h1>
      </div>
    </>
  );
};

export default New;
