import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Container
        fluid
        className="vh-100 d-flex flex-column text-center"
        // style={{ justifyContent: "space-between" }}
      >
        {/* Top Row */}
        <Row
        // className="d-flex"
        >
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
                  className="bg-dark text-white text-center"
                  style={{ fontSize: "4rem" }}
                >
                  Greg Edmondson
                </Card.Title>
                <Card.Subtitle
                  className="mb-3 text-muted text-center"
                  style={{ fontSize: "3rem" }}
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
          <Col
            md={12}
            lg={6}
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
                  Senpai
                </Card.Title>
                <Card.Text className="bg-light" style={{ fontSize: "16px" }}>
                  Senpai provides users a platform to purchase remote
                  programming tutoring. Pairing live video chat and a
                  collaborative IDE, users can pair program with a tutor - a
                  Senpai. Many technologies were used, including MongoDB,
                  Express, and ReactJS. User authentication is performed with
                  Firebase, while payments and price-setting are available
                  through Stripe. The frontend was built using Material UI.
                  Published new iterations and updates using Docker and GCP.
                </Card.Text>
                <Card.Title
                  className="bg-dark text-white text-center"
                  style={{ fontSize: "20px" }}
                >
                  Technologies Used
                </Card.Title>
                <Card.Text className="bg-light" style={{ fontSize: "16px" }}>
                  <ul style={{ textAlign: "left" }}>
                    <li>GCP</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>ReactJS</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            className="m-auto align-self-center"
            md={12}
            lg={6}
            style={
              {
                // backgroundColor: "lightblue"
              }
            }
          >
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
                  ></iframe>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col
            xs={12}
            md={6}
            style={
              {
                // backgroundColor: "lightblue"
              }
            }
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/O5HU8BrGvJQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col> */}
        </Row>
        {/* <Row fluid style={{ position: "relative" }} className="h-50"></Row> */}
      </Container>
    </>
    // <Container
    //   fluid
    //   className="vh-100 d-flex flex-column"
    //   style={{
    //     justifyContent: "space-between",
    //     // backgroundColor: "black",
    //   }}
    // >
    //   <Row fluid className="h-50" style={{}}>
    //     <Col sm={12} md={6} style={{}}>
    // <Card
    //   style={{
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //   }}
    // >
    //   <Card.Body>
    //     <Card.Title
    //       className="bg-dark text-white text-center"
    //       style={{ fontSize: "2rem" }}
    //     >
    //       Greg Edmondson
    //     </Card.Title>
    //     <Card.Subtitle
    //       className="mb-3 text-muted text-center"
    //       style={{ fontSize: "1.5rem" }}
    //     >
    //       IT Professional
    //     </Card.Subtitle>
    //     <Card.Text className="" style={{ fontSize: "1.2rem" }}>
    //       📧 GregEdmondson95@gmail.com <br></br> 🏠 Chofu, Tokyo, Japan
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    //     </Col>
    //     <Col sm={12} md={6} style={{ backgroundColor: "#D3D3D3" }}>
    //       <Col className="text-center">
    //         {" "}
    // <Image
    //   fluid
    //   roundedCircle={true}
    //   style={{
    //     marginTop: "2vh",
    //     marginBottom: "1vh",
    //     width: "30%",
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //   }}
    //   src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
    // />
    // <Col
    //   style={{
    //     color: "black",
    //     fontStyle: "italic",
    //     textAlign: "center",
    //     borderTop: "2px dotted black",
    //     borderBottom: "2px dotted black",
    //     marginLeft: "2vw",
    //     marginRight: "2vw",
    //     paddingLeft: "2vw",
    //     paddingRight: "2vw",
    //   }}
    // >
    //   The best time to plant a tree was 20 years ago. The second best
    //   time is now.
    // </Col>
    //       </Col>
    //     </Col>
    //   </Row>

    //   <Row fluid className="h-50" style={{}}>
    //     <Col
    //       sm={12}
    //       md={6}
    //       style={{
    //         backgroundColor: "#D3D3D3",
    //       }}
    //     >
    // <Card
    //   className="border-0"
    //   style={{
    //     backgroundColor: "#D3D3D3",
    //     marginTop: "3vh",
    //   }}
    // >
    //   <Card.Body>
    //     <Card.Title
    //       className="bg-dark text-white text-center"
    //       style={{ fontSize: "22px" }}
    //     >
    //       Senpai
    //     </Card.Title>
    //     <Card.Text className="bg-light" style={{ fontSize: "16px" }}>
    //       Senpai provides users a platform to purchase remote programming
    //       tutoring. Pairing live video chat and a collaborative IDE, users
    //       can pair program with a tutor - a Senpai. Many technologies were
    //       used, including MongoDB, Express, and ReactJS. User
    //       authentication is performed with Firebase, while payments and
    //       price-setting are available through Stripe. The frontend was
    //       built using Material UI. Published new iterations and updates
    //       using Docker and GCP.
    //     </Card.Text>
    //   </Card.Body>
    // </Card>
    //     </Col>
    //     <Col sm={12} md={6} style={{}}>
    // <iframe
    //   width="100%"
    //   height="100%"
    //   src="https://www.youtube.com/embed/DLzxrzFCyOs"
    //   title="YouTube video player"
    //   frameborder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //   allowfullscreen
    // ></iframe>
    //     </Col>
    //   </Row>
    // </Container>
    //Leaving this now to go back and add back in, or to possibly use the carousel...
    // <Container fluid style={{ backgroundColor: "white", height: "94.8vh" }}>
    //   <Row
    //     style={{
    //       padding: "1vh",
    //       backgroundColor: "#D3D3D3",
    //       marginLeft: "1vw",
    //       marginRight: "1vw",
    //     }}
    //   >
    //     <Col
    //       xs={18}
    //       md={6}
    //       style={{
    //         display: "flex",
    //         marginLeft: "auto",
    //         marginRight: "auto",
    //       }}
    //     >

    //     </Col>
    //     <Col xs={12} md={3} style={{}}>
    //     </Col>
    //   </Row>
    //   <Row
    //     style={{
    //       padding: "1vh",
    //       backgroundColor: "black",
    //     }}
    //   >
    //   </Row>
    //   <Row
    //     fluid
    //     style={{
    //       backgroundColor: "#D3D3D3",
    //       padding: "1vh",
    //       marginLeft: "1vw",
    //       marginRight: "1vw",
    //     }}
    //   >
    //     <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
    //       <Carousel.Item>
    //         <Card
    //           style={{
    //             backgroundColor: "#D3D3D3",
    //           }}
    //         >
    //           <Card.Body>
    //             <Card.Text className="" style={{ fontSize: "1.2rem" }}>
    //               Having moved to Japan at the age of 20, I have worked in a
    //               number of industries. I began my journey in Japan as many do,
    //               as an English teacher. The frozen north didn't work for my hot Las Vegas blood...
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Card
    //           style={{
    //             backgroundColor: "#D3D3D3",
    //           }}
    //         >
    //           <Card.Body>
    //             <Card.Text className="" style={{ fontSize: "1.2rem" }}>
    //               Code Chrysalis was a flurry of learning. I had never written a
    //               single line of code before, and here I was taking a course to
    //               learn full-stack programming. Every day we were studying new
    //               technologies, including data-structures, GraphQL, SQL
    //               databases, React, Node, containers, and a little sprinkle of
    //               Ruby for good measure.
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Carousel.Item>
    //     </Carousel>
    //   </Row>
    //   <Row
    //     style={{
    //       padding: "1vh",
    //       backgroundColor: "black",
    //     }}
    //   >
    //     <Col style={{ color: "white", textAlign: "center" }}>
    //       <h1>Projects</h1>
    //     </Col>
    //   </Row>
    //   <Row
    //     fluid
    //     style={{
    //       backgroundColor: "#D3D3D3",
    //       height: "23vh",
    //       padding: "1vh",
    //       marginLeft: "1vw",
    //       marginRight: "1vw",
    //     }}
    //   >
    //     <Carousel pause="hover" controls={true} indicators={false}>
    //       <Carousel.Item>
    //         <Row style={{ textAlign: "center" }}>
    //           <h1>MusiSpace</h1>
    //           <p style={{}}>
    //             MusiSpace is a place where users can easily share the music they
    //             love. By simply creating an account and following their friends,
    //             they can view all music that both they and their friends share.
    //             Engineered a backend using Ruby on Rails and PSQL to provide
    //             user verification and save users’ posts and comments. Built and
    //             designed a responsive front-end using a mix of Ruby and ReactJS.
    //             Continuously iterated and deployed updates to Heroku.
    //           </p>
    //         </Row>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Row style={{ textAlign: "center" }}>
    //           <h1>CollabSpace</h1>
    //           <p style={{}}>
    //             For this project, I teamed up with a group of talented
    //             programmers for a four day sprint. We wanted to create a space
    //             for users to collaborate remotely, using the Vonage/OpenTok
    //             video API and Google Drive. Created a backend using Knex, PSQL,
    //             and Express to allow simple seeding and migration of our
    //             database, user authentication, and Google Drive document
    //             customization. Integrated video/voice chat into a frontend that
    //             we created using ReactJS
    //           </p>
    //         </Row>
    //       </Carousel.Item>
    //       {/* <Carousel.Item>
    //         <Row style={{ textAlign: "center" }}>
    //           <h1>Senpai</h1>
    //           <p style={{}}>
    //             Senpai provides users with a single platform to pay for and
    //             purchase programming tutoring using Stripe, video chat, and pair
    //             program with senior or budding programmers. Senpai was built
    //             around a REST API with MongoDB, Express, React, and Node.js.
    //             Created a robust backend using MongoDB, Express, Stripe, and
    //             Firebase, allowing users authentication, saving user data, and
    //             user-generated products with custom prices. Built an intuitive
    //             frontend using ReactJS and Material UI. Continuously iterated
    //             and deployed software using Docker and GCP.
    //           </p>
    //         </Row>
    //       </Carousel.Item> */}
    //       <Carousel.Item>
    //         <Row style={{ textAlign: "center" }}>
    //         </Row>
    //       </Carousel.Item>
    //     </Carousel>
    //   </Row>
    // </Container>
  );
};

export default Home;
