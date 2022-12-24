import React from "react";
// import "antd/dist/antd.css";
import { Row, Col, Button, Divider, Icon } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Row
        justify="center"
        style={{
          paddingTop: "1vh",
          background: "black",
        }}
      >
        <Col xs={24}>
          <h1 style={{ color: "white", textAlign: "center" }}>
            Greg Edmondson
          </h1>
        </Col>
      </Row>
      <Row
        justify="space-evenly"
        style={{
          marginTop: "-1vh",
          paddingBottom: "0.5vh",
          background: "black",
        }}
      >
        <Col>
          <Link to="/">
            <Button>About</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/tech">
            <Button>Tech</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/music">
            <Button>Music</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/cycling">
            <Button>Cycling</Button>
          </Link>
        </Col>
      </Row>
      <Divider orientation="center"></Divider>
    </>
  );
};

export default Header;
