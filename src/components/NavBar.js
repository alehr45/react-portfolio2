import React from "react";
import { Navbar, Nav, Form , FormControl , Button } from "react-bootstrap";


const NavBar = () => {

  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Alex Lehr</Navbar.Brand>

    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
   
  </Navbar>
  );
};

export default NavBar;
