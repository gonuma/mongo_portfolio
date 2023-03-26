import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

const Music = () => {
  const [artists, setArtists] = useState([]);
  const [refreshToken, setRefreshToken] = useState("");
  const [isLoading, setLoading] = useState(true);
  let token = [refreshToken[0]];

  // Load Refreshed Token
  const getRefreshToken = async () => {
    const response = await axios.get(
        "//" +
        window.location.hostname +
        ":5000/refresh"
    );
    setRefreshToken(response.data.access_token);
  };

  // Load Top Artists
  const loadArtists = async () => {
    await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5",
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + refreshToken,
          "Content-Type": "application/json",
        },
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setArtists(data.items))
      .then(setLoading(false));
  };

  useEffect(() => {
    getRefreshToken();
  }, []);
  useEffect(() => {
    loadArtists();
  }, token);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>;
      </div>
    );
  } else if (artists && artists.length > 0) {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Greg's Top Artists...</h1>
        </div>
        <Row>
          <Carousel>
            {artists.map((artist) => {
              console.log(artist.name);
              console.log(artist.images[2].url);
              return (
                <Carousel.Item>
                  <Col
                    fluid
                    className="align-items-center"
                    style={{
                      maxHeight: "50vh",
                      maxWidth: "90vw",
                      padding: "1vh",
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    <Image
                      style={{
                        display: "flex",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "50vh",
                      }}
                      src={artist.images[0].url}
                    />
                    <Carousel.Caption>{artist.name}</Carousel.Caption>
                  </Col>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Row>
      </Container>
    );
  }
};

export default Music;
