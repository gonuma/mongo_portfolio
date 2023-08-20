import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    <Card className="mt-4">
      <Card.Header className="bg-dark text-white">Certifications</Card.Header>
      <Card.Body>
        <ol>
          <li>Cisco CCNA</li>
          <li>Japanese Language Proficiency Exam Level 1</li>
          {/* Add more certifications as needed */}
        </ol>
      </Card.Body>
    </Card>;
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const customModalStyle = {
    position: "fixed",
    top: "5%",
    left: "5%",
    right: "5%",
    bottom: "5%",
    zIndex: 1050,
    overflowY: "auto",
  };

  return (
    <>
      <Container
        fluid
        className="vh-100 d-flex flex-column text-center"
        // style={{ justifyContent: "space-between" }}
      >
        {/* Top Row */}
        <Row className="mt-3">
          <Col
            className="m-auto align-self-center d-flex"
            xs={12}
            // xl={6}
            style={
              {
                // backgroundColor: "lightblue",
                // height: "100%",
              }
            }
          >
            <Card
              className="border-0 m-auto align-self-center"
              style={
                {
                  // marginLeft: "auto",
                  // marginRight: "auto",
                }
              }
            >
              <Card.Body>
                <Card.Title
                  className="bg-dark text-white text-center pb-3"
                  style={{ fontSize: "3rem" }}
                >
                  Greg Edmondson
                </Card.Title>
                <Card.Subtitle
                  className="mb-3 text-muted text-center"
                  style={{ fontSize: "2.5rem" }}
                >
                  IT Professional
                </Card.Subtitle>
                <Card.Text
                  className=""
                  style={{
                    fontSize: "1.5rem",
                    //  textAlign: "left"
                  }}
                >
                  📧 GregEdmondson95@gmail.com <br></br> 🏠 Chofu, Tokyo, Japan
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xs={12}
            // md={6}
            style={{
              backgroundColor: "#D3D3D3",
              // paddingBottom: "-5vh",
            }}
          >
            <Image
              fluid
              roundedCircle={true}
              style={{
                marginTop: "2vh",
                marginBottom: "1vh",
                maxWidth: "15%",
                height: "auto",
              }}
              src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
            />
            <Col
              style={{
                color: "black",
                fontStyle: "italic",
                textAlign: "center",
                borderTop: "2px dotted black",
                borderBottom: "2px dotted black",
                marginLeft: "2vw",
                marginRight: "2vw",
                paddingLeft: "2vw",
                paddingRight: "2vw",
                // paddingBottom: "2vh",
                marginBottom: "2vh",
              }}
            >
              The best time to plant a tree was 20 years ago. The second best
              time is now.
            </Col>
          </Col>
        </Row>

        {/* Bottom Row */}
        <Row className="d-flex" style={{ maxHeight: "%" }}>
          <Card
            className="border-0 m-auto align-self-center"
            style={
              {
                // marginLeft: "auto",
                // marginRight: "auto",
              }
            }
          >
            <Card.Body>
              <Card.Title
                className="bg-dark text-white text-center"
                style={{ fontSize: "3rem" }}
              >
                Projects
              </Card.Title>
              <ListGroup>
                <ListGroup.Item
                  action
                  onClick={() => handleItemClick("Senpai")}
                >
                  Senpai
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  onClick={() => handleItemClick("Collabspace")}
                >
                  CollabSpace
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  onClick={() => handleItemClick("MusiSpace")}
                >
                  MusiSpace
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Header className="bg-dark text-white">
              Certifications
            </Card.Header>
            <Card.Body>
              <ol style={{ textAlign: "left" }}>
                <li>Cisco CCNA</li>
                <li>Japanese Language Proficiency Exam Level 1</li>
                {/* Add more certifications as needed */}
              </ol>
            </Card.Body>
          </Card>

          {/* Modal to display project descriptions over the page */}
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            style={customModalStyle}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                        style={{ fontSize: "2.2rem" }}
                      >
                        What is {selectedItem}?
                      </Card.Title>
                      <Card.Text
                        className="bg-light"
                        style={{ fontSize: "16px" }}
                      >
                        Senpai provides users a platform to purchase remote
                        programming tutoring. Pairing live video chat and a
                        collaborative IDE, users can pair program with a tutor -
                        a Senpai. Many technologies were used, including
                        MongoDB, Express, and ReactJS. User authentication is
                        performed with Firebase, while payments and
                        price-setting are available through Stripe. The frontend
                        was built using Material UI. Published new iterations
                        and updates using Docker and GCP.
                      </Card.Text>
                      <Card.Title
                        className="bg-dark text-white text-center"
                        style={{ fontSize: "2rem" }}
                      >
                        Technologies Used
                      </Card.Title>
                      <Card.Text
                        className="bg-light"
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
                        className="bg-light"
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
                        className="bg-light"
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
                        className="bg-light"
                        style={{ fontSize: "16px" }}
                      >
                        MusiSpace is a place where users can easily share the
                        music they love. By simply creating an account and
                        following their friends, they can view all music that
                        both they and their friends share. Engineered a backend
                        using Ruby on Rails and PSQL to provide user
                        verification and save users’ posts and comments. Built
                        and designed a responsive front-end using a mix of Ruby
                        and ReactJS. Continuously iterated and deployed updates
                        to Heroku.
                      </Card.Text>
                      <Card.Title
                        className="bg-dark text-white text-center"
                        style={{ fontSize: "20px" }}
                      >
                        Technologies Used
                      </Card.Title>
                      <Card.Text
                        className="bg-light"
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
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    </>
  );
};

export default Home;
