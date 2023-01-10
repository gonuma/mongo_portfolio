import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function Hobby() {
  return (
    <Container>
      <Image
        fluid
        style={{
          height: "50vh",
          padding: "1vh",
          display: "block",
          margin: "auto",
        }}
        src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/bike.jpg"
      />
    </Container>
  );
}
