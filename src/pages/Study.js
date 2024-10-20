import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import "../styles/App.css";

export default function Study() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState("");
  const [badges, setBadges] = useState([]);

  const dummyBadges = [
    {
      name: "Advent of Cyber 4",
      description: "Description for Badge One",
      img_icon_url: "/img/badges/introtooffensivesecurity.svg",
    },
    {
      name: "Pentesting Principles",
      description: "Description for Badge Two",
      img_icon_url: "/img/badges/introtooffensivesecurity.svg",
    },
    {
      name: "Intro to Offensive Security",
      description: "Description for Badge Two",
      img_icon_url: "/img/badges/introtooffensivesecurity.svg",
    },
    {
      name: "Advent of Cyber 4",
      description: "Description for Badge One",
      img_icon_url: "/img/badges/introtooffensivesecurity.svg",
    },
    {
      name: "Pentesting Principles",
      description: "Description for Badge Two",
      img_icon_url: "/img/badges/introtooffensivesecurity.svg",
    },
    {
      name: "Intro to Offensive Security",
      description: "Description for Badge Two",
      img_icon_url: "/img/badges/introtooffensivesecurity.svg",
    },
  ];

  const loadArticles = async () => {
    await fetch("//" + window.location.hostname + ":5000/articles")
      // const response = await axios
      //   .get("//" + window.location.hostname + ":5000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  };

  const loadBadges = async () => {
    try {
      const response = await fetch(
        "//" + window.location.hostname + ":5000/badges"
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setBadges(data);
      } else {
        console.warn("No data received. Using dummy badges.");
        setBadges(dummyBadges);
      }
    } catch (error) {
      console.error("Failed to fetch badges. Using dummy data.", error);
      setBadges(dummyBadges);
    }
  };

  useEffect(() => {
    loadArticles();
    loadBadges();
  }, []);

  return (
    <Container
      fluid
      className="d-flex flex-column py-3"
      style={{
        backgroundColor: "#2C2C2C",
        minHeight: "100vh",
        fontSize: "18px", // This sets the default font size for the entire component
      }}
    >
      {/* <button onClick={() => console.log(articles)}>Articles</button> */}
      {/* <button onClick={() => console.log(categories)}>Categories</button> */}
      {/* <Button onClick={() => console.log(badges)}>Log Badges</Button> */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flexDirection: "column",
          fontSize: "20px", // Slightly larger for this introduction text
        }}
      >
        I'm working on a tool to allow me to write writeups and notes, but for
        the meantime, enjoy a few badges I've earned during my studies.
      </div>

      {/* Badge Showcase */}
      <Card
        className="text-center flex-column"
        style={{ backgroundColor: "#212529" }}
      >
        <Card.Body>
          <Card.Title style={{ color: "white", fontSize: "24px" }}>
            TryHackMe Badges
          </Card.Title>{" "}
          <Row>
            {badges.map((badge) => {
              return (
                <Col md={4} key={badge.name} className="mb-4">
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title style={{ fontSize: "20px" }}>
                        {badge.name}
                      </Card.Title>
                      <Card.Text style={{ fontSize: "18px" }}>
                        {badge.description}
                      </Card.Text>
                      <Image
                        fluid
                        className="badge-image"
                        style={{
                          marginTop: "2vh",
                          marginBottom: "1vh",
                          width: "40%",
                          height: "auto",
                        }}
                        src={`https://tryhackme.com${badge.img_icon_url}`}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
