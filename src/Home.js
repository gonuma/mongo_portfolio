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
          // height: "15vh",
          marginLeft: "1vw",
          marginRight: "1vw",
        }}
      >
        <Col xs={2}></Col>
        <Col
          xs={12}
          md={8}
          style={{
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "3.052rem" }}>Greg Edmondson</h1>
          <h3 style={{ fontSize: "1.953rem" }}>IT Professional</h3>
          <h5 style={{ fontSize: "1.25rem" }}>📧 GregEdmondson95@gmail.com</h5>
          <h5 style={{ fontSize: "1.25rem" }}>🏠 Chofu, Tokyo, Japan</h5>
        </Col>
        {/* <Col xs={4} md={0}></Col> */}
        <Col xs={4} md={2}>
          <Image
            fluid
            style={{
              borderRadius: "25px",
              maxHeight: "20vh",
            }}
            src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
          />
        </Col>
        {/* <Col xs={4} md={0}></Col> */}
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
          // height: "50%",
          padding: "1vh",
          marginLeft: "1vw",
          marginRight: "1vw",
          // minHeight: "50%",
        }}
      >
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
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
        <Carousel interval={null}>
          <Carousel.Item>
            <Row style={{ textAlign: "center" }}>
              <h1>MusiSpace</h1>
              <p style={{}}>
                MusiSpace is a place where users can easily share the music they
                love. By simply creating an account and following their friends,
                they can view all music that both they and their friends share.
                Engineered a backend using Ruby on Rails and PSQL to provide
                user verification and save users’ posts and comments. Built and
                designed a responsive front-end using a mix of Ruby and ReactJS.
                Continuously iterated and deployed updates to Heroku.
              </p>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ textAlign: "center" }}>
              <h1>CollabSpace</h1>
              <p style={{}}>
                For this project, I teamed up with a group of talented
                programmers for a four day sprint. We wanted to create a space
                for users to collaborate remotely, using the Vonage/OpenTok
                video API and Google Drive. Created a backend using Knex, PSQL,
                and Express to allow simple seeding and migration of our
                database, user authentication, and Google Drive document
                customization. Integrated video/voice chat into a frontend that
                we created using ReactJS
              </p>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row style={{ textAlign: "center" }}>
              <h1>Senpai</h1>
              <p style={{}}>
                Senpai provides users with a single platform to pay for and
                purchase programming tutoring using Stripe, video chat, and pair
                program with senior or budding programmers. Senpai was built
                around a REST API with MongoDB, Express, React, and Node.js.
                Created a robust backend using MongoDB, Express, Stripe, and
                Firebase, allowing users authentication, saving user data, and
                user-generated products with custom prices. Built an intuitive
                frontend using ReactJS and Material UI. Continuously iterated
                and deployed software using Docker and GCP.
              </p>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default Home;
