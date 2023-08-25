import React, { useState, useEffect } from "react";
import { Image, Card, ProgressBar } from "react-bootstrap";

function Cycling() {
  const [activities, setActivities] = useState([]);
  const [totalDistanceCycling, setTotalDistanceCycling] = useState(0);
  const [yearlyDistanceCycling, setYearlyDistanceCycling] = useState(0);

  const loadActivities = async () => {
    await fetch("//" + window.location.hostname + ":5000/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  };

  const cyclingDistanceCalculator = () => {
    let tempTotalDistance = 0;
    let tempYearlyDistance = 0;

    activities.map((activity) => {
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

  useEffect(() => {
    loadActivities();
  }, []);

  useEffect(() => {
    cyclingDistanceCalculator();
  }, [activities]);

  return (
    <div>
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
        My sit-bones hurt. I try to make time whenever possible to go cycling,
        and am training for a 100km ride. (I've been saying this for 2 years).
        I've utilized the Strava API to keep track of my rides, and to hold
        myself accountable. (PS: Feel free to follow me on Strava and we can go
        for a ride!)
      </div>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>
            Lifetime Distance: {Math.ceil(totalDistanceCycling)} km
            <ProgressBar now={Math.ceil(totalDistanceCycling)} max={382500} />
          </Card.Title>
          <Card.Text>
            {((totalDistanceCycling / 382500) * 100).toFixed(6)}% of the way to
            the moon
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            2023 Distance: {Math.ceil(yearlyDistanceCycling)} km
            <ProgressBar now={Math.ceil(yearlyDistanceCycling)} max={1000} />
          </Card.Title>
          <Card.Text>
            {((yearlyDistanceCycling / 1000) * 100).toFixed(1)}% of yearly goal
            (1000 km)
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cycling;
