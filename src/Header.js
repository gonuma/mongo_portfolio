import React from "react";
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="40"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Greg Edmondson
          </Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="/">About Me</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="/tech">Study Notes</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="/cycling">Hobby</Navbar.Brand>
        </Container>
        <Container>
          <Navbar.Brand href="/music">Music</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
