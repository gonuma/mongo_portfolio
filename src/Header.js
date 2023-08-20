import React from "react";
import logo from "./no-back-logo.svg";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css"; // Assuming you will create a Header.css file for the styling

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        // bg="secondary"
        variant="dark"
        fixed="top"
        className="sticky-header"
      >
        <Navbar.Brand href="/" style={{ paddingLeft: "15px" }}>
          <img
            alt=""
            src={logo}
            width="150"
            height="50"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="text-light mx-3 nav-item-custom">
              About Me
            </Nav.Link>
            <Nav.Link href="/study" className="text-light mx-3 nav-item-custom">
              Study
            </Nav.Link>
            <Nav.Link href="/hobby" className="text-light mx-3 nav-item-custom">
              Hobby
            </Nav.Link>
            <Nav.Link href="/test" className="text-light mx-3 nav-item-custom">
              Test
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
