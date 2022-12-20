import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Component() {
  const firstLetter = JSON.parse(localStorage.getItem('userdata'));
  // console.log(firstLetter[0]);
  // const x = (firstLetter[0])[0];
  // console.log(x);

  

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate('/');
  }

  if (firstLetter) {
    return (
      <button className="btn btn-outline-warning nav_button ">
        <NavDropdown className="" title={firstLetter} id="nav-dropdown">
          <button onClick={logout} className="btn btn-outline-dark">
            Logout
          </button>
        </NavDropdown>
      </button>
    );
  } else {
    return (
      <>
      
      <NavLink className="nav-link " aria-current="page" to="/login">
        <button className="btn btn-outline-primary">Login</button>
      </NavLink>

            <NavLink className="nav-link " aria-current="page" to="/signup">
            <button className="btn btn-outline-primary">Register</button>
          </NavLink>
      
      </>

    );
  }
}     

function NavbarBasic() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="#home"> React Bootstrap </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex navbar_Link ">
            <NavLink className="nav-link " aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link " aria-current="page" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link " aria-current="page" to="/service">
              Service
            </NavLink>
            <NavLink className="nav-link " aria-current="page" to="/contact">
              Contact
            </NavLink>
            <Component />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBasic;
