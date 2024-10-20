import React, { useState, useEffect } from "react";
import { Image, Card } from "react-bootstrap";

function Lifting() {
  const [activities, setActivities] = useState([]);
  const [sessions, setSessions] = useState(0);

  const loadActivities = async () => {
    await fetch("//" + window.location.hostname + ":5000/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  };

  const sessionCalculator = () => {
    let tempSessions = 0;

    activities.map((activity) => {
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
    sessionCalculator();
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
          src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/lifting.webp"
          alt="Man Lifting Weights"
          style={{ width: "40%", marginBottom: "20px" }}
        />
        I'm working on gettin' swole.
      </div>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{sessions} sessions</Card.Title>
          <Card.Text>
            What else do I even put here? Maybe I can put total amount of squats
            or something...
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Lifting;
