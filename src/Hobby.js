import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

export default function Hobby() {
  const [refreshToken, setRefreshToken] = useState("");
  const [activities, setActivities] = useState([]);
  // Load Refresh Token
  const getRefreshToken = async () => {
    const response = await axios.get(
      "//" + window.location.hostname + ":5000/strava-refresh"
    );
    setRefreshToken(response.data.access_token);
  };

  const loadActivities = async () => {
    await fetch("//" + window.location.hostname + ":5000/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
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

  return (
    <Container>
      <button onClick={() => console.log(activities)}>Activities</button>
      <button
        onClick={() => {
          activities.map((activity) => {
            if (activity.type === "Run") {
              console.log(activity);
            }
          });
        }}
      >
        Runs
      </button>
      <button
        onClick={() => {
          activities.map((activity) => {
            if (activity.type === "Ride") {
              console.log(activity);
            }
          });
        }}
      >
        Rides
      </button>
      <Tabs
        defaultActiveKey="cycling"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="cycling" title="Cycling">
          My sit-bones hurt. I try to make time whenever possible to go cycling,
          and am training for a 100km ride. (I've been saying this for 2 years)
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="lifting" title="Weight Lifting">
          I'm working on gettin' swole.
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="gaming" title="Gaming">
          I play a lot of videogames...
          {/* <Sonnet /> */}
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
