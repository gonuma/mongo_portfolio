import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid style={{ backgroundColor: "white", height: "94.8vh" }}>
      <Row
        style={{
          padding: "1vh",
          backgroundColor: "#D3D3D3",
          height: "23vh",
          marginLeft: "1vw",
          marginRight: "1vw",
        }}
      >
        <Col xs={2}>
          {/* <Image
            fluid
            style={{
              borderRadius: "25px",
              maxHeight: "20vh",
            }}
            src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
          /> */}
        </Col>
        <Col
          xs={8}
          style={{
            textAlign: "center",
          }}
        >
          <Row>
            <h1>Greg Edmondson</h1>
            <h5>IT Professional</h5>
            <h5>📧 GregEdmondson95@gmail.com | ☎️ 080-7725-0495</h5>
            <h5>🏠 Chofu, Tokyo, Japan</h5>
          </Row>
        </Col>
        <Col xs={2}>
          <Image
            fluid
            style={{
              borderRadius: "25px",
              maxHeight: "20vh",
            }}
            src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
          />
        </Col>
      </Row>
      <Row
        style={{
          padding: "1vh",
          backgroundColor: "black",
        }}
      >
        <Col
          style={{ color: "white", fontStyle: "italic", textAlign: "center" }}
        >
          The best time to plant a tree was 20 years ago. The second best time
          is now.
        </Col>
      </Row>
      <Row
        fluid
        style={{
          backgroundColor: "#D3D3D3",
          height: "23vh",
          padding: "1vh",
          marginLeft: "1vw",
          marginRight: "1vw",
        }}
      >
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Col
            // style={{ margin: "auto" }}
            >
              Having moved to Japan at the age of 20, I have worked in a number
              of industries. I began my journey in Japan as many do, as an
              English teach in a rural city. However, the whole time I was
              yearning to move to the big city and work in the videogame
              industry. After searching high and low, I ended up finding a
              position in Tokyo, working as a videogame translator. It was a
              dream come true to be wrapped in the heart of the gaming world.
              However, after several years of working in the videogame industry,
              I began to feel the itch for change, for a challenge. I had always
              loved computers, having built a few for myself and friends, and
              being the designated IT-guy in the family. In 2021, I decided to
              delve deeper into this interest in tech and enrolled in an
              intensive programming bootcamp known as Code Chrysalis. Not only
              had I never written a single line of code before, but my son had
              just been born a few months prior. I had hopes that this would set
              me on a new path in my career and life, but I didn't quite realize
              just how difficult, and rewarding, this choice would be.
            </Col>
          </Carousel.Item>
          <Carousel.Item>
            <Col
            // style={{ margin: "auto" }}
            >
              Code Chrysalis was a flurry of learning. I had never written a
              single line of code before, and here I was taking a course to
              learn full-stack programming. Every day we were studying new
              technologies, including data-structures, GraphQL, SQL databases,
              React, Node, containers, and a little sprinkle of Ruby for good
              measure.
            </Col>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row
        style={{
          padding: "1vh",
          backgroundColor: "black",
        }}
      >
        <Col style={{ color: "white", textAlign: "center" }}>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row
        fluid
        style={{
          backgroundColor: "#D3D3D3",
          height: "23vh",
          padding: "1vh",
          marginLeft: "1vw",
          marginRight: "1vw",
        }}
      >
        <Col style={{ margin: "auto" }}>
          I'm going to use this space to introduce a few projects that I've
          previously worked on.
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
