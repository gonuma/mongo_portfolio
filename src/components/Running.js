import React, { useState, useEffect } from "react";
import { Image, Card, ProgressBar } from "react-bootstrap";

function Running() {
  const [activities, setActivities] = useState([]);
  const [totalDistanceRunning, setTotalDistanceRunning] = useState(0);
  const [yearlyDistanceRunning, setYearlyDistanceRunning] = useState(0);

  const imageStyle = {
    width: "40%",
    marginBottom: "20px",
  };

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch(
          "//" + window.location.hostname + ":5000/activities"
        );
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Failed to fetch activities", error);
      }
    };

    loadActivities();

    let tempTotalDistance = 0;
    let tempYearlyDistance = 0;

    activities.forEach((activity) => {
      if (activity.type === "Run") {
        tempTotalDistance += activity.distance;
        if (new Date(activity.startDate) >= new Date("2023-01-01T00:00:00")) {
          tempYearlyDistance += activity.distance;
        }
      }
    });

    setTotalDistanceRunning(tempTotalDistance / 1000);
    setYearlyDistanceRunning(tempYearlyDistance / 1000);
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
         // src="https://via.placeholder.com/500x300.png?text=Road+Cyclist"
 src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/treadmill.avif"          
alt="Mouse on a Wheel"
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
