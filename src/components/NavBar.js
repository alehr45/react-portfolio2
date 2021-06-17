import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      className="nav"
      collapseOnSelect
      fixed="top"
      expand="sm"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <React.Fragment>
            <Nav.Link className="text-light" href="/aboutme">
              About Me
            </Nav.Link>
            <Nav.Link className="text-light" href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="text-light" href="/contact">
              Contact
            </Nav.Link>
          </React.Fragment>
        </Nav>
      </Navbar.Collapse>
      <div></div>
    </Navbar>
  );
};

export default NavBar;
