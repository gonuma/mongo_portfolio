import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container style={{ backgroundColor: "pink" }}>
      <Row
        style={{
          padding: "1vh",
          backgroundColor: "gray",
        }}
      >
        <Col></Col>
        <Col
          xs={{ span: 8 }}
          style={{
            // alignSelf: "center",
            textAlign: "center",
          }}
        >
          <Row>
            <h1>Greg Edmondson</h1>
          </Row>
          <Row>
            <h5>IT Professional</h5>
          </Row>
          <Row>
            <h5>📧 GregEdmondson95@gmail.com | ☎️ 080-7725-0495</h5>
          </Row>
          <Row>
            <h5>🏠 Chofu, Tokyo, Japan</h5>
          </Row>
        </Col>
        <Col xs={2}>
          <Image
            fluid
            style={{
              borderRadius: "25px",
            }}
            src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
          />
        </Col>
      </Row>
      <Row
        style={{
          padding: "1vh",
        }}
      >
        <Col style={{ fontStyle: "italic", textAlign: "center" }}>
          The best time to plant a tree was 20 years ago. The second best time
          is now.
        </Col>
      </Row>
      <Row>
        <Col>
          <Image
            fluid
            style={{
              // height: "50vh",
              // padding: "1vh",
              borderRadius: "25px",
              // display: "block",
              // margin: "auto",
            }}
            src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
