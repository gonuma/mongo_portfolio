import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Container,
  Row,
  Col,
  Carousel,
  Modal,
  ListGroup,
} from "react-bootstrap";

const Music = () => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedDecade, setSelectedDecade] = useState("");
  const [songs, setSongs] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const carouselRef = React.useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const decadeSongs = {
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

  const dummyArtists = [
    {
      name: "Pink Floyd",
      images: [
        {
          url: "https://i.scdn.co/image/e69f71e2be4b67b82af90fb8e9d805715e0684fa",
        },
      ],
    },
    {
      name: "Led Zeppelin",
      images: [
        {
          url: "https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e",
        },
      ],
    },
    {
      name: "Megadeth",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb79058c0b634631533ed40b22",
        },
      ],
    },
    {
      name: "Kendrick Lamar",
      images: [
        {
          url: "https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022",
        },
      ],
    },
  ];

  const handleSongClick = (videoId) => {
    setCurrentVideoId(videoId);
  };

  const handleCarouselClick = (e) => {
    if (isHovering) return;

    const carouselElement = e.currentTarget;
    const clickX = e.clientX - carouselElement.getBoundingClientRect().left;

    if (clickX < carouselElement.offsetWidth / 2) {
      carouselRef.current.prev();
    } else {
      carouselRef.current.next();
    }
  };

  const handleButtonClick = (decade) => {
    setSelectedDecade(decade);
    setSongs(decadeSongs[decade]);
    setCurrentVideoId(decadeSongs[decade][0].videoId);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenResponse = await fetch(
          "//" + window.location.hostname + ":5000/spotify-refresh"
        );
        const tokenData = await tokenResponse.json();

        const artistResponse = await fetch(
          "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5",
          {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + tokenData.access_token,
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
        const artistData = await artistResponse.json();

        if (artistData && artistData.items && artistData.items.length > 0) {
          setArtists(artistData.items);
        } else {
          setArtists(dummyArtists);
        }
      } catch (error) {
        console.error("Failed to fetch data. Using dummy data.", error);
        setArtists(dummyArtists);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Container className="text-white text-center py-5">
        <h1>Loading...</h1>
      </Container>
    );
  }

  return (
    <Container fluid className="text-white py-5">
      <Row className="justify-content-center mb-4">
        <h2 className="text-center">
          Check out some of my favorite songs from the past 50 years.
        </h2>
      </Row>
      <Row className="justify-content-md-center mb-4">
        {Object.keys(decadeSongs).map((decade) => (
          <Col xs="auto" key={decade} className="m-2">
            <Button
              variant="light"
              onClick={() => handleButtonClick(decade)}
              style={{
                fontSize: "1.2rem",
                border: "2px solid #fff",
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.4)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0px 0px 20px rgba(255, 255, 255, 0.6)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0px 0px 15px rgba(255, 255, 255, 0.4)";
              }}
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
        className="text-dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Greg's Top Songs from the {selectedDecade}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <ListGroup variant="flush">
                {songs.map((song, index) => (
                  <ListGroup.Item
                    key={index}
                    onClick={() => handleSongClick(song.videoId)}
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

      <Row className="justify-content-center mb-4">
        <h1 className="text-center">Greg's Top Recent Artists on Spotify...</h1>
      </Row>
      <Row>
        <Carousel
          indicators={false}
          ref={carouselRef}
          onClick={handleCarouselClick}
        >
          {artists.map((artist) => (
            <Carousel.Item
              key={`${artist.name}`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="carousel-item-container">
                <Image
                  className="carousel-image"
                  src={artist.images[0].url}
                  alt={artist.name}
                />
                <div className="carousel-caption-container">
                  <Carousel.Caption>{artist.name}</Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
};

export default Music;
