import React, { useState, useEffect } from "react";
import { Card, Carousel, Container } from "react-bootstrap";

const Gaming = () => {
  const [recentGames, setRecentGames] = useState([]);
  const carouselRef = React.useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const dummyGames = [
    {
      name: "Lego Lord of the Rings",
      appid: "214510",
      description:
        "Based on The Lord of the Rings motion picture trilogy, LEGO® The Lord of the Rings follows the original story-lines of The Lord of the Rings: The Fellowship of the Ring, The Lord of the Rings: The Two Towers, and The Lord of the Rings: The Return of the King",
    },
    {
      name: "The Elder Scrolls V: Skyrim Special Edition",
      appid: "489830",
      description:
        "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more.",
    },
  ];

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await fetch(
          "//" + window.location.hostname + ":5000/games"
        );
        const data = await response.json();
        setRecentGames(data.length ? data : dummyGames);
      } catch (error) {
        console.error("Failed to fetch games, using dummy data", error);
        setRecentGames(dummyGames);
      }
    };

    loadGames();
  }, []);

  const handleCarouselClick = (e) => {
    if (isHovering) return;

    const clickX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    if (clickX < e.currentTarget.offsetWidth / 2) {
      carouselRef.current.prev();
    } else {
      carouselRef.current.next();
    }
  };

  return (
    <Container fluid className="text-white py-5">
      <h1 className="text-center py-3">My Recent Games</h1>
      <Carousel
        indicators={false}
        ref={carouselRef}
        onClick={handleCarouselClick}
      >
        {recentGames.map((game) => (
          <Carousel.Item
            key={game.name}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Card className="game-card">
              <Card.Body>
                <Card.Title className="text-center">{game.name}</Card.Title>
                <Card.Img
                  className="game-card-img"
                  src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/capsule_616x353.jpg`}
                />
                <Card.Text className="mt-3">{game.description}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Gaming;
