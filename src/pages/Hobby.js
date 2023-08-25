import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Image,
  Container,
  Tab,
  Tabs,
  Button,
  Card,
  Row,
  Col,
  Carousel,
  CarouselItem,
  ProgressBar,
  Modal,
  ListGroup,
} from "react-bootstrap";
import Cycling from "../components/Cycling.js";
import Running from "../components/Running.js";
import Lifting from "../components/Lifting.js";
import Music from "../components/Music.js";
import Gaming from "../components/Gaming.js";
import "../styles/App.css";

export default function Hobby() {
  const [activeTab, setActiveTab] = useState("cycling");
  // const [recentGames, setRecentGames] = useState([]);

  // const loadGames = async () => {
  //   await fetch("//" + window.location.hostname + ":5000/games")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRecentGames(data);
  //     });
  // };

  // useEffect(() => {
  //   loadGames();
  // }, []);

  return (
    <Container
      fluid
      className="d-flex flex-column py-3"
      style={{
        backgroundColor: "#2C2C2C",
        marginTop: "1vh",
        minHeight: "100vh",
      }}
    >
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        id="uncontrolled-tab-example"
        className="mb-3 text-white"
      >
        <Tab
          eventKey="cycling"
          title="Cycling"
          className={activeTab === "cycling" ? "tab-active" : "tab-hover"}
        >
          <Cycling />
        </Tab>
        <Tab
          eventKey="running"
          title="Running"
          className={activeTab === "running" ? "tab-active" : "tab-hover"}
        >
          <Running />
        </Tab>

        <Tab
          eventKey="lifting"
          title="Weight Lifting"
          className={activeTab === "lifting" ? "tab-active" : "tab-hover"}
        >
          <Lifting />
        </Tab>
        <Tab
          eventKey="music"
          title="Music"
          className={activeTab === "music" ? "tab-active" : "tab-hover"}
        >
          <Music />
        </Tab>
        <Tab
          eventKey="gaming"
          title="Gaming"
          className={activeTab === "gaming" ? "tab-active" : "tab-hover"}
        >
          <Gaming />
        </Tab>
        {/* <Tab
          eventKey="gaming"
          title="Gaming"
          className={activeTab === "gaming" ? "tab-active" : "tab-hover"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            I play a lot of videogames. I've implemented the Steam Web API and
            web scraping to programatically fetch my most recently played games,
            and a little supplemental info on them.
          </div>
          <Button onClick={() => console.log(recentGames)}>Game List</Button>
          <Carousel>
            {recentGames.map((game, index) => {
              return (
                <CarouselItem key={`${game.name}`}>
                  <Card className="align-items-center border-0">
                    <Card.Body>
                      <Card.Title className="text-center">
                        {game.name}
                      </Card.Title>
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
                      <Card.Text>{game.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </CarouselItem>
              );
            })}
          </Carousel>
        </Tab> */}
      </Tabs>
    </Container>
  );
}
