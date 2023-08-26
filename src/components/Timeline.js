import React, { useState, useRef } from "react";
import "../styles/timeline.css";

const Tooltip = ({ description, position }) => {
  return (
    <div
      className="tooltip-container"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {description}
    </div>
  );
};

const TimelineItem = ({
  date,
  event,
  description,
  handleShowTooltip,
  handleHideTooltip,
}) => {
  const itemRef = useRef(null);

  const onMouseEnterHandler = () => {
    const rect = itemRef.current.getBoundingClientRect();
    handleShowTooltip(description, {
      top: rect.top,
      left: rect.left + rect.width / 2,
    });
  };

  return (
    <div className="timeline-item">
      <div className="timeline-description">{description}</div>
      <div className="timeline-header">
        <strong>{date}</strong> - {event}
      </div>
    </div>
  );
};

const Timeline = () => {
  const [currentTooltip, setCurrentTooltip] = useState({
    description: "",
    position: { top: 0, left: 0 },
  });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleShowTooltip = (description, position) => {
    setCurrentTooltip({
      description,
      position: { top: position.top - 60, left: position.left - 100 }, // adjust as needed
    });
    setIsTooltipVisible(true);
  };

  const handleHideTooltip = () => {
    setIsTooltipVisible(false);
  };

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
          <TimelineItem
            key={index}
            {...e}
            handleShowTooltip={handleShowTooltip}
            handleHideTooltip={handleHideTooltip}
          />
        ))}
      </div>

      {isTooltipVisible && <Tooltip {...currentTooltip} />}
    </div>
  );
};

export default Timeline;
