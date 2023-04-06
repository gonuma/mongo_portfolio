import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Hobby() {
  const [refreshToken, setRefreshToken] = useState("");
  const [activities, setActivities] = useState([]);
  const [totalDistanceCycling, setTotalDistanceCycling] = useState(0);
  const [totalDistanceRunning, setTotalDistanceRunning] = useState(0);

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
    let tempDistance = 0;
    tempActivities.map((activity) => {
      if (activity.type === "Ride") {
        tempDistance += activity.distance;
      }
    });
    setTotalDistanceCycling(tempDistance / 1000); // Convert distance from meters to kilometers
  };

  const runningDistanceCalculator = async () => {
    let tempActivities = await activities;
    let tempDistance = 0;
    tempActivities.map((activity) => {
      if (activity.type === "Run") {
        tempDistance += activity.distance;
      }
    });
    setTotalDistanceRunning(tempDistance / 1000); // Convert distance from meters to kilometers
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
          <p>
            My sit-bones hurt. I try to make time whenever possible to go
            cycling, and am training for a 100km ride. (I've been saying this
            for 2 years)
          </p>
          <Button
            variant="primary"
            onClick={() => {
              activities.map((activity) => {
                if (activity.type === "Ride") {
                  console.log(activity);
                }
              });
              console.log(totalDistanceCycling);
            }}
          >
            Rides
          </Button>
          <h1>{Math.ceil(totalDistanceCycling)} km</h1>
        </Tab>
        <Tab eventKey="running" title="Running">
          <p>I hate running, but I do it enough to warrant putting it here.</p>
          <Button
            variant="primary"
            onClick={() => {
              activities.map((activity) => {
                if (activity.type === "Run") {
                  console.log(activity);
                }
              });
              console.log(totalDistanceRunning);
            }}
          >
            Runs
          </Button>
          <h1>{Math.ceil(totalDistanceRunning)} km</h1>
        </Tab>
        <Tab eventKey="lifting" title="Weight Lifting">
          <p>I'm working on gettin' swole.</p>
          <Button
            variant="primary"
            onClick={() => {
              activities.map((activity) => {
                if (activity.type === "WeightTraining") {
                  console.log(activity);
                }
              });
            }}
          >
            Lifting Sessions
          </Button>
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
