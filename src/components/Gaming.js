import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";

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

  const loadGames = async () => {
    try {
      const response = await fetch(
        "//" + window.location.hostname + ":5000/games"
      );
      const data = await response.json();
      if (data && data.length > 0) {
        setRecentGames(data);
      } else {
        setRecentGames(dummyGames);
      }
    } catch (error) {
      console.error("Failed to fetch games, using dummy data", error);
      setRecentGames(dummyGames);
    }
  };
  useEffect(() => {
    loadGames();
  }, []);

  const handleCarouselClick = (e) => {
    if (isHovering) return; // Prevent scrolling if hovering over the item

    const carouselElement = e.currentTarget;
    const clickX = e.clientX - carouselElement.getBoundingClientRect().left;

    if (clickX < carouselElement.offsetWidth / 2) {
      // Previous slide if clicked on the left side
      carouselRef.current.prev();
    } else {
      // Next slide if clicked on the right side
      carouselRef.current.next();
    }
  };

  return (
    <div className="bg-dark text-light" style={{ minHeight: "75vh" }}>
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
            <Card className="bg-dark text-light align-items-center border-0">
              <Card.Body>
                <Card.Title className="text-center">{game.name}</Card.Title>
                <Card.Img
                  src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/capsule_616x353.jpg`}
                  style={{
                    width: "50%",
                    height: "auto",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <Card.Text className="mt-3">{game.description}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gaming;
