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
import "../styles/App.css";

export default function Hobby() {
  // const [activities, setActivities] = useState([]);
  // const [totalDistanceCycling, setTotalDistanceCycling] = useState(0);
  // const [yearlyDistanceCycling, setYearlyDistanceCycling] = useState(0);
  // const [totalDistanceRunning, setTotalDistanceRunning] = useState(0);
  // const [yearlyDistanceRunning, setYearlyDistanceRunning] = useState(0);
  // const [sessions, setSessions] = useState(0);
  const [recentGames, setRecentGames] = useState([]);
  const [activeTab, setActiveTab] = useState("cycling");
  // const [showModal, setShowModal] = useState(false);
  // const [selectedDecade, setSelectedDecade] = useState("");
  // const [songs, setSongs] = useState([]);
  // const [currentVideoId, setCurrentVideoId] = useState("");

  // const DECADE_SONGS = {
  //   "60s": [
  //     { title: "Light My Fire", videoId: "qoX6AKuYWL8" },
  //     { title: "California Dreamin'", videoId: "N-aK6JnyFmk" },
  //   ],
  //   "70s": [
  //     { title: "A Horse with No Name", videoId: "na47wMFfQCo" },
  //     { title: "Don't Stop Me Now", videoId: "HgzGwKwLmgM" },
  //   ],
  //   "80s": [
  //     { title: "Take On Me", videoId: "djV11Xbc914" },
  //     { title: "Purple Rain", videoId: "TvnYmWpD_T8" },
  //   ],
  //   "90s": [
  //     { title: "Don't Look Back In Anger", videoId: "r8OipmKFDeM" },
  //     { title: "Virtual Insanity", videoId: "4JkIs37a2JE" },
  //     { title: "Killing in the Name", videoId: "bWXazVhlyxQ" },
  //     { title: "Black Hole Sun", videoId: "3mbBbFH9fAg" },
  //     { title: "...Baby One More Time", videoId: "C-u5WLJ9Yk4" },
  //     { title: "Semi-Charmed Life", videoId: "beINamVRGy4" },
  //   ],
  //   "00s": [
  //     { title: "Britney Spears - Toxic", videoId: "LOZuxwVk7TU" },
  //     { title: "Backstreet Boys - I want It That Way", videoId: "4fndeDfaWCg" },
  //     { title: "Ocean Avenue", videoId: "X9fLbfzCqWw" },
  //     { title: "Viva La Vida", videoId: "dvgZkm1xWPE" },
  //     { title: "Feel Good Inc.", videoId: "HyHNuVaZJ-k" },
  //   ],
  // };

  // const handleButtonClick = (decade) => {
  //   setSelectedDecade(decade);
  //   const selectedSongs = DECADE_SONGS[decade];
  //   setSongs(selectedSongs);
  //   setCurrentVideoId(selectedSongs[0].videoId);
  //   setShowModal(true);
  // };

  // const handleSongClick = (videoId) => {
  //   setCurrentVideoId(videoId);
  // };

  const loadGames = async () => {
    await fetch("//" + window.location.hostname + ":5000/games")
      .then((res) => res.json())
      .then((data) => {
        setRecentGames(data);
      });
  };

  // const loadActivities = async () => {
  //   await fetch("//" + window.location.hostname + ":5000/activities")
  //     .then((res) => res.json())
  //     .then((data) => setActivities(data));
  // };

  // const cyclingDistanceCalculator = async () => {
  //   let tempActivities = await activities;
  //   let tempTotalDistance = 0;
  //   let tempYearlyDistance = 0;

  //   tempActivities.map((activity) => {
  //     if (activity.type === "Ride") {
  //       tempTotalDistance += activity.distance;
  //       if (new Date(activity.startDate) >= new Date("2023-01-01T00:00:00")) {
  //         tempYearlyDistance += activity.distance;
  //       }
  //     }
  //   });
  //   setTotalDistanceCycling(tempTotalDistance / 1000); // Convert distance from meters to kilometers
  //   setYearlyDistanceCycling(tempYearlyDistance / 1000); // Convert distance from meters to kilometers
  // };

  // const runningDistanceCalculator = async () => {
  //   let tempActivities = await activities;
  //   let tempTotalDistance = 0;
  //   let tempYearlyDistance = 0;

  //   tempActivities.map((activity) => {
  //     if (activity.type === "Run") {
  //       tempTotalDistance += activity.distance;
  //       if (new Date(activity.startDate) >= new Date("2023-01-01T00:00:00")) {
  //         tempYearlyDistance += activity.distance;
  //       }
  //     }
  //   });
  //   setTotalDistanceRunning(tempTotalDistance / 1000); // Convert distance from meters to kilometers
  //   setYearlyDistanceRunning(tempYearlyDistance / 1000); // Convert distance from meters to kilometers
  // };

  // const sessionCalculator = async () => {
  //   let tempActivities = await activities;
  //   let tempSessions = 0;

  //   tempActivities.map((activity) => {
  //     if (activity.type === "WeightTraining") {
  //       tempSessions += 1;
  //     }
  //   });
  //   setSessions(tempSessions);
  // };

  // useEffect(() => {
  //   loadActivities();
  // }, []);

  useEffect(() => {
    loadGames();
  }, []);

  // useEffect(() => {
  //   cyclingDistanceCalculator();
  //   runningDistanceCalculator();
  //   sessionCalculator();
  // }, [activities]);

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
        {/* <Tab
          eventKey="cycling"
          title="Cycling"
          className={activeTab === "cycling" ? "tab-active" : "tab-hover"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              flexDirection: "column",
            }}
          >
            <Image
              src="https://via.placeholder.com/500x300.png?text=Road+Cyclist"
              alt="Placeholder Road Cyclist"
              style={{ width: "40%", marginBottom: "20px" }}
            />
            My sit-bones hurt. I try to make time whenever possible to go
            cycling, and am training for a 100km ride. (I've been saying this
            for 2 years). I've utilized the Strava API to keep track of my
            rides, and to hold myself accountable. (PS: Feel free to follow me
            on Strava and we can go for a ride!)
          </div>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                Lifetime Distance: {Math.ceil(totalDistanceCycling)} km
                <ProgressBar
                  now={Math.ceil(totalDistanceCycling)}
                  max={382500}
                />
              </Card.Title>
              <Card.Text>
                {((totalDistanceCycling / 382500) * 100).toFixed(6)}% of the way
                to the moon
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                2023 Distance: {Math.ceil(yearlyDistanceCycling)} km
                <ProgressBar
                  now={Math.ceil(yearlyDistanceCycling)}
                  max={1000}
                />
              </Card.Title>
              <Card.Text>
                {((yearlyDistanceCycling / 1000) * 100).toFixed(1)}% of yearly
                goal (1000 km)
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab> */}
        <Tab
          eventKey="cycling"
          title="Cycling"
          className={activeTab === "cycling" ? "tab-active" : "tab-hover"}
        >
          <Cycling
          // totalDistanceCycling={totalDistanceCycling}
          // yearlyDistanceCycling={yearlyDistanceCycling}
          />
        </Tab>
        {/* <Tab
          eventKey="running"
          title="Running"
          className={activeTab === "running" ? "tab-active" : "tab-hover"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              flexDirection: "column",
            }}
          >
            I hate running, but I do it enough to warrant putting it here.
            <Image
              src="https://via.placeholder.com/500x300.png?text=Runner"
              alt="Placeholder Road Cyclist"
              style={{ width: "40%", marginBottom: "20px" }}
            />
          </div>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>
                Lifetime Distance: {Math.ceil(totalDistanceRunning)} km
                <ProgressBar
                  now={Math.ceil(totalDistanceRunning)}
                  max={382500}
                />
              </Card.Title>
              <Card.Text>
                {((totalDistanceRunning / 382500) * 100).toFixed(6)}% of the way
                to the moon
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                2023 Distance: {Math.ceil(yearlyDistanceRunning)} km
                <ProgressBar
                  now={Math.ceil(yearlyDistanceRunning)}
                  max={1000}
                />
              </Card.Title>
              <Card.Text>
                {((yearlyDistanceRunning / 300) * 100).toFixed(1)}% of yearly
                goal (300 km)
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab> */}
        <Tab
          eventKey="running"
          title="Running"
          className={activeTab === "running" ? "tab-active" : "tab-hover"}
        >
          <Running
          // totalDistanceRunning={totalDistanceRunning}
          // yearlyDistanceRunning={yearlyDistanceRunning}
          />
        </Tab>
        {/* <Tab
          eventKey="lifting"
          title="Weight Lifting"
          className={activeTab === "lifting" ? "tab-active" : "tab-hover"}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              flexDirection: "column",
            }}
          >
            <Image
              src="https://via.placeholder.com/500x300.png?text=Weightlifting"
              alt="Placeholder Road Cyclist"
              style={{ width: "40%", marginBottom: "20px" }}
            />
            I'm working on gettin' swole.
          </div>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{sessions} sessions</Card.Title>
              <Card.Text>
                What else do I even put here? Maybe I can put total amount of
                squats or something...
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab> */}
        <Tab
          eventKey="lifting"
          title="Weight Lifting"
          className={activeTab === "lifting" ? "tab-active" : "tab-hover"}
        >
          <Lifting
          // sessions={sessions}
          />
        </Tab>
        <Tab
          eventKey="music"
          title="Music"
          className={activeTab === "music" ? "tab-active" : "tab-hover"}
        >
          <Music />
          {/* <Row className="justify-content-md-center mt-3">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                flexDirection: "column",
                padding: "1vh",
              }}
            >
              Click the buttons below to check out some of my favorite songs
              from each decade!
            </div>
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
          </Modal> */}
        </Tab>
        <Tab
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
          {/* <Button onClick={() => console.log(recentGames)}>Game List</Button> */}
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
        </Tab>
      </Tabs>
    </Container>
  );
}
