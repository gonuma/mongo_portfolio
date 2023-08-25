import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";

const Gaming = () => {
  const [recentGames, setRecentGames] = useState([]);

  const loadGames = async () => {
    await fetch("//" + window.location.hostname + ":5000/games")
      .then((res) => res.json())
      .then((data) => {
        setRecentGames(data);
      });
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
      <h1 className="text-center py-3">My Recent Games</h1>
      <Carousel indicators={false}>
        {recentGames.map((game) => (
          <Carousel.Item key={game.name}>
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
