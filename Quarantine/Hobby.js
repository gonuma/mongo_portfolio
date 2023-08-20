import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import ProgressBar from "react-bootstrap/ProgressBar";
import Music from "../src/components/Music.js";
import { CarouselItem } from "react-bootstrap";

export default function Hobby() {
  // const [refreshToken, setRefreshToken] = useState("");
  const [activities, setActivities] = useState([]);
  const [totalDistanceCycling, setTotalDistanceCycling] = useState(0);
  const [yearlyDistanceCycling, setYearlyDistanceCycling] = useState(0);
  const [totalDistanceRunning, setTotalDistanceRunning] = useState(0);
  const [yearlyDistanceRunning, setYearlyDistanceRunning] = useState(0);
  const [sessions, setSessions] = useState(0);
  const [recentGames, setRecentGames] = useState([]);

  // Load Refresh Token
  // const getRefreshToken = async () => {
  //   const response = await axios.get(
  //     "//" + window.location.hostname + ":5000/strava-refresh"
  //   );
  //   setRefreshToken(response.data.access_token);
  // };

  const loadGames = async () => {
    await fetch("//" + window.location.hostname + ":5000/games")
      .then((res) => res.json())
      .then((data) => {
        setRecentGames(data.games);
      });
  };

  const loadActivities = async () => {
    await fetch("//" + window.location.hostname + ":5000/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  };

  const cyclingDistanceCalculator = async () => {
    let tempActivities = await activities;
    let tempTotalDistance = 0;
    let tempYearlyDistance = 0;

    tempActivities.map((activity) => {
      if (activity.type === "Ride") {
        tempTotalDistance += activity.distance;
        if (new Date(activity.startDate) >= new Date("2023-01-01T00:00:00")) {
          tempYearlyDistance += activity.distance;
        }
      }
    });
    setTotalDistanceCycling(tempTotalDistance / 1000); // Convert distance from meters to kilometers
    setYearlyDistanceCycling(tempYearlyDistance / 1000); // Convert distance from meters to kilometers
  };

  const runningDistanceCalculator = async () => {
    let tempActivities = await activities;
    let tempTotalDistance = 0;
    let tempYearlyDistance = 0;

    tempActivities.map((activity) => {
      if (activity.type === "Run") {
        tempTotalDistance += activity.distance;
        if (new Date(activity.startDate) >= new Date("2023-01-01T00:00:00")) {
          tempYearlyDistance += activity.distance;
        }
      }
    });
    setTotalDistanceRunning(tempTotalDistance / 1000); // Convert distance from meters to kilometers
    setYearlyDistanceRunning(tempYearlyDistance / 1000); // Convert distance from meters to kilometers
  };

  const sessionCalculator = async () => {
    let tempActivities = await activities;
    let tempSessions = 0;

    tempActivities.map((activity) => {
      if (activity.type === "WeightTraining") {
        tempSessions += 1;
      }
    });
    setSessions(tempSessions);
  };

  useEffect(() => {
    loadActivities();
  }, []);

  useEffect(() => {
    loadGames();
  }, []);

  useEffect(() => {
    cyclingDistanceCalculator();
    runningDistanceCalculator();
    sessionCalculator();
  }, [activities]);

  return (
    <Container>
      <Tabs
        defaultActiveKey="cycling"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="cycling" title="Cycling">
          <Card className="border-0">
            <Card.Body>
              <Card.Title>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  My sit-bones hurt. I try to make time whenever possible to go
                  cycling, and am training for a 100km ride. (I've been saying
                  this for 2 years)
                </div>
              </Card.Title>
              <Card.Text>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      Lifetime Distance: {Math.ceil(totalDistanceCycling)} km
                      <ProgressBar
                        now={Math.ceil(totalDistanceCycling)}
                        max={382500}
                      />
                    </Card.Title>
                    <Card.Text>
                      {((totalDistanceCycling / 382500) * 100).toFixed(6)}% of
                      the way to the moon
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
                      {((yearlyDistanceCycling / 1000) * 100).toFixed(1)}% of
                      yearly goal (1000 km)
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="running" title="Running">
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="center-text">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  I hate running, but I do it enough to warrant putting it here.
                </div>
              </Card.Title>
              <Card.Text>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      Lifetime Distance: {Math.ceil(totalDistanceRunning)} km
                      <ProgressBar
                        now={Math.ceil(totalDistanceRunning)}
                        max={382500}
                      />
                    </Card.Title>
                    <Card.Text>
                      {((totalDistanceRunning / 382500) * 100).toFixed(6)}% of
                      the way to the moon
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
                      {((yearlyDistanceRunning / 300) * 100).toFixed(1)}% of
                      yearly goal (300 km)
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="lifting" title="Weight Lifting">
          <Card className="border-0">
            <Card.Body>
              <Card.Title>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  I'm working on gettin' swole.
                </div>
              </Card.Title>
              <Card.Text>
                <Card>
                  <Card.Body>
                    <Card.Title>{sessions} sessions</Card.Title>
                    <Card.Text>
                      What else do I even put here? Maybe I can put total amount
                      of squats or something...
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Text>
            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="music" title="Music">
          <Music />
        </Tab>
        <Tab eventKey="gaming" title="Gaming">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            I play a lot of videogames. Here are some I've been playing over the
            past couple of weeks...
          </div>
          <Carousel>
            {recentGames.map((game, index) => {
              return (
                <CarouselItem key={`${game.name}`}>
                  <Card className="align-items-center border-0">
                    <Card.Body>
                      <Card.Title>
                        {game.name}
                        <Card.Img
                          // style={{ height: "45vh", width: "auto" }}
                          src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/capsule_616x353.jpg`}
                        />
                        {/* <Button onClick={() => console.log(game)}>Test</Button> */}
                      </Card.Title>
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
