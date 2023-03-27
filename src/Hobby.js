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
      <p style={{
        textAlign: "left",
        backgroundColor: "lightblue"
      }}>
        I plan to talk about my many hobbies on this page, including cycling,
        weight lifting, videogames, and all things IT. Over the years, I've tried a huge number of sports, including swimming, water polo, fencing, baseball, and fencing, but of all of the sports I've done, the one that has made the largest impact in my life is cycling.
      </p>
    </Container>
  );
}
