import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Image,
  Container,
  Row,
  Col,
  Carousel,
  Card,
  Modal,
  ListGroup,
} from "react-bootstrap";

const Music = () => {
  const [artists, setArtists] = useState([]);
  const [refreshToken, setRefreshToken] = useState("");
  const [isLoading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [selectedDecade, setSelectedDecade] = useState("");
  const [songs, setSongs] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState("");

  const DECADE_SONGS = {
    "60s": [
      { title: "Light My Fire", videoId: "qoX6AKuYWL8" },
      { title: "California Dreamin'", videoId: "N-aK6JnyFmk" },
    ],
    "70s": [
      { title: "A Horse with No Name", videoId: "na47wMFfQCo" },
      { title: "Don't Stop Me Now", videoId: "HgzGwKwLmgM" },
    ],
    "80s": [
      { title: "Take On Me", videoId: "djV11Xbc914" },
      { title: "Purple Rain", videoId: "TvnYmWpD_T8" },
    ],
    "90s": [
      { title: "Don't Look Back In Anger", videoId: "r8OipmKFDeM" },
      { title: "Virtual Insanity", videoId: "4JkIs37a2JE" },
      { title: "Killing in the Name", videoId: "bWXazVhlyxQ" },
      { title: "Black Hole Sun", videoId: "3mbBbFH9fAg" },
      { title: "...Baby One More Time", videoId: "C-u5WLJ9Yk4" },
      { title: "Semi-Charmed Life", videoId: "beINamVRGy4" },
    ],
    "00s": [
      { title: "Britney Spears - Toxic", videoId: "LOZuxwVk7TU" },
      { title: "Backstreet Boys - I want It That Way", videoId: "4fndeDfaWCg" },
      { title: "Ocean Avenue", videoId: "X9fLbfzCqWw" },
      { title: "Viva La Vida", videoId: "dvgZkm1xWPE" },
      { title: "Feel Good Inc.", videoId: "HyHNuVaZJ-k" },
    ],
  };

  let token = [refreshToken[0]];

  // Load Refresh Token
  const getRefreshToken = async () => {
    const response = await axios.get(
      "//" + window.location.hostname + ":5000/spotify-refresh"
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

  const handleButtonClick = (decade) => {
    setSelectedDecade(decade);
    const selectedSongs = DECADE_SONGS[decade];
    setSongs(selectedSongs);
    setCurrentVideoId(selectedSongs[0].videoId);
    setShowModal(true);
  };

  const handleSongClick = (videoId) => {
    setCurrentVideoId(videoId);
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
        <h1>Loading...</h1>
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
            color: "white",
          }}
        >
          <p>
            I listen to a large variety of music, and I'm not too bad at
            karaoke.
          </p>
        </div>
        <Row className="justify-content-md-center mt-3">
          {Object.keys(DECADE_SONGS).map((decade) => (
            <Col xs="auto" key={decade}>
              <Button
                variant="primary"
                onClick={() => handleButtonClick(decade)}
              >
                {decade}
              </Button>
            </Col>
          ))}
        </Row>

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="xl"
          centered
        >
          {" "}
          <Modal.Header closeButton>
            <Modal.Title>Songs from the {selectedDecade}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <ListGroup>
                  {songs.map((song, index) => (
                    <ListGroup.Item
                      key={index}
                      onClick={() => handleSongClick(song.videoId)}
                      style={{ cursor: "pointer" }}
                      className="interactive-song-title"
                    >
                      {song.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
              <Col md={6}>
                {currentVideoId && (
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${currentVideoId}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <h1>Greg's Top Artists...</h1>
          </div>
          <Carousel>
            {artists.map((artist) => {
              // console.log(artist.name);
              // console.log(artist.images[2].url);
              return (
                <Carousel.Item key={`${artist.name}`}>
                  <Col
                    fluid
                    className="align-items-center"
                    style={{
                      maxHeight: "65vh",
                      maxWidth: "100vw",
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
                        height: "65vh",
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
