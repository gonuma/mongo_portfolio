import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const customModalStyle = {
    position: "fixed",
    top: "2%",
    left: "2%",
    right: "2%",
    bottom: "2%",
    zIndex: 1050,
    overflowY: "auto",
    backgroundColor: "rgba(44, 44, 44, 0.9)", // Background color to fit with theme
  };

  return (
    <>
      <Container
        fluid
        className="d-flex flex-column text-center py-3"
        style={{
          backgroundColor: "#2C2C2C",
        }}
      >
        <Row className="mb-0">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center align-items-center p-5" // Increased padding for a larger appearance
            style={{ background: "white" }}
          >
            <Card className="border-0 shadow-lg rounded w-100">
              <Card.Body>
                <Card.Title
                  className="text-white text-center py-2"
                  style={{ fontSize: "3.5rem", backgroundColor: "#1C1C1C" }}
                >
                  Greg Edmondson
                </Card.Title>
                <Card.Subtitle
                  className="mb-3 text-muted text-center"
                  style={{ fontSize: "2rem" }}
                >
                  IT Professional
                </Card.Subtitle>
                <Card.Text className="text-dark" style={{ fontSize: "1.3rem" }}>
                  📧 GregEdmondson95@gmail.com <br />
                  🏠 Chofu, Tokyo, Japan
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6} className="p-5">
            <Image
              fluid
              className="mb-3 shadow-lg rounded"
              style={{
                width: "90%", // Increased width for a larger appearance
                height: "65vh", // Increased height for better balance
                objectFit: "cover",
                objectPosition: "center 40%", // Adjusted positioning
              }}
              src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
            />
            <blockquote
              className="blockquote text-center p-4 shadow-lg rounded"
              style={{
                backgroundImage: "linear-gradient(135deg, #4A4A4A, #333)",
                color: "#E9E9E9",
              }}
            >
              <p className="mb-0">
                The best time to plant a tree was 20 years ago. The second best
                time is now.
              </p>
            </blockquote>
          </Col>
        </Row>

        <Row className="mt-0">
          <Col className="d-flex flex-column align-items-start px-4">
            <Card className="border-0 w-100 mb-3 shadow-lg rounded">
              <Card.Body style={{ backgroundColor: "#3D3D3D" }}>
                <Card.Title
                  className="text-white text-center py-2"
                  style={{ fontSize: "2.5rem", backgroundColor: "#1C1C1C" }}
                >
                  Projects
                </Card.Title>
                <ListGroup
                  variant="flush"
                  style={{ backgroundColor: "#3D3D3D" }}
                >
                  <ListGroup.Item
                    action
                    onClick={() => handleItemClick("Senpai")}
                    style={{ fontSize: "1.2rem" }}
                  >
                    Senpai
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => handleItemClick("Collabspace")}
                    style={{ fontSize: "1.2rem" }}
                  >
                    CollabSpace
                  </ListGroup.Item>
                  <ListGroup.Item
                    action
                    onClick={() => handleItemClick("MusiSpace")}
                    style={{ fontSize: "1.2rem" }}
                  >
                    MusiSpace
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            <Card className="border-0 w-100 shadow-lg rounded">
              <Card.Header
                className="text-white"
                style={{ backgroundColor: "#1C1C1C", fontSize: "2.5rem" }} // Reduce the fontSize to 2.5rem
              >
                Certifications
              </Card.Header>
              <Card.Body style={{ backgroundColor: "#3D3D3D" }}>
                <ul
                  className="pl-3"
                  style={{
                    textAlign: "left",
                    color: "#E9E9E9",
                    fontSize: "1.2rem",
                  }} // Increase the fontSize to 1.2rem
                >
                  <li>Cisco CCNA</li>
                  <li>Japanese Language Proficiency Exam Level 1</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="xl" // Made it extra large
          style={customModalStyle}
          centered
        >
          <Modal.Header closeButton style={{ backgroundColor: "#1C1C1C" }}>
            <Modal.Title style={{ color: "#E9E9E9", fontSize: "2.5rem" }}>
              {selectedItem}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ color: "#E9E9E9" }}>
            {selectedItem === "Senpai" ? (
              <Col
                md={12}
                style={{
                  backgroundColor: "#D3D3D3",
                  // height: "100%",
                }}
              >
                <Card
                  className="border-0"
                  style={{
                    backgroundColor: "#D3D3D3",
                    marginTop: "3vh",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      className="bg-dark text-white text-center"
                      style={{ fontSize: "22px" }}
                    >
                      What is {selectedItem}?
                    </Card.Title>
                    <Card.Text
                      className="bg-light text-black"
                      style={{ fontSize: "16px" }}
                    >
                      Senpai provides users a platform to purchase remote
                      programming tutoring. Pairing live video chat and a
                      collaborative IDE, users can pair program with a tutor - a
                      Senpai. Many technologies were used, including MongoDB,
                      Express, and ReactJS. User authentication is performed
                      with Firebase, while payments and price-setting are
                      available through Stripe. The frontend was built using
                      Material UI. Published new iterations and updates using
                      Docker and GCP.
                    </Card.Text>
                    <Card.Title
                      className="bg-dark text-white text-center"
                      style={{ fontSize: "20px" }}
                    >
                      Technologies Used
                    </Card.Title>
                    <Card.Text
                      className="bg-light text-black"
                      style={{ fontSize: "16px" }}
                    >
                      <ul style={{ textAlign: "left" }}>
                        <li>GCP</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>ReactJS</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  className="border-0"
                  style={
                    {
                      // backgroundColor: "lightpink",
                    }
                  }
                >
                  <Card.Body>
                    <Card.Title
                      className="bg-dark text-white text-center"
                      style={{ fontSize: "2rem" }}
                    >
                      Demo
                    </Card.Title>
                    <Card.Text>
                      <iframe
                        width="100%"
                        height="400vh"
                        src="https://www.youtube.com/embed/O5HU8BrGvJQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        style={{ borderRadius: "10px" }}
                      ></iframe>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              ""
            )}
            {selectedItem === "Collabspace" ? (
              <Col
                md={12}
                style={{
                  backgroundColor: "#D3D3D3",
                  // height: "100%",
                }}
              >
                <Card
                  className="border-0"
                  style={{
                    backgroundColor: "#D3D3D3",
                    marginTop: "3vh",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      className="bg-dark text-white text-center"
                      style={{ fontSize: "22px" }}
                    >
                      What is {selectedItem}?
                    </Card.Title>
                    <Card.Text
                      className="bg-light text-black"
                      style={{ fontSize: "16px" }}
                    >
                      For this project, I teamed up with a group of talented
                      programmers for a four day sprint. We wanted to create a
                      space for users to collaborate remotely, using the
                      Vonage/OpenTok video API and Google Drive. Created a
                      backend using Knex, PSQL, and Express to allow simple
                      seeding and migration of our database, user
                      authentication, and Google Drive document customization.
                      Integrated video/voice chat into a frontend that we
                      created using ReactJS.
                    </Card.Text>
                    <Card.Title
                      className="bg-dark text-white text-center"
                      style={{ fontSize: "20px" }}
                    >
                      Technologies Used
                    </Card.Title>
                    <Card.Text
                      className="bg-light text-black"
                      style={{ fontSize: "16px" }}
                    >
                      <ul style={{ textAlign: "left" }}>
                        <li>Heroku</li>
                        <li>PSQL</li>
                        <li>Express</li>
                        <li>Ruby on Rails</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  className="border-0"
                  style={
                    {
                      // backgroundColor: "lightpink",
                    }
                  }
                >
                  <Card.Body>
                    <Card.Title
                      className="bg-dark text-white text-center"
                      style={{ fontSize: "2rem" }}
                    >
                      Demo
                    </Card.Title>
                    <Card.Text>
                      <iframe
                        width="100%"
                        height="400vh"
                        src="https://www.youtube.com/embed/-4O2LioAjK8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        style={{ borderRadius: "10px" }}
                      ></iframe>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              ""
            )}
            {selectedItem === "MusiSpace" ? (
              <Col
                md={12}
                style={{
                  backgroundColor: "#D3D3D3",
                  // height: "100%",
                }}
              >
                <Card
                  className="border-0"
                  style={{
                    backgroundColor: "#D3D3D3",
                    marginTop: "3vh",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      className="bg-dark text-white text-center"
                      style={{ fontSize: "22px" }}
                    >
                      What is {selectedItem}?
                    </Card.Title>
                    <Card.Text
                      className="bg-light text-black"
                      style={{ fontSize: "16px" }}
                    >
                      MusiSpace is a place where users can easily share the
                      music they love. By simply creating an account and
                      following their friends, they can view all music that both
                      they and their friends share. Engineered a backend using
                      Ruby on Rails and PSQL to provide user verification and
                      save users’ posts and comments. Built and designed a
                      responsive front-end using a mix of Ruby and ReactJS.
                      Continuously iterated and deployed updates to Heroku.
                    </Card.Text>
                    <Card.Title
                      className="bg-dark text-white text-center"
                      style={{ fontSize: "20px" }}
                    >
                      Technologies Used
                    </Card.Title>
                    <Card.Text
                      className="bg-light text-black"
                      style={{ fontSize: "16px" }}
                    >
                      <ul style={{ textAlign: "left" }}>
                        <li>Heroku</li>
                        <li>PSQL</li>
                        <li>Express</li>
                        <li>Ruby on Rails</li>
                        <li>YouTube API</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ) : (
              ""
            )}
          </Modal.Body>
          <Modal.Footer style={{ borderTop: "1px solid #3D3D3D" }}>
            <Button variant="dark" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Test;
