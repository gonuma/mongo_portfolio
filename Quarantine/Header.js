import React from "react";
import logo from "../no-back-logo.svg";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        fixed="top"
        // style={{ paddingBottom: "2vh" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            data-bs-target="#navbarScroll"
          />
        </Container>
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            {/* <NavLink> */}
            {/* </NavLink> */}
            {/* <NavLink> */}
            <Container style={{ textAlign: "right" }}>
              <Navbar.Brand className="brand" href="/">
                About Me
              </Navbar.Brand>
            </Container>
            {/* </NavLink> */}
            {/* <NavLink> */}
            <Container style={{ textAlign: "right" }}>
              <Navbar.Brand className="brand" href="/notes">
                Study Notes
              </Navbar.Brand>
            </Container>
            {/* </NavLink> */}
            {/* <NavLink> */}
            <Container style={{ textAlign: "right" }}>
              <Navbar.Brand className="brand" href="/hobby">
                Hobby
              </Navbar.Brand>
            </Container>
            <Container style={{ textAlign: "right" }}>
              <Navbar.Brand className="brand" href="/post">
                Post
              </Navbar.Brand>
            </Container>
            {/* </NavLink> */}
            {/* <NavLink> */}
            {/* <Container>
              <Navbar.Brand className="brand" href="/music">
                Music
              </Navbar.Brand>
            </Container> */}
            {/* </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
