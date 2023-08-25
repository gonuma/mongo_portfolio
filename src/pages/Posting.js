import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  InputGroup,
  Form,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";

export default function Posting() {
  const [verification, setVerification] = useState("unverified");
  const [category, setCategory] = useState("Category");

  const handleSelect = (e) => {
    setCategory(e);
  };

  const inputRender = () => {
    if (verification === "verified")
      return (
        <>
          <InputGroup className="mb-3">
            <InputGroup.Text>Article Title</InputGroup.Text>
            <Form.Control
              id="article-title"
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Article Body</InputGroup.Text>
            <Form.Control
              id="article-body"
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
          <InputGroup>
            <DropdownButton
              variant="outline-secondary"
              title={`${category}`}
              id="category-dropdown"
              className="dropdown-toggle"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="Hardware" href="#">
                Hardware
              </Dropdown.Item>
              <Dropdown.Item eventKey="Red Teaming" href="#">
                Red Teaming
              </Dropdown.Item>
              <Dropdown.Item eventKey="Blue Teaming" href="#">
                Blue Teaming
              </Dropdown.Item>
              <Dropdown.Item eventKey="Recon" href="#">
                Recon
              </Dropdown.Item>
            </DropdownButton>
            <Button
              onClick={() => {
                if (
                  category === "Category" ||
                  document.getElementById("article-title") === "" ||
                  document.getElementById("article-body" === "")
                ) {
                  alert("Write an article first");
                } else {
                  let newArticle = {
                    title: document.getElementById("article-title").value,
                    body: document.getElementById("article-body").value,
                    category: category.toLowerCase(),
                  };
                  axios({
                    method: "post",
                    // url: "//" + window.location.hostname + ":5000/article",
                    url: "//localhost:5000/article",
                    headers: {},
                    data: newArticle,
                  });
                  //   console.log(newArticle);
                }
              }}
            >
              Submit
            </Button>
          </InputGroup>
        </>
      );
  };

  useEffect(() => {
    inputRender();
    console.log(verification);
  }, [verification]);

  return (
    <>
      <input id="password-input" placeholder="Input Password"></input>
      <Button
        onClick={() => {
          let pass = {
            pass: document.getElementById("password-input").value,
          };
          axios({
            method: "post",
            // url: "//" + window.location.hostname + ":5000/article",
            url: "//localhost:5000/verify",
            headers: {},
            data: pass,
          }).then((data) => {
            if (data.data === "verified") {
              // setVerification("verified");
              console.log("verified");
            }
          });
        }}
      >
        Submit
      </Button>
      {/* {inputRender} */}
    </>
  );
  // };
}
