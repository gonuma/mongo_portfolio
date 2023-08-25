import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Image,
  Container,
  Tab,
  Tabs,
  Button,
  Card,
  Row,
  Col,
  Carousel,
  CarouselItem,
  ProgressBar,
  Modal,
  ListGroup,
} from "react-bootstrap";
import Cycling from "../components/Cycling.js";
import Running from "../components/Running.js";
import Lifting from "../components/Lifting.js";
import Music from "../components/Music.js";
import Gaming from "../components/Gaming.js";
import "../styles/App.css";

export default function Hobby() {
  const [activeTab, setActiveTab] = useState("cycling");

  return (
    <Container
      fluid
      className="d-flex flex-column py-3"
      style={{
        backgroundColor: "#2C2C2C",
        marginTop: "1vh",
        minHeight: "100vh",
      }}
    >
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        id="uncontrolled-tab-example"
        className="mb-3 text-white"
      >
        <Tab
          eventKey="cycling"
          title="Cycling"
          className={activeTab === "cycling" ? "tab-active" : "tab-hover"}
        >
          <Cycling />
        </Tab>
        <Tab
          eventKey="running"
          title="Running"
          className={activeTab === "running" ? "tab-active" : "tab-hover"}
        >
          <Running />
        </Tab>

        <Tab
          eventKey="lifting"
          title="Weight Lifting"
          className={activeTab === "lifting" ? "tab-active" : "tab-hover"}
        >
          <Lifting />
        </Tab>
        <Tab
          eventKey="music"
          title="Music"
          className={activeTab === "music" ? "tab-active" : "tab-hover"}
        >
          <Music />
        </Tab>
        <Tab
          eventKey="gaming"
          title="Gaming"
          className={activeTab === "gaming" ? "tab-active" : "tab-hover"}
        >
          <Gaming />
        </Tab>
      </Tabs>
    </Container>
  );
}
