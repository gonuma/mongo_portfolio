import React from "react";
import logo from "./no-back-logo.svg";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            {/* <NavLink> */}
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={logo}
                  width="40"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
            </Container>
            {/* </NavLink> */}
            {/* <NavLink> */}
            <Container>
              <Navbar.Brand href="/">About Me</Navbar.Brand>
            </Container>
            {/* </NavLink> */}
            {/* <NavLink> */}
            <Container>
              <Navbar.Brand href="/notes">Study Notes</Navbar.Brand>
            </Container>
            {/* </NavLink> */}
            {/* <NavLink> */}
            <Container>
              <Navbar.Brand href="/hobby">Hobby</Navbar.Brand>
            </Container>
            {/* </NavLink> */}
            {/* <NavLink> */}
            <Container>
              <Navbar.Brand href="/music">Music</Navbar.Brand>
            </Container>
            {/* </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
