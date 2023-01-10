import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Collapse } from "antd";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

// const { Panel } = Collapse;

export default function Tech() {
  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
    const response = await axios.get(
      window.location.protocol +
        "//" +
        window.location.hostname +
        ":5000/articles"
    );
    setArticles(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return (
    <>
      <div
        className="pic-frame"
        style={{
          width: "50vh",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <img
          style={{
            maxWidth: "inherit",
            maxHeight: "inherit",
            height: "inherit",
            width: "inherit",
            objectFit: "cover",
          }}
          src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/Raspberry_Pi_4_Model_B_-_Side.jpg"
        />
      </div>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Hardware</Accordion.Header>
          <Accordion.Body>
            <ListGroup defaultActiveKey="link1">
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
                              console.log(article.body);
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
                            console.log(article.body);
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Blue Teaming</Accordion.Header>
          <Accordion.Body>
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
                            console.log(article.body);
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
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Recon</Accordion.Header>
          <Accordion.Body>
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
                            console.log(article.body);
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Collapse>
        <Panel header="Blue Teaming">
          {articles.map((item, index) => {
            {
              if (item.category === "blue teaming") {
                return <button>{item.title}</button>;
              }
            }
          })}
        </Panel>
        <Panel header="Recon">
          {articles.map((item, index) => {
            {
              if (item.category === "recon") {
                return <button>{item.title}</button>;
              }
            }
          })}
        </Panel>
      </Collapse> */}
    </>
  );
}
