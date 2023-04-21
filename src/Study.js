import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Card, Col, Row } from "react-bootstrap";

export default function Study() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState("");
  const [badges, setBadges] = useState([]);

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
    await fetch("//" + window.location.hostname + ":5000/badges")
      .then((res) => res.json())
      .then((data) => setBadges(data));
  };

  useEffect(() => {
    loadArticles();
    loadBadges();
  }, []);

  return (
    <Container>
      {/* <button onClick={() => console.log(articles)}>Articles</button> */}
      {/* <button onClick={() => console.log(categories)}>Categories</button> */}
      <Button onClick={() => console.log(badges)}>Log Badges</Button>
      <Image
        fluid
        style={{
          maxHeight: "20vh",
          maxWidth: "90vw",
          padding: "1vh",
          display: "block",
          margin: "auto",
        }}
        src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/Raspberry_Pi_4_Model_B_-_Side.jpg"
      />
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Hardware</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {articles.map((item, index) => {
                {
                  if (item.category === "hardware") {
                    return (
                      <ListGroup.Item
                        action
                        href={"#link" + index}
                        onClick={(e) => {
                          articles.map((article) => {
                            if (article.title === e.target.text) {
                              let articleDiv =
                                document.getElementById("article");
                              setArticle(article.body);
                              return (articleDiv.innerText = article.body);
                            }
                          });
                        }}
                      >
                        {item.title}
                      </ListGroup.Item>
                    );
                  }
                }
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Red Teaming</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {articles.map((item, index) => {
                {
                  if (item.category === "red teaming") {
                    return (
                      <ListGroup.Item
                        action
                        href={"#link" + index}
                        onClick={(e) => {
                          articles.map((article) => {
                            if (article.title === e.target.text) {
                              let articleDiv =
                                document.getElementById("article");
                              setArticle(article.body);
                              return (articleDiv.innerText = article.body);
                            }
                          });
                        }}
                      >
                        {item.title}
                      </ListGroup.Item>
                    );
                  }
                }
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Blue Teaming</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {articles.map((item, index) => {
                {
                  if (item.category === "blue teaming") {
                    return (
                      <ListGroup.Item
                        action
                        href={"#link" + index}
                        onClick={(e) => {
                          articles.map((article) => {
                            if (article.title === e.target.text) {
                              let articleDiv =
                                document.getElementById("article");
                              setArticle(article.body);
                              return (articleDiv.innerText = article.body);
                            }
                          });
                        }}
                      >
                        {item.title}
                      </ListGroup.Item>
                    );
                  }
                }
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Recon</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {articles.map((item, index) => {
                {
                  if (item.category === "recon") {
                    return (
                      <ListGroup.Item
                        action
                        href={"#link" + index}
                        onClick={(e) => {
                          articles.map((article) => {
                            if (article.title === e.target.text) {
                              let articleDiv =
                                document.getElementById("article");
                              setArticle(article.body);
                              return (articleDiv.innerText = article.body);
                            }
                          });
                        }}
                      >
                        {item.title}
                      </ListGroup.Item>
                    );
                  }
                }
              })}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <p id="article"></p>

      {/* Badge Showcase */}
      <Card className="text-center" style={{ backgroundColor: "#212529" }}>
        <Card.Body>
          <Card.Title style={{ color: "white" }}>TryHackMe Badges</Card.Title>
          <Col
            // xs={6}
            className="d-flex"
            // style={{ height: "15vh" }}
          >
            {badges.map((badge) => {
              return (
                <Container className="d-flex">
                  <Row className="align-items-center">
                    <Col>
                      <Card
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          height: "35vh",
                        }}
                      >
                        <Card.Body className="text-center">
                          <Card.Title>{badge.name}</Card.Title>
                          <Card.Text>{badge.description}</Card.Text>
                          <Image
                            fluid
                            style={{
                              marginTop: "2vh",
                              marginBottom: "1vh",
                              width: "30%",
                              height: "auto",
                            }}
                            src={`https://tryhackme.com${badge.img_icon_url}`}
                          />
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
                // < src={`https://tryhackme.com${badge.img_icon_url}`} />
              );
            })}
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
}