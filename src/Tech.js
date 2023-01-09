import React, {useState, useEffect} from "react";
import axios from "axios";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default function Tech() {

  const [articles, setArticles] = useState([]);

  const loadArticles = async () => {
    const response = await axios.get(window.location.protocol + "//" + window.location.hostname + ":5000/articles");
    setArticles(response.data);
    // console.log(response.data);
  }

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
  <Collapse>
  <Panel header="Hardware">
  {articles.map((item, index) => {
          { if (item.category === "hardware")
            {console.log(item)
              return (
                <button>{item.title}</button>
              )
            }
          }
        })}
  </Panel>
  <Panel header="Red Teaming">
  {articles.map((item, index) => {
          { if (item.category === "red teaming")
            {console.log(item)
              return (
                <button>{item.title}</button>
              )
            }
          }
        })}
  </Panel>
  <Panel header="Blue Teaming">
  {articles.map((item, index) => {
          { if (item.category === "blue teaming")
            {console.log(item)
              return (
                <button>{item.title}</button>
              )
            }
          }
        })}
  </Panel>
  <Panel header="Recon">
  {articles.map((item, index) => {
          { if (item.category === "recon")
            {console.log(item)
              return (
                <button>{item.title}</button>
              )
            }
          }
        })}
  </Panel>
  </Collapse>
  </>
  );
}
