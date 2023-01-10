import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container>
      <Image
        fluid
        rounded
        style={{ height: "50vh", display: "block", margin: "auto" }}
        src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
      />
    </Container>
  );
};

export default Home;
