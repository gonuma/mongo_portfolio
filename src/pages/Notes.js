import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, ListGroup, Image, Container } from "react-bootstrap";

export default function Notes() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState("");

  const loadArticles = async () => {
    await fetch("//" + window.location.hostname + ":5000/articles")
      // const response = await axios
      //   .get("//" + window.location.hostname + ":5000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <Container>
      {/* <button onClick={() => console.log(articles)}>Articles</button> */}
      {/* <button onClick={() => console.log(categories)}>Categories</button> */}

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
      {/* <button
        onClick={() => {
          let target = document.getElementById("article");
          return (target.innerText = article);
        }}
        >
        test
      </button> */}
    </Container>
  );
}
