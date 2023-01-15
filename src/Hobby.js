import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function Hobby() {
  return (
    <Container>
      <Image
        fluid
        style={{
          maxHeight: "50vh",
          maxWidth: "90vw",
          padding: "1vh",
          display: "block",
          margin: "auto",
        }}
        src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/bike.jpg"
      />
      <p>
        I plan to talk about my many hobbies on this page, including cycling,
        weight lifting, videogames, and electronics.
      </p>
    </Container>
  );
}
