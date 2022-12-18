import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"> React Bootstrap </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto linkContainer">
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

function NavbarNew() {
  // get username first letter from localstorage
  const firstLetter = JSON.parse(localStorage.getItem('userdata'));
  const x = firstLetter[firstLetter.length - 1];
  const y = x[0].toUpperCase();
  console.log(y);


const logout =()=>{
  let z = [];
  z.push('false');
  localStorage.setItem('loginDone', JSON.stringify(z));
}


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
            <NavLink className="nav-link " aria-current="page" to="/service">
              Service
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
                <button onClick={logout} className="btn btn-outline-dark">Logout</button>
              </NavLink>
            </NavDropdown>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}





function NavbarBasic(props) {
  const isLogin = props.isLogin;

  if (isLogin) {
    return <NavbarNew/>;
  }else{
    return <CollapsibleExample/>;
  } 
}

export default NavbarBasic;