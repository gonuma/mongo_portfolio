import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import "../styles/timeline.css";

const TimelineItem = ({ date, event, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="timeline-item" onClick={() => setIsActive(!isActive)}>
      <div className={`timeline-description ${isActive ? "active" : ""}`}>
        {description}
      </div>
      <div className="timeline-header">
        <strong>{date}</strong> - {event}
      </div>
    </div>
  );
};

const Timeline = () => {
  const events = [
    {
      date: "12/2015",
      event: "Graduated from University of Nevada, Reno	",
      description: "Earned my bachelor's degree in Linguistics and Japanese.",
    },
    {
      date: "08/2018",
      event: "Japanese - English Localizer, Digital Hearts Ltd.",
      description:
        "I translated mobile and console games, and interpreted meetings with foreign clients.",
    },
    {
      date: "10/2021",
      event: "Code Chrysalis (Programming Bootcamp)",
      description:
        "Learned agile programming methodologies, and created web applications with a variety of technologies including: React, Ruby, AWS, GCP, Docker",
    },
    {
      date: "02/2022",
      event: "Associate Infrastructure Engineer, KSK Ltd.",
      description:
        "As an infrastructure engineer, I created and maintained networks and virtualized environments for clients.",
    },
    {
      date: "09/2022",
      event: "Technical Consultant, Triforce Global Solutions.",
      description:
        "I manage corporate IT tasks for clients, including: device setup, network troubleshooting, and Office 365 administration. I mainly work in Windows 10, 11, and Apple environments.",
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((e, index) => (
          <TimelineItem key={index} {...e} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
