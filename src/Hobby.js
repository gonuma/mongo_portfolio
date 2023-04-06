import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Music from "./Music.js";

export default function Hobby() {
  const [refreshToken, setRefreshToken] = useState("");
  const [activities, setActivities] = useState([]);
  const [totalDistanceCycling, setTotalDistanceCycling] = useState(0);
  const [yearlyDistanceCycling, setYearlyDistanceCycling] = useState(0);
  const [totalDistanceRunning, setTotalDistanceRunning] = useState(0);
  const [yearlyDistanceRunning, setYearlyDistanceRunning] = useState(0);

  // Load Refresh Token
  // const getRefreshToken = async () => {
  //   const response = await axios.get(
  //     "//" + window.location.hostname + ":5000/strava-refresh"
  //   );
  //   setRefreshToken(response.data.access_token);
  // };

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
        // console.log(activity.startDate);
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

  // const callActivities = async () => {
  //   await fetch(
  //     `https://www.strava.com/api/v3/athlete/activities?per_page=90`,
  //     {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: "Bearer " + refreshToken,
  //         "Content-Type": "application/json",
  //       },
  //       method: "GET",
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setActivities(data));
  // };

  // useEffect(() => {
  //   getRefreshToken();
  // }, []);

  useEffect(() => {
    loadActivities();
  }, []);

  useEffect(() => {
    cyclingDistanceCalculator();
    runningDistanceCalculator();
  }, [activities]);

  return (
    <Container>
      <Button
        variant="info"
        style={{ margin: "1vh" }}
        onClick={() => console.log(activities)}
      >
        Log All Activities
      </Button>
      <Tabs
        defaultActiveKey="cycling"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="cycling" title="Cycling">
          {/* <Button
            variant="primary"
            style={{ margin: "1vh" }}
            onClick={() => {
              activities.map((activity) => {
                if (activity.type === "Ride") {
                  console.log(activity);
                }
              });
              console.log(totalDistanceCycling);
            }}
          >
            Log Rides
          </Button> */}
          <p>
            My sit-bones hurt. I try to make time whenever possible to go
            cycling, and am training for a 100km ride. (I've been saying this
            for 2 years)
          </p>
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
        </Tab>
        <Tab eventKey="running" title="Running">
          {/* <Button
            variant="primary"
            style={{ margin: "1vh" }}
            onClick={() => {
              activities.map((activity) => {
                if (activity.type === "Run") {
                  console.log(activity);
                }
              });
              console.log(totalDistanceRunning);
            }}
          >
            Log Runs
          </Button> */}
          <p>I hate running, but I do it enough to warrant putting it here.</p>
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
          {/* <h1>Lifetime Distance: {Math.ceil(totalDistanceRunning)} km</h1>
          <h1>2023 Distance: {Math.ceil(yearlyDistanceRunning)} km</h1> */}
        </Tab>
        <Tab eventKey="lifting" title="Weight Lifting">
          {/* <Button
            variant="primary"
            style={{ margin: "1vh" }}
            onClick={() => {
              activities.map((activity) => {
                if (activity.type === "WeightTraining") {
                  console.log(activity);
                }
              });
            }}
          >
            Log Lifting Sessions
          </Button> */}
          <p>I'm working on gettin' swole.</p>
        </Tab>
        <Tab eventKey="music" title="Music">
          I listen to a large variety of music, and am not too bad at karaoke.
          <Music />
        </Tab>
        <Tab eventKey="gaming" title="Gaming">
          I play a lot of videogames...
        </Tab>
      </Tabs>
      {/* <Image
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
      <p
        style={{
          textAlign: "left",
          backgroundColor: "lightblue",
        }}
      >
        I plan to talk about my many hobbies on this page, including cycling,
        weight lifting, videogames, and all things IT. Over the years, I've
        tried a huge number of sports, including swimming, water polo, fencing,
        baseball, and fencing, but of all of the sports I've done, the one that
        has made the largest impact in my life is cycling.
      </p> */}
    </Container>
  );
}
