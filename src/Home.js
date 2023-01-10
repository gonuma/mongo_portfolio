import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <Container>
      <Image
        fluid
        style={{
          height: "50vh",
          padding: "1vh",
          borderRadius: "25px",
          display: "block",
          margin: "auto",
        }}
        src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/cowboy.JPG"
      />
    </Container>
  );
};

export default Home;
