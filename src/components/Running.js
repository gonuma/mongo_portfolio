import React, { useState, useEffect } from "react";
import { Image, Card, ProgressBar } from "react-bootstrap";

function Running() {
  const [activities, setActivities] = useState([]);
  const [totalDistanceRunning, setTotalDistanceRunning] = useState(0);
  const [yearlyDistanceRunning, setYearlyDistanceRunning] = useState(0);

  const loadActivities = async () => {
    await fetch("//" + window.location.hostname + ":5000/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  };

  const runningDistanceCalculator = () => {
    let tempTotalDistance = 0;
    let tempYearlyDistance = 0;

    activities.map((activity) => {
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

  useEffect(() => {
    loadActivities();
  }, []);

  useEffect(() => {
    runningDistanceCalculator();
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
          src="https://via.placeholder.com/500x300.png?text=Runner"
          alt="Placeholder Runner"
          style={{ width: "40%", marginBottom: "20px" }}
        />
        I hate running, but I do it enough to warrant putting it here.
      </div>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>
            Lifetime Distance: {Math.ceil(totalDistanceRunning)} km
            <ProgressBar now={Math.ceil(totalDistanceRunning)} max={382500} />
          </Card.Title>
          <Card.Text>
            {((totalDistanceRunning / 382500) * 100).toFixed(6)}% of the way to
            the moon
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            2023 Distance: {Math.ceil(yearlyDistanceRunning)} km
            <ProgressBar now={Math.ceil(yearlyDistanceRunning)} max={300} />
          </Card.Title>
          <Card.Text>
            {((yearlyDistanceRunning / 300) * 100).toFixed(1)}% of yearly goal
            (300 km)
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Running;
